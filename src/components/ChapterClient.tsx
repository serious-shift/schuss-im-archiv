"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Chapter, Scene, SceneContent } from "@/src/types";
import SceneSection from "@/src/components/SceneSection";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVisitedChapters } from '@/src/lib/useVisitedChapters'; 

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

type ChapterClientProps = {
    chapterData: Chapter;
}

export default function ChapterClient({ chapterData }: ChapterClientProps) {
    // State for the currently visible scenes
    const [visibleScenes, setVisibleScenes] = useState<Scene[]>([]);
    const { addChapter } = useVisitedChapters();
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (chapterData?.id) {
            addChapter(chapterData.id);
        }
    }, [chapterData?.id, addChapter]);

    useEffect(() => {
        if (chapterData && chapterData.scenes.length > 0) {
            setVisibleScenes([chapterData.scenes[0]]);
        }
    }, [chapterData]);

    const handleDecision = useCallback((sceneId: string, followUpContent: SceneContent[]) => {
        setVisibleScenes(prevScenes =>
            prevScenes.map(scene => {
                if (scene.id === sceneId) {
                    const decisionBlockIndex = scene.content.findIndex(block => block.type === 'decision');
                    if (decisionBlockIndex !== -1) {
                        const newContent = [...scene.content];
                        newContent.splice(decisionBlockIndex, 1, ...followUpContent);
                        return {
                            ...scene,
                            content: newContent,
                        };
                    }
                }
                return scene;
            })
        );
    }, []);

    const handleNavigate = useCallback((targetSceneId: string) => {
        // Find the next scene in the entire chapter data
        const targetScene = chapterData.scenes.find(s => s.id === targetSceneId);

        if (targetScene) {
            // Add the new scene to the visible ones
            setVisibleScenes(prevScenes => {
                if (prevScenes.some(s => s.id === targetSceneId)) {
                    (async () => {
                        //const scroller = document.querySelector("#smooth-wrapper");
                        gsap.to(window, {
                            duration: 1.5,
                            scrollTo: { y: `#${targetSceneId}`, offsetY: 100 },
                            ease: "power2.inOut",
                        });
                    })();
                    return prevScenes;
                }
                return [...prevScenes, targetScene];
            });
        }
    }, [chapterData]);

    // handle scene completion (for not interactive scenes)
    const handleSceneComplete = useCallback((completedSceneId: string) => {
        const completedSceneIndex = chapterData.scenes.findIndex(s => s.id === completedSceneId);

        if (completedSceneIndex > -1 && completedSceneIndex + 1 < chapterData.scenes.length) {
            const nextScene = chapterData.scenes[completedSceneIndex + 1];
            handleNavigate(nextScene.id);
        }
    }, [chapterData, handleNavigate]);

    // scroll to newly added scene
    useEffect(() => {
        if (visibleScenes.length > 1) {
            const lastSceneId = visibleScenes[visibleScenes.length - 1].id;
            const targetElement = document.getElementById(lastSceneId);

            if (targetElement) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetElement.offsetTop,
                        autoKill: false,
                    },
                    ease: "power2.inOut",
                })
            }
        }
    }, [visibleScenes]);

    return (
        <main
            ref={mainRef}
            className="opacity-0"
            style={{ opacity: 1, transition: 'opacity 1s ease-in-out' }}
        >
            {visibleScenes.map((scene) => (
                <SceneSection
                    key={scene.id}
                    id={scene.id}
                    title={scene.title}
                    showTitleBanner={scene.showTitleBanner}
                    content={scene.content}
                    video={scene.video}
                    image={scene.image}
                    onNavigate={handleNavigate}
                    onSceneComplete={handleSceneComplete}
                    onDecision={handleDecision}
                    layout={scene.layout}
                />
            ))}
        </main>
    );
}