"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useVisitedChapters } from "@/src/lib/useVisitedChapters";

export default function GameMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => setIsOpen(!isOpen);
    const { visitedChapters, clearChapters } = useVisitedChapters();

    const handleRestart = () => {
        if (confirm("Möchtest du den Fall wirklich neu starten? Dein gesamter Fortschritt geht verloren.")) {
            clearChapters();
            setIsOpen(false);
            router.push('/');
        }
    };


    return (
        <>
            <button 
                onClick={toggleMenu}
                className="fixed top-6 right-6 z-[60] p-3 bg-black/50 hover:bg-red-900/80 backdrop-blur-md border border-white/10 rounded-full transition-all group"
                aria-label="Menü öffnen"
            >
                <div className="w-6 h-5 flex flex-col justify-between items-end">
                    <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`} />
                    <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4 group-hover:w-6'}`} />
                    <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-3 group-hover:w-6'}`} />
                </div>
            </button>


            <div 
                className={`
                    fixed inset-0 z-[55] bg-black/95 flex flex-col items-center justify-center
                    transition-all duration-500 ease-in-out
                    ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
                `}
            >
                <div className="flex flex-col gap-8 text-center">
                    
                    <h2 className="text-gray-500 text-sm uppercase tracking-[0.3em] mb-4">
                        Menü
                    </h2>

                    <button 
                        onClick={toggleMenu}
                        className="text-3xl md:text-5xl font-bold text-white hover:text-red-500 transition-colors tracking-tight"
                    >
                        Weiterspielen
                    </button>

                    <div className="w-12 h-px bg-gray-800 mx-auto" />

                    <button 
                        onClick={handleRestart}
                        className="text-3xl md:text-5xl font-bold text-gray-400 hover:text-white transition-colors tracking-tight"
                    >
                        Fall neu starten
                    </button>

                    <Link 
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="text-3xl md:text-5xl font-bold text-gray-400 hover:text-white transition-colors tracking-tight"
                    >
                        Hauptmenü
                    </Link>

                    <div className="pt-8">
                        <Link 
                            href="/impressum" 
                            onClick={() => setIsOpen(false)}
                            className="text-sm text-gray-600 hover:text-gray-400 uppercase tracking-widest"
                        >
                            Impressum & Datenschutz
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}