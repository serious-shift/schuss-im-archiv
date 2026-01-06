"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/src/lib/useIsomorphicLayoutEffect";
import { SceneContent } from "@/src/types";
import InvestigationView from "./game/InvestigationView";
import NarrativeBlockView from "./game/NarrativeBlockView";
import DialogueBlockView from "./game/DialogueBlockView";
import NavigationBlockView from "./game/NavigationBlockView";
import DecisionBlockView from "./game/DecisionBlockView";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SceneSectionProps = {
    title: string;
    showTitleBanner?: boolean;
    content: SceneContent[];
    id: string;
    video?: string; 
    onNavigate: (targetSceneId: string) => void;
    onSceneComplete: (sceneId: string) => void;
};

export default function SceneSection({ title, content, showTitleBanner, id, video, onNavigate, onSceneComplete }: SceneSectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // check for interactive blocks
    const isInteractive = content.some(block =>
        block.type === 'investigation' || block.type === 'decision' || block.type === 'navigation'
    )

    useIsomorphicLayoutEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const ctx = gsap.context(() => {

            const createAnimations = () => {
                const scroller = "#smooth-wrapper";

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

                // Video Scrub Animation
                const videoEl = videoRef.current;
                if (videoEl) {
                    videoEl.currentTime = 0;
                    ScrollTrigger.create({
                        scroller: scroller,
                        trigger: sectionEl,
                        start: "top top",
                        end: "bottom bottom",
                        onUpdate: self => {
                            if (videoEl.duration) {
                                videoEl.currentTime = videoEl.duration * self.progress;
                            }
                        }
                    });
                }

                // Trigger for scene completion
                if (!isInteractive) {
                    ScrollTrigger.create({
                        scroller: scroller,
                        trigger: sectionEl,
                        start: "top -150%",
                        onEnter: () => onSceneComplete(id),
                        once: true,
                    })
                }

                // Animation for narrative texts
                const narrativeContainer = sectionEl.querySelector("#narrative-scroll-container");
                const narrativeTexts = sectionEl.querySelector("#narrative-texts");

                if (narrativeContainer && narrativeTexts) {
                    const containerHeight = narrativeContainer.clientHeight;
                    const textHeight = narrativeTexts.clientHeight;

                    if (textHeight > containerHeight) {
                        gsap.to(narrativeTexts, {
                            y: -(textHeight - containerHeight),
                            ease: "none",
                            scrollTrigger: {
                                scroller: scroller,
                                trigger: sectionEl,
                                start: "top top",
                                end: "bottom bottom",
                                scrub: true,
                            }
                        });
                    }
                }
            };

            const videoEl = videoRef.current;
            if (videoEl) {
                if (videoEl.readyState >= 2) {
                    createAnimations();
                } else {
                    videoEl.addEventListener('loadedmetadata', createAnimations, { once: true });
                }
            } else {
                createAnimations();
            }
        }, sectionEl);

        return () => ctx.revert();
        
    }, [video, isInteractive, onSceneComplete, id]);

    const investigationBlock = content.find(block => block.type === 'investigation');
    const otherContent = content.filter(block => block.type !== 'investigation');

    return (
        <section
            ref={sectionRef}
            id={id}
            className="relative h-[300vh]"
        >
            {/* --- EIN EINZIGER STICKY CONTAINER FÜR ALLES --- */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                
                {/* Hintergrund-Ebene (Video oder Ermittlung) */}
                {video && (
                    <video
                        ref={videoRef}
                        src={video}
                        className="absolute top-0 left-0 w-full h-full object-cover"
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

                {/* Text-Ebene (zentrierter Inhalt) */}
                <div className="absolute top-30 left-0 right-0 p-8 md:p-12 pointer-events-none">
                    <div className="max-w-prose">
                        <div className="anim-container w-full space-y-4 text-white pointer-events-auto">
                            {otherContent.map((block, index) => {
                                if (!block) return null;
                                switch (block.type) {
                                    case 'narrative':
                                        return <NarrativeBlockView key={index} block={block} />;
                                    case 'dialogue':
                                        return <DialogueBlockView key={index} block={block} />;
                                    case 'decision':
                                        return <DecisionBlockView key={index} block={block} onNavigate={onNavigate} />;
                                    case 'navigation':
                                        return <NavigationBlockView key={index} block={block} onNavigate={onNavigate} />;
                                    default:
                                        return null;
                                }
                            })}
                        </div>
                    </div>
                </div>

                {/* UI-Ebene (Titel-Banner) */}
                {showTitleBanner && (
                    <div className="title-banner z-10">
                        <h3>{title}</h3>
                    </div>
                )}
            </div>
        </section>
    );
}