"use client";

import { Hotspot } from '@/src/types';
import Image from 'next/image';

type ClueDetailProps = {
    hotspot: Hotspot;
    onClose: () => void;
};

export default function ClueDetail({ hotspot, onClose }: ClueDetailProps) {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div 
                className="bg-gray-900 text-white rounded-lg shadow-xl p-8 max-w-2xl w-full mx-4 relative"
                onClick={(e) => e.stopPropagation()} // Verhindert, dass der Klick auf den Inhalt das Modal schliesst
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-3xl font-bold"
                    aria-label="Schliessen"
                >
                    &times;
                </button>
                <h3 className="text-3xl font-bold mb-4 text-red-500">{hotspot.title}</h3>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <p className="text-lg text-gray-300">{hotspot.description}</p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src={hotspot.image}
                            alt={hotspot.title}
                            width={300}
                            height={300}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
