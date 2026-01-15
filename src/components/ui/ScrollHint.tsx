"use client";

import { useState, useEffect, useRef } from "react";

export default function ScrollHint() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const checkAndShowHint = () => {
            const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
            
            const isAtBottom = 
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

            if (isScrollable && !isAtBottom) {
                setIsVisible(true);
            }
        };

        const resetTimer = () => {
            setIsVisible(false);
            
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(checkAndShowHint, 4000);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            resetTimer();
        };

        resetTimer();

        window.addEventListener("scroll", resetTimer);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", resetTimer);
        window.addEventListener("resize", resetTimer);

        return () => {
            // Cleanup
            window.removeEventListener("scroll", resetTimer);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", resetTimer);
            window.removeEventListener("resize", resetTimer);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    return (
        <div 
            style={{ 
                left: mousePos.x + 20, 
                top: mousePos.y + 20 
            }}
            className={`
                fixed z-50 pointer-events-none
                transition-opacity duration-700 ease-in-out
                flex flex-col items-center gap-2
                ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
        >
            <span className="text-white/80 text-xs uppercase tracking-widest font-semibold drop-shadow-md">
                Scrollen
            </span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1 shadow-lg bg-black/20 backdrop-blur-sm">
                <div className="w-1 h-2 bg-white rounded-full animate-scroll-bounce" />
            </div>
        </div>
    );
}