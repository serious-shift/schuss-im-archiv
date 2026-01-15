"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useVisitedChapters } from "@/src/lib/useVisitedChapters";

const EVIDENCE_DATA = [
    {
        id: "ev_audio",
        title: "Audioaufnahme / “msg_koenig_final.wav”",
        description: "Stimmen-Deepfake / zusammengesetzte Audio-Datei (aus Interview-Silben gebaut), um König verdächtig wirken zu lassen.",
        category: "deepfake",
        requiredSceneIds: ["tonspur-ergebnisse"] 
    },
    {
        id: "ev_upload",
        title: "Upload über Martins Nutzerkonto (16:41 Uhr)",
        description: "Digitale Spur wurde manipuliert: Datei wirkt so, als käme sie von Martin/aus seinem System.",
        category: "manipulation",
        requiredSceneIds: ["tonspur-ergebnisse"]
    },
    {
        id: "ev_handy",
        title: "Martins Handy geklaut (Mittagspause)",
        description: "Manipulation der “Beweiskette”: Datei landet auf seinem eigenen Gerät, damit kein externer Absender auffällt.",
        category: "manipulation",
        requiredSceneIds: ["spurensicherung-admin-station"]
    },
    {
        id: "ev_keycard",
        title: "Bergmanns Schlüsselkarte gestohlen (Teeküche)",
        description: "Zutrittsspur manipuliert: Zugang sieht nach Bergmann aus, obwohl es jemand anderes war.",
        category: "manipulation",
        requiredSceneIds: ["erneute-untersuchung-der-archivzugaenge"]
    },
    {
        id: "ev_archive_access",
        title: "Zutritt zum Archiv mit fremder Karte",
        description: "“Systembeweis” wird bewusst als falsche Fährte genutzt.",
        category: "manipulation",
        requiredSceneIds: ["untersuchung-der-archivzugaenge"]
    },
    {
        id: "ev_gym_cams",
        title: "Kameras im Fitnessstudio manipuliert",
        description: "Videospur/Timeline so verändert, dass das Alibi wackelt (“Zweifel sind mächtiger als Beweise”).",
        category: "deepfake",
        requiredSceneIds: ["video-pruefen"]
    },
];

const CREDITS_DATA = [
    {
        role: "Konzept & Story",
        names: ["Lotta Klinke", "Leonie Mäder"]
    },
    {
        role: "Entwicklung & Umsetzung",
        names: ["Marius Schmidt"]
    },
    {
        role: "Design & Assets",
        names: ["Simeon Lenz"]
    },
    {
        role: "Projekt entstand im Rahmen von",
        names: ["dim5 Interactive Storytelling"]
    },
    {
        role: "Hochschule Mainz - Dozenten",
        names: ["Alexander Rossner", "Jens Friederich"]
    }
];

