"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/src/lib/useIsomorphicLayoutEffect";
import { SceneContent } from "@/src/types";
import InvestigationView from "./game/InvestigationView";
import NarrativeBlockView from "./game/NarrativeBlockView";
import DialogueBlockView from "./game/DialogueBlockView";
import NavigationBlockView from "./game/NavigationBlockView";
import DecisionBlockView from "./game/DecisionBlockView";

type SceneSectionProps = {
    title: string;
    content: SceneContent[];
    id: string;
    video?: string; 
    onNavigate: (targetSceneId: string) => void;
    onSceneComplete: (sceneId: string) => void;
};

export default function SceneSection({ title, content, id, video, onNavigate, onSceneComplete }: SceneSectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // check for interactive blocks
    const isInteractive = content.some(block =>
        block.type === 'investigation' || block.type === 'decision' || block.type === 'navigation'
    )

    useIsomorphicLayoutEffect(() => {
        const videoEl = videoRef.current;
        const sectionEl = sectionRef.current;
        const scroller = document.querySelector("#smooth-wrapper");

        if (!sectionEl || !scroller) return;

        let ctx: gsap.Context | undefined;

        const setupAnimations = () => {
            (async () => {
                const { default: gsap } = await import("gsap");
                const { ScrollTrigger } = await import("gsap/ScrollTrigger");
                gsap.registerPlugin(ScrollTrigger);

                ctx = gsap.context(() => {
                    // Animation for text elements
                    const elementsToAnimate = gsap.utils.toArray(sectionEl.querySelectorAll('.anim-child'));
                    gsap.from(elementsToAnimate, {
                        opacity: 0, y: 30, stagger: 0.2,
                        scrollTrigger: {
                            scroller: scroller,
                            trigger: sectionEl,
                            start: "top 60%",
                            toggleActions: "play none none none",
                        }
                    });

                    // video scrub animation
                    if (videoEl) {
                        videoEl.currentTime = 0;
                        ScrollTrigger.create({
                            scroller: scroller,
                            trigger: sectionEl,
                            start: "top top",
                            end: "bottom bottom",
                            onUpdate: self => {
                                if (videoEl.duration) {
                                    const progress = self.progress;
                                    videoEl.currentTime = videoEl.duration * progress;
                                }
                            }
                        });
                    }

                    // trigger scene complete on scroll end
                    if (!isInteractive) {
                        ScrollTrigger.create({
                            scroller: scroller,
                            trigger: sectionEl,
                            start: "top -150%",
                            onEnter: () => onSceneComplete(id),
                            once: true
                        })
                    }
                }, sectionEl);
            })();
        };

        if (videoEl) {
            videoEl.onloadedmetadata = setupAnimations;
        } else {
            setupAnimations();
        }

        return () => {
            ctx?.revert();
        };
    }, [video, isInteractive, onSceneComplete, id]);

    const investigationBlock = content.find(block => block.type === 'investigation');
    const otherContent = content.filter(block => block.type !== 'investigation');

    return (
        <section
            ref={sectionRef}
            id={id}
            className="relative h-[300vh]"
        >
            <div className="sticky top-0 h-screen w-full">
                {video && (
                    <video
                        ref={videoRef}
                        src={video}
                        className="w-full h-full object-cover"
                        playsInline
                        muted
                        preload="metadata"
                    />
                )}
                {investigationBlock && investigationBlock.type === 'investigation' && (
                    <InvestigationView
                        block={investigationBlock}
                        onComplete={() => onSceneComplete(id)} 
                    />
                )}
            </div>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
                <div className="max-w-2xl text-left space-y-6 text-white pointer-events-auto p-8">
                    <h2 className="anim-child text-4xl font-bold">{title}</h2>
                    {otherContent.map((block, index) => {
                        if (!block) return null;
                        switch (block.type) {
                            case 'narrative':
                                return <NarrativeBlockView key={index} block={block} />;
                            case 'dialogue':
                                return <DialogueBlockView key={index} block={block} />;
                            case 'navigation':
                                return <NavigationBlockView key={index} block={block} onNavigate={onNavigate} />;
                            case 'decision':
                                return <DecisionBlockView key={index} block={block} onNavigate={onNavigate} />;
                            default:
                                return null;
                        }
                    })}
                </div>
            </div>
        </section>
    );
}