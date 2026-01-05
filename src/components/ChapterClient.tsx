"use client";

import { useState, useEffect, useCallback } from "react";
import { Chapter, Scene } from "@/src/types";
import SceneSection from "@/src/components/SceneSection";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

type ChapterClientProps = {
    chapterData: Chapter;
}

export default function ChapterClient({ chapterData }: ChapterClientProps) {
    // State for the currently visible scenes
    const [visibleScenes, setVisibleScenes] = useState<Scene[]>([]);

    useEffect(() => {
        if (chapterData && chapterData.scenes.length > 0) {
            setVisibleScenes([chapterData.scenes[0]]);
        }
    }, [chapterData]);

    const handleNavigate = useCallback((targetSceneId: string) => {
        // Find the next scene in the entire chapter data
        const targetScene = chapterData.scenes.find(s => s.id === targetSceneId);

        if (targetScene) {
            // Add the new scene to the visible ones
            setVisibleScenes(prevScenes => {
                if (prevScenes.find(s => s.id === targetSceneId)) {
                    (async () => {
                        const scroller = document.querySelector("#smooth-wrapper");
                        gsap.to(scroller, {
                            duration: 1.5,
                            scrollTo: { y: `#${targetSceneId}`, offsetY: 100 },
                            ease: "power2.inOut",
                        });
                    })();
                    return prevScenes;
                }
                // Prevent adding duplicates
                //if (prevScenes.find(s => s.id === targetSceneId)) {
                //    return prevScenes;
                //}
                return [...prevScenes, targetScene];
            });
        }
    }, [chapterData.scenes]);

    // handle scene completion (for not interactive scenes)
    const handleSceneComplete = useCallback((completedSceneId: string) => {
        const completedSceneIndex = chapterData.scenes.findIndex(s => s.id === completedSceneId);

        if (completedSceneIndex > -1 && completedSceneIndex + 1 < chapterData.scenes.length) {
            const nextScene = chapterData.scenes[completedSceneIndex + 1];
            handleNavigate(nextScene.id);
        }
    }, [chapterData.scenes, handleNavigate]);

    // scroll to newly added scene
    useEffect(() => {
        if (visibleScenes.length > 1) {
            const lastScene = visibleScenes[visibleScenes.length - 1];
            const scroller = document.querySelector("#smooth-wrapper");
            if (!scroller) return;

            (async () => {
                const { default: gsap } = await import("gsap");
                const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");
                gsap.registerPlugin(ScrollToPlugin);

                gsap.to(scroller, {
                    duration: 1.5,
                    scrollTo: {
                        y: `#${lastScene.id}`,
                        offsetY: 100,
                    },
                    ease: "power2.inOut",
                });
            })();
        }
    }, [visibleScenes]);

    return (
        <main>
            {visibleScenes.map((scene) => (
                <SceneSection
                    key={scene.id}
                    id={scene.id}
                    title={scene.title}
                    showTitleBanner={scene.showTitleBanner}
                    content={scene.content}
                    video={scene.video}
                    onNavigate={handleNavigate}
                    onSceneComplete={handleSceneComplete}
                />
            ))}
        </main>
    );
}