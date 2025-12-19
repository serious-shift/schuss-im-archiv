"use client";

import { Hotspot as HotspotType } from '@/src/types';

type HotspotProps = {
    hotspot: HotspotType;
    onClick: (hotspot: HotspotType) => void;
};

export default function Hotspot({ hotspot, onClick }: HotspotProps) {
    return (
        <button
            onClick={() => onClick(hotspot)}
            className="absolute w-12 h-12 bg-red-500/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse flex items-center justify-center text-white font-bold text-2xl"
            style={{
                left: `${hotspot.position.x}%`,
                top: `${hotspot.position.y}%`,
            }}
            aria-label={`Hinweis: ${hotspot.title}`}
        >
            ?
        </button>
    );
}
