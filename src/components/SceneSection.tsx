"use client";

import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "@/src/lib/useIsomorphicLayoutEffect";
import { SceneContent, DialogueBlock, DecisionBlock, NavigationBlock, InfoBlock, InvestigationBlock, NarrativeBlock, AnalysisBlock, CustomBlock } from "@/src/types";
import InvestigationView from "./game/InvestigationView";
import NarrativeBlockView from "./game/NarrativeBlockView";
import DialogueBlockView from "./game/DialogueBlockView";
import NavigationBlockView from "./game/NavigationBlockView";
import DecisionBlockView from "./game/DecisionBlockView";
import InfoBlockView from "./game/InfoBlockView";
import AnalysisBlockView from "./game/AnalysisBlockView";
import { AudioBlockView } from "./game/AudioBlockView";
import { ChatBlockView } from './game/ChatBlockView';
import ScrollHint from "@/src/components/ui/ScrollHint";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SceneSectionProps = {
    title: string;
    showTitleBanner?: boolean;
    content: SceneContent[];
    id: string;
    video?: string; 
    image?: string;
    onNavigate: (targetSceneId: string) => void;
    onSceneComplete: (sceneId: string) => void;
    onDecision: (sceneId: string, followUpContent: SceneContent[]) => void;
    layout?: 'default' | 'split-view' | 'dialogue' | 'sequential';
};

