"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useAssetLoader } from "@/src/lib/useAssetLoader";
import { chapters } from "@/src/content/chapters"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GlobalLoader({ children }: { children: React.ReactNode }) {
  // 1. collect all assets from all chapters
  const { allImages, allVideos } = useMemo(() => {
    const images: string[] = [];
    const videos: string[] = [];

    chapters.forEach((chapter) => {
      chapter.scenes.forEach((scene) => {
        if (scene.image) images.push(scene.image);
        if (scene.video) videos.push(scene.video);
      });
    });

    return { allImages: images, allVideos: videos };
  }, []);

  // 2. Preload all assets
  const { loaded, progress } = useAssetLoader(allImages, allVideos);
  const [showContent, setShowContent] = useState(false);

  // 3. When loading is complete, trigger animation
  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        setShowContent(true);
        
        ScrollTrigger.refresh();
      }, 500);
    }
  }, [loaded]);

  // -- RENDER LOGIC --

  return (
    <>
      {/* loading screen */}
      <div 
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-1000 ${showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <h1 className="text-3xl font-bold mb-4">INITIALIZING EXPERIENCE</h1>
        
        <div className="w-64 h-1 bg-gray-800 rounded overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-xs font-mono">{progress}%</p>
      </div>

      {/* B) ENTIRE PROJECT (Children) */}
      <div style={{ opacity: showContent ? 1 : 0, transition: "opacity 1s ease-in-out" }}>
        {showContent && children}
      </div>
    </>
  );
}