"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/src/lib/useIsomorphicLayoutEffect";

type SceneSectionProps = {
    title: string;
    text: string;
    id?: string;
};

export default function SceneSection({ title, text, id }: SceneSectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null);

    useIsomorphicLayoutEffect(() => {
        // hier GSAP
    }, [])

    return (
        <section
        id={id}
        className="min-h-screen flex items-center justify-center px-6 py-16 bg-black text-white"
        >
        <div className="max-w-2xl text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold">{title}</h2>
            <p className="text-lg md:text-xl text-gray-300">{text}</p>
        </div>
        </section>
    )
}