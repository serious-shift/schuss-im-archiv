"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/src/lib/useIsomorphicLayoutEffect";
import { SceneContent } from "@/src/types";
import InvestigationView from "./game/InvestigationView";

type SceneSectionProps = {
    title: string;
    content: SceneContent[];
    id?: string;
    video?: string; 
};

export default function SceneSection({ title, content, id, video }: SceneSectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useIsomorphicLayoutEffect(() => {
        const videoEl = videoRef.current;
        const sectionEl = sectionRef.current;

        const scroller = document.querySelector("#smooth-wrapper");

        if (!videoEl || !sectionEl || !scroller) return; 

        let ctx: gsap.Context | undefined;

        videoEl.onloadedmetadata = () => {
            (async () => {
                const { default: gsap } = await import("gsap");
                const { ScrollTrigger } = await import("gsap/ScrollTrigger");
                gsap.registerPlugin(ScrollTrigger);

                ctx = gsap.context(() => {
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
                    
                    gsap.to(videoEl, {
                        currentTime: videoEl.duration || 0,
                        ease: "none",
                        scrollTrigger: {
                            scroller: scroller,
                            trigger: sectionEl,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: true,
                        }
                    });
                }, sectionEl);
            })();
        };

        return () => {
            ctx?.revert();
        };
    }, [video])

    //! fix navigation handler
    const handleNavigation = (targetSceneId: string) => {
        const scroller = document.querySelector("#smooth-wrapper");
        if (!scroller) return;

        (async () => {
            const { default: gsap } = await import("gsap");
            const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");
            gsap.registerPlugin(ScrollToPlugin);

            gsap.to(scroller, {
                duration: 1.5,
                scrollTo: {
                    y: `#${targetSceneId}`,
                    offsetY: 100,
                },
                ease: "power2.inOut",
            })
        })
    };

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
                    key={video}
                    muted
                    playsInline
                    preload="auto"
                    className="absolute top-0 left-0 w-full h-screen object-cover z-0">
                    <source src={video} type="video/mp4" />
                    </video>
                )}
                {investigationBlock && investigationBlock.type === 'investigation' && (
                    <InvestigationView block={investigationBlock} />
                )}
            </div>
            
            <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
                <div className="max-w-2xl text-left space-y-6 text-white pointer-events-auto">
                    <h2 className="anim-child text-3xl md:text-5xl font-semibold text-center">{title}</h2>
                    {otherContent.map((block, index) => {
                        if (block.type === 'narrative') {
                            return (
                                <p key={index} className="anim-child text-lg md:text-xl text-gray-300 italic">
                                    {block.text}
                                </p>
                            );
                        }
                        if (block.type === 'dialogue') {
                            return (
                                <div key={index} className="anim-child space-y-2 p-4 border border-gray-700 rounded-lg">
                                    {block.lines.map((line, lineIndex) => (
                                        <p key={lineIndex} className="text-lg">
                                            <span className="font-bold text-red-500">{line.character}:</span> {line.text}
                                        </p>
                                    ))}
                                </div>
                            );
                        }
                        if (block.type === 'navigation') {
                            return (
                                <div key={index} className="anim-child text-center pt-8">
                                    <button
                                        onClick={() => handleNavigation(block.targetSceneId)}
                                        className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
                                    >
                                        {block.buttonText}
                                    </button>
                                </div>
                            )
                        }
                        if (block.type === 'nullBlock') {
                            return null;
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    )
}