"use client";

import { useState } from 'react';
import { Hotspot as HotspotType } from '@/src/types';
import Image from 'next/image';

type HotspotProps = {
    hotspot: HotspotType;
    onClick: (hotspot: HotspotType) => void;
};

export default function Hotspot({ hotspot, onClick }: HotspotProps) {
    const [isHovered, setIsHovered] = useState(false);

    const transformation = [
       hotspot.perspective ? `perspective(${hotspot.perspective}px)` : '',
        hotspot.rotateX ? `rotateX(${hotspot.rotateX}deg)` : '',
        hotspot.rotateY ? `rotateY(${hotspot.rotateY}deg)` : '',
        hotspot.rotation ? `rotate(${hotspot.rotation}deg)` : '', 
        hotspot.skewX ? `skewX(${hotspot.skewX}deg)` : '',
        hotspot.skewY ? `skewY(${hotspot.skewY}deg)` : '',
        hotspot.scale ? `scale(${hotspot.scale})` : ''
    ].filter(Boolean).join(' ');

    const hoverTransformation = hotspot.scale ? `scale(${hotspot.scale * 1.1})` : 'scale(1.1)';

    return (
        <button
            onClick={() => onClick(hotspot)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2"
            style={{
                left: `${hotspot.position.x}%`,
                top: `${hotspot.position.y}%`,
            }}
            aria-label={`Hinweis: ${hotspot.title}`}
        >
            <Image
                src={hotspot.image}
                alt={hotspot.title}
                width={80}
                height={80}
                className="object-contain drop-shadow-lg transition-transform duration-300"
                style={{
                    transform: isHovered ? hoverTransformation : transformation,
                    transformStyle: 'preserve-3d',
                }}
            />
        </button>
    );
}