export default function SceneSection({ title, content, showTitleBanner, id, video, image, onNavigate, onSceneComplete, onDecision, layout = 'default',  }: SceneSectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [analysisProgress, setAnalysisProgress] = useState(0);

    {/* Define all content blocks */}
    const infoBlock = content.find(block => block?.type === 'info') as InfoBlock | undefined;
    const investigationBlock = content.find(block => block?.type === 'investigation') as InvestigationBlock | undefined;
    const decisionBlock = content.find(block => block?.type === 'decision') as DecisionBlock | undefined;
    const navigationBlock = content.find(block => block?.type === 'navigation') as NavigationBlock | undefined;

    {/* Check for interactive blocks */}
    const isInteractive = !!(investigationBlock || decisionBlock || navigationBlock);

    useIsomorphicLayoutEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        let animationTimeout: NodeJS.Timeout;

        const ctx = gsap.context(() => {

            const createAnimations = () => {
                {/* Video Scrub Animation */}
                const videoEl = videoRef.current;
                if (videoEl) {
                    videoEl.currentTime = 0;
                    ScrollTrigger.create({
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

                {/* Trigger for scene completion */}
                if (!isInteractive) {
                    ScrollTrigger.create({
                        trigger: sectionEl,
                        start: "top -150%",
                        onEnter: () => onSceneComplete(id),
                        once: true,
                    })
                }

                {/* Animation for dialogue blocks */}
                if (layout === 'dialogue') {
                    const steps = gsap.utils.toArray<HTMLElement>(sectionEl.querySelectorAll('.dialogue-step'))

                    if (steps.length > 0) {
                        gsap.set(steps, { opacity: 0 });

                        const tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: sectionEl,
                                start: "top top",
                                end: "bottom bottom",
                                scrub: 1,
                            }
                        });

                        tl.to(steps[0], { opacity: 1 });

                        steps.forEach((step, index) => {
                            if (index === 0) return;

                            const previousStep = steps[index -1];

                            tl.to(previousStep, { opacity: 0 }, "+=1")
                                .to(step, { opacity: 1 }, "<")
                        })
                    } else {
                        const dialogueContainer = sectionEl.querySelector('.dialogue-container');
                        if (dialogueContainer) {
                            const lines = gsap.utils.toArray<HTMLElement>(dialogueContainer.querySelectorAll('.dialogue-line'));
                            const decisionContainer = sectionEl.querySelector('.decision-block-container');

                            if (lines.length > 0) {
                                gsap.set(lines[0], { opacity: 1 });

                                const tl = gsap.timeline({
                                    scrollTrigger: {
                                        trigger: sectionEl,
                                        pin: true,
                                        pinReparent: true,
                                        anticipatePin: 1,
                                        scrub: 1,
                                        start: "top top",
                                        end: `+=${lines.length * 150}%`,
                                    }
                                });

                                lines.forEach((line, index) => {
                                    if (index === 0) return;
                                    const prevLine = lines[index - 1];
                                    tl.to(prevLine, { opacity: 0 }, `+=${index * 0.1}`).to(line, { opacity: 1 });
                                });

                                if (decisionContainer) {
                                    gsap.set(decisionContainer, { autoAlpha: 0 });
                                    tl.to(lines[lines.length - 1], { opacity: 0 }, "+=1").to(decisionContainer, { autoAlpha: 1 });
                                }
                            }
                        }
                    }
                }

                {/* Animation for sequential layout */}
                if (layout === 'sequential') {
                    const steps = gsap.utils.toArray<HTMLElement>(sectionEl.querySelectorAll('.dialogue-step'));
                    if (steps.length > 0) {
                        gsap.set(steps, { autoAlpha: 0, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' });

                        const masterTl = gsap.timeline({
                            scrollTrigger: {
                                trigger: sectionEl,
                                start: "top top",
                                end: `bottom bottom`,
                                scrub: true,
                            }
                        });

                        steps.forEach((step, index) => {
                            const stepTl = gsap.timeline();

                            const internalScroller = step.querySelector('.internal-scroll-text');
                            const analysisBlock = step.querySelector('.analysis-block-wrapper');

                            stepTl.to(step, { autoAlpha: 1, duration: 1 });

                            stepTl.to(step, { autoAlpha: 1, duration: 1 });

                            if (internalScroller) {
                                const textHeight = internalScroller.scrollHeight;
                                const container = internalScroller.parentElement;
                                const containerHeight = container ? container.clientHeight : 0;
                                if (textHeight > containerHeight) {
                                    stepTl.to(internalScroller, {
                                        y: -(textHeight - containerHeight),
                                        duration: 5,
                                        ease: "none",
                                        //end: `bottom bottom`,
                                    });
                                } else {
                                    stepTl.to({}, {duration: 2});
                                }
                            } else if (analysisBlock) {
                                const analysisProgress = { value: 0 };
                                stepTl.to(analysisProgress, {
                                    value: 1,
                                    duration: 5,
                                    onUpdate: () => setAnalysisProgress(analysisProgress.value),
                                });
                            } else {
                                stepTl.to({}, {duration: 2});
                            }

                            stepTl.to({}, { duration: 5 });

                            stepTl.to(step, { autoAlpha: 0, duration: 1 });

                            masterTl.add(stepTl);
                        });
                    }
                }

                {/* Animation for narrative texts */}
                if (layout !== 'sequential' && layout !== 'dialogue') {
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
                                    trigger: sectionEl,
                                    start: "top top",
                                    end: "center center",
                                    scrub: true,
                                }
                            });
                        }
                    }
                }

                if (layout === 'sequential' || layout === 'dialogue') {
                    const narrativeContainer = sectionEl.querySelector("#narrative-scroll-container");
                    const narrativeTexts = sectionEl.querySelector("#narrative-texts");

                    if (narrativeContainer && narrativeTexts) {
                        const containerHeight = narrativeContainer.clientHeight;
                        const textHeight = narrativeTexts.clientHeight;

                        if (textHeight > containerHeight) {
                            const steps = gsap.utils.toArray<HTMLElement>(sectionEl.querySelectorAll('.dialogue-step'));
                            const narrativeStepIndex = steps.findIndex(step =>
                                step.querySelector('.internal-scroll-text') !== null
                            );
                            const numSteps = steps.length;
                            const stepSize = 100 / numSteps;
                            let startPercent = narrativeStepIndex * stepSize;
                            if (startPercent == 0) startPercent = 5; 

                            gsap.to(narrativeTexts, {
                                y: -(textHeight - containerHeight),
                                ease: "none",
                                scrollTrigger: {
                                    trigger: sectionEl,
                                    start: `${startPercent}% top`,
                                    end: `+=${textHeight - containerHeight}`,
                                    scrub: true,
                                }
                            });
                        }
                    }
                }

                {/* Animation for buttons */}
                if (interactiveBlocks.length > 0) {
                    const elementsToAnimate = gsap.utils.toArray(sectionEl.querySelectorAll('.anim-interactive'));
                    if (elementsToAnimate.length > 0) {
                        gsap.set(elementsToAnimate, { opacity: 0, y: 20 });

                        ScrollTrigger.create({
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

            {/* Video-Ready-Check */}
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
        
    }, [video, isInteractive, onSceneComplete, id, layout, content]);

    {/* Separation of content blocks */}
    //const otherContent = content.filter(block => block.type !== 'investigation' && block.type !== 'info' && block.type !== 'dialogue');

    const textBlocks = content.filter(
        (block): block is NarrativeBlock | AnalysisBlock | CustomBlock =>
            block.type === 'narrative' || block.type === 'analysis' || block.type === 'custom'
    );

    const interactiveBlocks = content.filter(
        (block): block is DecisionBlock | NavigationBlock =>
            block.type === 'decision' || block.type === 'navigation'
    );

    {/* interaction layer in split view */}
    if (layout === 'split-view') {
        const decisionBlock = interactiveBlocks.find(block => block?.type === 'decision');

        return (
            <section
            ref={sectionRef}
            id={id}
            className="relative h-screen"
            style = {{ willChange: 'transform' }}
        >
            <div className="h-full w-full flex flex-col bg-black">
                {/* infoBlock */}
                {infoBlock && infoBlock.type === 'info' && (
                    <div className="felx-shrink-0" style={{ height: '15vh' }}>
                        <div className="max-w-prose mx-auto h-full flex items-center">
                            <InfoBlockView block={infoBlock} />
                        </div>
                    </div>
                )}

                {/* decision block */}
                {decisionBlock && decisionBlock.type === 'decision' && (
                    <div className="flex-grow">
                        <DecisionBlockView block={decisionBlock} onNavigate={onNavigate} onDecision={(followUp) => onDecision(id, followUp)} />
                    </div>
                )}
            </div>
        </section>
        );
    }

    {/* sequential/dialogue layout */}
    if (layout === 'dialogue' || layout === 'sequential') {
        const sequenceContent = content.filter(
            block => block?.type === 'dialogue' || block?.type === 'decision' || block?.type === 'navigation' || block?.type === 'narrative' || block?.type === 'analysis'
        );

        const totalSteps = sequenceContent.reduce((acc, block) => {
            if (block?.type === 'dialogue') {
                return acc + block.lines.length;
            }
            if (block?.type === 'narrative') {
                return acc + 2;
            }
            if (block?.type === 'analysis') {
                return acc + 4;
            }
            return acc + 1;
        }, 0);

        const sectionHeight = 100 + (totalSteps > 1 ? (totalSteps -1) * 100 : 0);

        return (
            <section
            ref={sectionRef}
            id={id}
            className="relative"
            style={{ height: `${sectionHeight}vh`, minHeight: '300vh' }}
            >
                <ScrollHint />
                <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                    {/* background-layer */}
                    {image && (
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    )}

                    {/* UI Title Banner */}
                    {showTitleBanner && (
                        <div className="title-banner z-10">
                            <h3>{title}</h3>
                        </div>
                    )}

                    <div className="dialogue-container absolute inset-0">
                        {content.map((block, blockIndex) => {
                            switch (block.type) {
                                case 'dialogue':
                                    return block.lines.map((line, lineIndex) => (
                                        <div
                                            key={`${blockIndex}-${lineIndex}`}
                                            className={`dialogue-step absolute bottom-8 md:bottom-12 left-8 right-8 md:left-12 md:right-12 flex opacity-0 pointer-events-auto ${line.align === 'left' ? 'justify-start' : 'justify-end'}`}
                                        >
                                            <div className="max-w-prose w-full">
                                                <DialogueBlockView line={line} />
                                            </div>
                                        </div>
                                    ));

                                case 'narrative':
                                    return (
                                        <div key={blockIndex} className="dialogue-step absolute inset-0 flex items-center justify-center p-8 md:p-12">
                                            <div className="w-full max-w-prose pointer-events-auto">
                                                <div className="internal-scroll-text">
                                                    <NarrativeBlockView block={block} />
                                                </div>
                                            </div>
                                        </div>
                                    );

                                case 'analysis':
                                    return (
                                        <div key={blockIndex} className="dialogue-step absolute inset-0 flex items-center justify-center p-8 md:p-12">
                                            <div className="analysis-block-wrapper w-full max-w-prose pointer-events-auto">
                                                <AnalysisBlockView block={block} progress={analysisProgress} />
                                            </div>
                                        </div>
                                    );

                                case 'decision':
                                    return (
                                        <div key={blockIndex} className="dialogue-step absolute inset-0 flex items-center justify-center p-8 md:p-12">
                                            <div className="decision-block-container w-full max-w-prose pointer-events-auto">
                                                <DecisionBlockView block={block} onNavigate={onNavigate} onDecision={(followUp) => onDecision(id, followUp)} />
                                            </div>
                                        </div>
                                    );

                                case 'navigation':
                                    return (
                                        <div key={blockIndex} className="dialogue-step absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                                            <NavigationBlockView
                                                block={block}
                                                onNavigate={onNavigate}
                                            />
                                        </div>
                                    );

                                case 'audio':
                                    return (
                                        <div key={blockIndex} className="dialogue-step absolute inset-0 flex items-center justify-end p-8 md:p-12">
                                            <div className="w-full max-w-prose pointer-events-auto">
                                                <AudioBlockView block={block} />
                                            </div>
                                        </div>
                                    )

                                case 'chat':
                                    return (
                                        <div key={blockIndex} className="dialogue-step absolute inset-0 flex items-center justify-center p-8 md:p-12 pointer-events-auto">
                                            <div className="w-full h-full flex items-center justify-center">
                                                <ChatBlockView block={block} />
                                            </div>
                                        </div>
                                    )

                                case 'custom':
                                    const Component = block.component;
                                    return <Component key={blockIndex} {...block.props} />;
                                    
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>

                
            </section>
        );
    }

    {/* default layout */}
    return (
        <section
            ref={sectionRef}
            id={id}
            className="relative h-[300vh]"
        >
            <ScrollHint />
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
                {!video && image && (
                    <div
                        className="absolute top-0 left-0 w-full h-full object-cover bg-center bg-cover"
                        style={{ backgroundImage: `url(${image})` }}
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
                                        case 'analysis':
                                            return <AnalysisBlockView key={index} block={block} />;
                                        case 'custom':
                                            const Component = block.component;
                                            return <Component key={index} {...block.props} />;
                                        default:
                                            return null;
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* interaction layer */}
                {interactiveBlocks.length > 0 && !investigationBlock?.showInternalButton && (
                    <div className="interactive-container absolute bottom-10 left-0 right-0 p-8 md:p-12 pointer-events-none z-20">
                        {investigationBlock ? (
                            <div className="inline-flex justify-start pointer-events-auto">
                                {interactiveBlocks.map((block, index) => {
                                    if (!block) return null;
                                    switch (block.type) {
                                        case 'navigation':
                                            return <NavigationBlockView key={index} block={block} onNavigate={onNavigate} />;
                                        default:
                                            return null;
                                    }
                                })}
                            </div>
                        ) : (
                            <div className="max-w-prose mx-auto">
                                <div className="anim-container w-full space-y-4 text-white pointer-events-auto flex flex-col items-center">
                                    {interactiveBlocks.map((block, index) => {
                                        if (!block) return null;
                                        switch (block.type) {
                                            case 'decision':
                                                return <DecisionBlockView key={index} block={block} onNavigate={onNavigate} onDecision={(followUp) => onDecision(id, followUp)} />;
                                            case 'navigation':
                                                return <NavigationBlockView key={index} block={block} onNavigate={onNavigate} />;
                                            default:
                                                return null;
                                        }
                                    })}
                                </div>
                            </div>
                        )}
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