export default function ResolutionClient() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const result = searchParams.get("result"); 
    const isSuccess = result === "success";

    const { visitedChapters, clearChapters } = useVisitedChapters();

    const handleNewGame = () => {
        clearChapters();
        router.push("/");
    };

    // State für Ansichtswechsel
    const [showAnalysis, setShowAnalysis] = useState(true);
    const [showCredits, setShowCredits] = useState(false);
    
    // State für gefundene Szenen (aus LocalStorage)
    const [visitedScenes, setVisitedScenes] = useState<Set<string>>(new Set());

    const backgroundImage = "/schuss-im-archiv/images/scene-xxx/XXX-bg.png";

    useEffect(() => {
        const storedScenes = localStorage.getItem('visitedChapters');
        if (storedScenes) {
            try {
                const parsed = JSON.parse(storedScenes);
                if (Array.isArray(parsed)) {
                    setVisitedScenes(new Set(parsed));
                }
            } catch (e) {
                console.error("Fehler beim Laden der Visited Scenes", e);
            }
        }
    }, []);

    const isEvidenceFound = (requiredIds: string[]) => {
        if (requiredIds.length === 0 || requiredIds[0].includes("HIER_")) return false; 
        
        return requiredIds.some(id => visitedScenes.has(id));
    };

    const content = isSuccess ? {
        title: "Herzlichen Glückwunsch!",
        colorClass: "text-green-500",
        bgClass: "border-green-500/30 bg-green-900/10",
        subtext: "Du hast die Täterin geschnappt und dich nicht von Deepfakes und Manipulationen täuschen lassen.",
        definitions: [
            {
                title: "Deepfake",
                text: "KI-generierte oder KI-veränderte Medien (Stimme/Video/Bild), die so wirken, als hätte eine Person etwas wirklich gesagt oder getan – obwohl es nie passiert ist."
            },
            {
                title: "Manipulation",
                text: "Das gezielte Verändern, Weglassen oder Inszenieren von Informationen/Spuren (z.B. Schnitt, falscher Kontext, gestohlene Zugänge), damit eine falsche Geschichte glaubwürdig erscheint."
            }
        ],
        impactTitle: "Was macht das mit uns?",
        impactText: "Deepfakes und Manipulationen greifen genau da an, wo wir Menschen am schnellsten glauben: Emotion + “Beweisvideo/Beweiston”. Sie können Verdacht umlenken, Unschuldige belasten und echte Ermittlungsarbeit sabotieren.",
        contextTitle: "In diesem Fall war manipuliert:",
        contextText: "Du hast erkannt, dass “Beweise” nicht automatisch Wahrheit sind – sondern auch hergestellt werden können."
    } : {
        title: "Schade!",
        colorClass: "text-red-600",
        bgClass: "border-red-600/30 bg-red-900/10",
        subtext: "Du hast den Täter nicht erwischt. Du hast dich von Deepfakes und Manipulationen beeinflussen lassen – und dadurch die falsche Person verdächtigt.",
        definitions: [
            {
                title: "Deepfake",
                text: "KI macht aus vorhandenem Material eine scheinbar echte Stimme/ein scheinbar echtes Video – perfekt, um jemanden “überführen” zu lassen, ohne dass es je passiert ist."
            },
            {
                title: "Manipulation",
                text: "Spuren werden so gelegt, dass sie logisch wirken (Zutritt, Timeline, Kamera-Material, Dateien) – bis die falsche Geschichte “passt”."
            }
        ],
        impactTitle: "Was macht das mit Einzelnen & Gesellschaft?",
        impactText: "", 
        contextTitle: null,
        contextText: null
    };

    return (
        <main className="relative min-h-screen text-white p-6 md:p-12 flex flex-col items-center justify-center overflow-hidden">
            
            {/* --- HINTERGRUND EBENE --- */}
            <div className="absolute inset-0 z-0 fixed overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
                
                <div className="absolute inset-0 bg-black/80" />
            </div>


            {/* --- CONTENT EBENE --- */}
            <div className="relative z-10 max-w-4xl w-full space-y-12 animate-fade-in-up">
                
                {/* 1. HEADER */}
                <div className="text-center space-y-6">
                    <h1 className={`text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-2xl ${content.colorClass}`}>
                        {content.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        {content.subtext}
                    </p>
                </div>

                {/* 2. DEFINITIONEN */}
                <div className="grid md:grid-cols-2 gap-6">
                    {content.definitions.map((def, idx) => (
                        <div key={idx} className={`p-8 rounded-2xl border ${content.bgClass} shadow-xl`}>
                            <h3 className={`text-xl font-bold mb-3 uppercase tracking-widest ${content.colorClass}`}>
                                {def.title}
                            </h3>
                            <p className="text-gray-200 leading-relaxed">
                                {def.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 3. IMPACT */}
                <div className="bg-gray-900/60 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gray-700 space-y-8 shadow-2xl">
                    
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">{content.impactTitle}</h3>
                        {isSuccess ? (
                            <p className="text-gray-300 text-lg leading-relaxed">{content.impactText}</p>
                        ) : (
                            <ul className="space-y-4 text-gray-300 text-lg">
                                <li>
                                    <strong className="text-white block mb-1">Einzelne:</strong> 
                                    Ruf kann zerstört werden, Jobs gehen verloren, Menschen werden bedroht oder zu Unrecht verdächtigt.
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">Gesellschaft:</strong> 
                                    Vertrauen in Medien/Beweise sinkt. Und das Gefährlichste: Wenn alles fälschbar wirkt, glauben manche irgendwann gar nichts mehr.
                                </li>
                            </ul>
                        )}
                    </div>

                    {content.contextTitle && (
                        <div className="border-t border-gray-700 pt-6">
                            <h4 className="text-xl font-bold text-white mb-2">{content.contextTitle}</h4>
                            <p className="text-gray-400 italic">{content.contextText}</p>
                        </div>
                    )}
                </div>

                {/* --- ANALYSE SCREEN (BEWEISLISTE) --- */}
                {showAnalysis && (
                    <div className="space-y-12 animate-fade-in-up">
                        
                        <div className="text-center space-y-4 pb-8 border-b border-gray-800">
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Anatomie der Täuschung</h2>
                            <p className="text-xl text-gray-400">Welche Beweise hast du gefunden – und welche hast du übersehen?</p>
                        </div>

                        <div className="space-y-16">   
                            <div>
                                <h3 className="text-2xl font-bold text-blue-400 mb-6 uppercase tracking-widest border-l-4 border-blue-500 pl-4">
                                    Deepfake Spuren
                                </h3>
                                <div className="grid gap-4">
                                    {EVIDENCE_DATA.filter(e => e.category === 'deepfake').map((item) => {
                                        const found = isEvidenceFound(item.requiredSceneIds);
                                        return (
                                            <EvidenceCard key={item.id} item={item} found={found} />
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-orange-500 mb-6 uppercase tracking-widest border-l-4 border-orange-500 pl-4">
                                    Manipulation & Spuren
                                </h3>
                                <div className="grid gap-4">
                                    {EVIDENCE_DATA.filter(e => e.category === 'manipulation').map((item) => {
                                        const found = isEvidenceFound(item.requiredSceneIds);
                                        return (
                                            <EvidenceCard key={item.id} item={item} found={found} />
                                        );
                                    })}
                                </div>
                            </div>

                        </div>

                        <div className="text-center pt-16 pb-8 border-t border-gray-800 mt-12">
                             <p className="text-gray-400 mb-6 italic">Fall abgeschlossen.</p>
                             
                             <button 
                                onClick={() => setShowCredits(true)}
                                className="px-8 py-3 border border-gray-600 rounded-full text-gray-300 hover:text-white hover:border-white hover:bg-white/10 transition-all uppercase tracking-widest text-sm"
                             >
                                Credits ansehen
                             </button>
                        </div>
                    </div>
                )}

                {/* --- CREDITS SCENE --- */}
                {showCredits && (
                    <div className="z-50 w-full flex flex-col items-center justify-center p-6">
                        <div className="w-full text-center space-y-12 py-12 scrollbar-hide">
                            
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
                                THE END
                            </h2>

                            <div className="space-y-16">
                                {CREDITS_DATA.map((section, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <h3 className="text-red-500 text-sm uppercase font-bold">
                                            {section.role}
                                        </h3>
                                        <div className="flex flex-col gap-2">
                                            {section.names.map((name, nIdx) => (
                                                <span key={nIdx} className="text-xl md:text-2xl text-gray-200 font-light">
                                                    {name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-20 pb-12">
                                <p className="text-gray-500 text-sm mb-8">
                                    Vielen Dank fürs Spielen.
                                </p>
                                
                                <button 
                                    onClick={handleNewGame}
                                    className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105"
                                >
                                    Neuen Fall starten
                                </button>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </main>
    );
}

function EvidenceCard({ item, found }: { item: any, found: boolean }) {
    return (
        <div 
            className={`
                relative p-6 rounded-xl border transition-all duration-500
                ${found 
                    ? 'bg-gray-800/80 border-gray-600 shadow-lg translate-x-0 opacity-100' 
                    : 'bg-gray-900/30 border-gray-800 grayscale opacity-50'
                }
            `}
        >
            <div className="flex items-start gap-4">
                {/* Status Icon */}
                <div className="flex-shrink-0 mt-1">
                    {found ? (
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500 text-green-500">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center border border-gray-600 text-gray-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                    )}
                </div>

                {/* Text Content */}
                <div className="flex-1">
                    <h4 className={`text-lg font-bold mb-2 ${found ? 'text-white' : 'text-gray-400'}`}>
                        {item.title}
                    </h4>
                    
                    {found ? (
                        <p className="text-gray-300 leading-relaxed">
                            {item.description}
                        </p>
                    ) : (
                        <div className="h-6 w-3/4 bg-gray-800 rounded animate-pulse mt-2" title="Beweis nicht gefunden" />
                    )}
                </div>
            </div>
        </div>
    );
}