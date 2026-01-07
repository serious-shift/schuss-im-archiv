"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/src/lib/useIsomorphicLayoutEffect";
import { SceneContent } from "@/src/types";
import InvestigationView from "./game/InvestigationView";
import NarrativeBlockView from "./game/NarrativeBlockView";
import DialogueBlockView from "./game/DialogueBlockView";
import NavigationBlockView from "./game/NavigationBlockView";
import DecisionBlockView from "./game/DecisionBlockView";
import InfoBlockView from "./game/InfoBlockView";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { text } from "stream/consumers";

gsap.registerPlugin(ScrollTrigger);

type SceneSectionProps = {
    title: string;
    showTitleBanner?: boolean;
    content: SceneContent[];
    id: string;
    video?: string; 
    onNavigate: (targetSceneId: string) => void;
    onSceneComplete: (sceneId: string) => void;
    layout?: 'default' | 'split-view';
};

export default function SceneSection({ title, content, showTitleBanner, id, video, onNavigate, onSceneComplete, layout }: SceneSectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // check for interactive blocks
    const isInteractive = content.some(block =>
        block.type === 'investigation' || block.type === 'decision' || block.type === 'navigation'
    )

    useIsomorphicLayoutEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        let animationTimeout: NodeJS.Timeout;

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

                // animation for buttons
                if (interactiveBlocks.length > 0) {
                    const elementsToAnimate = gsap.utils.toArray(sectionEl.querySelectorAll('.anim-interactive'));
                    if (elementsToAnimate.length > 0) {
                        gsap.set(elementsToAnimate, { opacity: 0, y: 20 });

                        ScrollTrigger.create({
                            scroller: scroller,
                            trigger: sectionEl,
                            start: "top -180%",
                            onEnter: () => gsap.to(elementsToAnimate, {
                                opacity: 1,
                                y: 0,
                                duration: 0.5,
                                stagger: 0.1,
                                ease: "power2.out",
                            }),
                            once: true,
                        })
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
                animationTimeout = setTimeout(createAnimations, 0);
            }
        }, sectionEl);

        return () => {
            ctx.revert();
            clearTimeout(animationTimeout);
        };
        
    }, [video, isInteractive, onSceneComplete, id]);

    // separate content blocks
    const infoBlock = content.find(block => block?.type === 'info');
    const investigationBlock = content.find(block => block.type === 'investigation');

    const otherContent = content.filter(block => block.type !== 'investigation' && block.type !== 'info');

    const textBlocks = otherContent.filter(
        block => block?.type === 'narrative' || block?.type === 'dialogue'
    );

    const interactiveBlocks = otherContent.filter(
        block => block?.type === 'decision' || block?.type === 'navigation'
    )

    {/* interaction layer in split view */}
    if (layout === 'split-view') {
        const decisionBlock = interactiveBlocks.find(block => block?.type === 'decision');

        return (
            <section
            ref={sectionRef}
            id={id}
            className="relative h-screen"
        >
            <div className="h-full w-full flex flex-col bg-black">
                {/* infoBlock */}
                {infoBlock && infoBlock.type === 'info' && (
                    <div className="felx-shrink-0 p-8 md:p-12" style={{ height: '15vh' }}>
                        <div className="max-w-prose mx-auto h-full flex items-center">
                            <InfoBlockView block={infoBlock} />
                        </div>
                    </div>
                )}

                {/* decision block */}
                {decisionBlock && decisionBlock.type === 'decision' && (
                    <div className="flex-grow p-8 md:p-12">
                        <DecisionBlockView block={decisionBlock} onNavigate={onNavigate} />
                    </div>
                )}
            </div>
        </section>
        );
    }

    return (
        <section
            ref={sectionRef}
            id={id}
            className="relative h-[300vh]"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                
                {/* background-layer */}
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

                {/* info block layer */}
                {infoBlock && infoBlock.type === 'info' && (
                    <div className="top-20 left-0 right-0 p-8 md:p-12 pointer-events-none z-10">
                        <div className="max-w-prose mx-auto">
                            <InfoBlockView block={infoBlock} />
                        </div>
                    </div>
                )}

                {/* text layer */}
                {textBlocks.length > 0 && (
                    <div className="absolute top-30 left-0 right-0 p-8 md:p-12 pointer-events-none">
                        <div className="max-w-prose">
                            <div className="anim-container w-full space-y-4 text-white pointer-events-auto">
                                {textBlocks.map((block, index) => {
                                    if (!block) return null;
                                    switch (block.type) {
                                        case 'narrative':
                                            return <NarrativeBlockView key={index} block={block} />;
                                        case 'dialogue':
                                            return <DialogueBlockView key={index} block={block} />;
                                        default:
                                            return null;
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* interaction layer */}
                {interactiveBlocks.length > 0 && (
                    <div className="interactive-container absolute bottom-10 left-0 right-0 p-8 md:p-12 pointer-events-none">
                        <div className="max-w-prose mx-auto">
                            <div className="anim-container w-full space-y-4 text-white pointer-events-auto">
                                {interactiveBlocks.map((block, index) => {
                                    if (!block) return null;
                                    switch (block.type) {
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
                )}

                {/* UI Title Banner */}
                {showTitleBanner && (
                    <div className="title-banner z-10">
                        <h3>{title}</h3>
                    </div>
                )}
            </div>
        </section>
    );
}