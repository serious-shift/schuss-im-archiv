"use client";

import { useState, useEffect } from 'react';
import { InvestigationBlock, Hotspot as HotspotType } from '@/src/types';
import Hotspot from './Hotspot';
import ClueDetail from './ClueDetail';
import Image from 'next/image';

type InvestigationViewProps = {
    block: InvestigationBlock;
    onComplete?: () => void;
}

export default function InvestigationView({ block, onComplete }: InvestigationViewProps) {
    const [selectedHotspot, setSelectedHotspot] = useState<HotspotType | null>(null);
    const [foundHotspots, setFoundHotspots] = useState<Set<string>>(new Set());
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const requiredHotspots = block.hotspots.filter(h => h.required);
        if (requiredHotspots.length === 0) return;

        const allRequiredFound = requiredHotspots.every(h => foundHotspots.has(h.id));

        if (allRequiredFound) {
            setIsCompleted(true);
            if (onComplete) {
                onComplete();
            }
        }
    }, [foundHotspots, block.hotspots, onComplete]);

    const handleHotspotClick = (hotspot: HotspotType) => {
        setSelectedHotspot(hotspot);
    };

    const handleCloseDetail = () => {
        if (selectedHotspot) {
            setFoundHotspots(prev => new Set(prev).add(selectedHotspot.id));
        }
        setSelectedHotspot(null);
    };

    return (
        <div 
            className="relative w-full h-screen bg-black"
            style={{
                backgroundImage: `url(${block.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="relative w-full h-full">
                {block.hotspots.map((hotspot) => (
                    <Hotspot
                        key={hotspot.id}
                        hotspot={hotspot}
                        onClick={handleHotspotClick}
                    />
                ))}
            </div>

            {selectedHotspot && (
                <ClueDetail
                    hotspot={selectedHotspot}
                    onClose={handleCloseDetail}
                />
            )}

            {isCompleted && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                    <button
                        className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
                    >
                        Ermittlung abschließen
                    </button>
                </div>
            )}
        </div>
    );
}
