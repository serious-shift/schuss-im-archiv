import { Chapter } from "@/src/types";

export const chapters: Chapter[] = [
    {
        id: "1",
        title: "Einführung",
        scenes: [
            {
                id: "scene-0",
                title: "Rolle als Ermittler:in",
                video: "/videos/scene-0-transition-clean.mp4",
                content: [
                    {
                        type: 'narrative',
                        text: "Willkommen, Kommissar:in."
                    },
                    {
                        type: 'narrative',
                        text: "Ihr Team hat Sie zum Staatsarchiv für Zeitgeschichte gerufen. Der leitende Archivar, Dr. Martin Heller (58), wurde gestern Abend tot in seinem Büro aufgefunden. "
                    },
                    {
                        type: 'narrative',
                        text: "Die E-Mail ist kurz und prägnant: Zitat: „Dr. Martin Heller, 58, leitender Archivar im Staatsarchiv für Zeitgeschichte, wurde gestern Abend tot aufgefunden. Ermittlungen eingeleitet. Ihre Anwesenheit wird im Archiv erwartet. Keine sichtbaren Einbruchsspuren. Wir warten auf Sie."
                    },
                    {
                        type: 'navigation',
                        buttonText: "Weiter",
                        targetSceneId: "scene-0-1"
                    }
                ]
            },
            {
                id: "scene-0-1",
                title: "Fahrt zum Tatort",
                video: "/videos/scene-0-1-police_car_pov-clean.mp4",
                content: [
                    {
                        type: 'nullBlock'
                    }
                ]
            },
            {
                id: "scene-0-2",
                title: "Ankunft am Tatort",
                content: [
                    {
                        type: 'investigation',
                        backgroundImage: '/images/Archiv-mit-spuren.png',
                        hotspots: [
                            {
                                id: 'hint-1',
                                title: 'Schusswaffe und Patrone',
                                description: 'Ein kalter Boden. Neben Dr. Heller finden Sie nur eine einzelne Patronenhülse – Kaliber 9mm. Die Waffe selbst wurde mitgenommen. Es war ein sauberer Schuss aus nächster Nähe.',
                                image: '/images/Pistole_Prop.png',
                                required: false,
                                position: { x: 25, y: 60 }
                            },
                            {
                                id: 'hint-2',
                                title: 'Zeitstempel',
                                description: 'Hellers Armbanduhr liegt mit gesprungenem Glas am Boden. Sie ist stehen geblieben.',
                                image: '/images/watch-prop.png',
                                required: false,
                                position: { x: 70, y: 40 }
                            },
                            {
                                id: 'hint-3',
                                title: 'DNA-Spur',
                                description: 'Die Spurensicherung war bereits vor Ort und konnte eine DNA Spur in Form einer Haares an Hellers Ärmel sicherstellen.',
                                image: '/images/Pistole_Prop.png',
                                required: true,
                                position: { x: 10, y: 30 }
                            },
                            {
                                id: 'hint-4',
                                title: 'Papier Spur',
                                description: ' Hellers Schreibtisch ist aufgeräumt. Nur eine Spendenliste sticht heraus - neben ihr ein zerknüllter Zettel. Er trägt die klare Handschrift einer anderen Person.',
                                image: '/images/Spendenblatt.png',  
                                required: true,
                                position: { x: 85, y: 25 }
                            },
                            {
                                id: 'hint-5',
                                title: 'Wiederhergestellte Audioaufnahme',
                                description: ' Die Spurensicherung konnte eine gelöschte Audio-Datei von Hellers Handy wiederherstellen. Sie hören ein lautes, emotionales Streitgespräch mit dem Journalisten Ralf König. ',
                                image: '/images/Pistole_Prop.png',
                                required: true,
                                position: { x: 30, y: 50 }
                            }
                        ]
                    }
                ]
            },
            {
                id: "scene-1-decision",
                title: "Erste Entscheidung",
                content: [
                    {
                        type: 'narrative',
                        text: "Die Spurensicherung hat die Funde aus Büro 3.17 verarbeitet. Die Ergebnisse führen zu drei Personen:"
                    },
                    {
                        type: 'decision',
                        question: "Sie müssen entscheiden, welche der drei Hauptspuren Sie zuerst in der Konfrontation vertiefen.",
                        choices: [
                            {
                                text: "Dr. Petra Haas (DNA des Haars am Ärmel)",
                                targetSceneId: "scene-2-path-a",
                                image: '/images/Pistole_Prop.png' 
                            },
                            {
                                text: "Lena Bergmann (Schriftuntersuchung des Zettels auf Schreibtisch)",
                                targetSceneId: "scene-2-path-b",
                                image: '/images/Spendenblatt.png'
                            },
                            {
                                text: "Ralf König (Audiospur auf Hellers Handy)",
                                targetSceneId: "scene-2-path-c",
                                image: '/images/Pistole_Prop.png',

                            }
                        ],
                        displayAs: 'decision'
                    }
                ]
            },
            {
                id: "scene-2-path-a",
                title: "Verhör: Dr. Petra Haas (Kollegin)",
                content: [
                    {
                        type: 'narrative',
                        text: "Coming soon..."
                    }
                ]
            },
            {id: "scene-2-path-b",
                title: "Verhör: Lena Bergmann (Praktikantin)",
                content: [
                    {
                        type: 'narrative',
                        text: "Coming soon..."
                    }
                ]},
            {
                id: "scene-2-path-c",
                title: "Verhör: Ralf König (Freund & Journalist)",
                content: [
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Herr König, danke, dass Sie sich Zeit genommen haben. Es geht um das Audiomaterial auf dem Handy von Dr. Heller.",
                            },
                            {
                                character: "Ralf König",
                                text: "Ich habe davon gehört. Meine Redaktion hat mich direkt informiert. Aber … ich verstehe das nicht. Ich war das nicht."
                            },
                            {
                                character: "Ermittler:in",
                                text: "Auf der Aufnahme sind Sie klar zu hören. Ihre Stimme, Ihre Wortwahl – alles passt. Wie erklären Sie sich das?"
                            },
                            {
                                character: "Ralf König",
                                text: "Ich war gestern nicht einmal in Hellers Büro. Ich wollte ihn nur nach der Arbeit zum Essen abholen. Wir hatten locker 18:30 ausgemacht. Aber er ist nicht rausgekommen. Irgendwas war komisch."
                            },
                            {
                                character: "Ermittler:in",
                                text: "Die Aufnahme auf seinem Handy klingt deutlich schärfer. Fast wie eine Warnung. --- HIER AUDIO EINFÜGERN --- Du weißt genau, dass es so nicht weitergehen kann. Irgendwann muss Schluss sein, verstehst du? Und wenn du das nicht einsehen willst… dann musst du eben die Konsequenzen tragen."
                            },
                            {
                                character: "Ralf König",
                                text: "Was… zur Hölle? Das… das habe ich nie gesagt. Das ist nicht meine Nachricht. Also, nicht so."
                            },
                            {
                                character: "Ermittler:in",
                                text: "Sind Sie sicher, dass Sie nicht in der Hitze des Moments—"
                            },
                            {
                                character: "Ralf König",
                                text: "Nein! Ich meine… ja, es ist meine Stimme. Aber ich schwöre Ihnen, das war nie der Inhalt. Ich habe gesagt, dass ich draußen auf ihn warte. Mehr nicht."
                            },
                        ]
                    }
                ]
            },
            {
                id: "scene-2-path-c-question",
                title: "Verhör: Ralf König (Freund & Journalist) - Frage",
                content: [
                    {
                        type: 'decision',
                        question: "Was möchten Sie Ralf König fragen?",
                        choices: [
                            {
                                text: "Würden Sie sich bereit erklären, uns Ihr Handy zu geben? Wir lassen beide Geräte forensisch untersuchen.",
                                targetSceneId: "scene-2-path-c-q1"
                            },
                            {
                                text: "Herr König, welche Themen decken Sie aktuell in Ihrer journalistischen Arbeit ab?",
                                targetSceneId: "scene-2-path-c-q2"
                            },
                            {
                                text: "Wissen Sie noch, was genau Sie Heller in Ihrer Sprachnachricht sagen wollten – also im Original?",
                                targetSceneId: "scene-2-path-c-q3"
                            },
                        ]
                    }
                ]
            },
            {
                id: "scene-2-path-c-q1",
                title: "Interaktive Frage 1",
                content: [
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Würden Sie sich bereit erklären, uns Ihr Handy zu geben? Wir lassen beide Geräte forensisch untersuchen.",
                            },
                            {
                                character: "Ralf König",
                                text: "Natürlich. Ich habe nichts zu verbergen. Nehmen Sie’s – checken Sie, wann ich was aufgenommen habe. Das Original klingt völlig anders, da bin ich mir sicher."
                            }
                        ]
                    }
                ]
            },
            {
                id: "scene-2-path-c-q2",
                title: "Interaktive Frage 2",
                content: [
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Herr König, welche Themen decken Sie aktuell in Ihrer journalistischen Arbeit ab?",
                            },
                            {
                                character: "Ralf König",
                                text: "Vor allem politische Verflechtungen, Parteispenden, intransparente Förderstrukturen. Das Archiv war da eine wichtige Quelle – und Heller manchmal mein Türöffner."
                            }
                        ]
                    }
                ]
            },
            {
                id: "scene-2-path-c-q3",
                title: "Interaktive Frage 3",
                content: [
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Wissen Sie noch, was genau Sie Heller in Ihrer Sprachnachricht sagen wollten – also im Original?",
                            },
                            {
                                character: "Ralf König",
                                text: "Ja. Ich hab gesagt, dass ich draußen warte und mich auf den Abend freue. Dass er sich nicht stressen soll, falls er noch in einem Gespräch steckt. Ganz neutral. Keine Anspielungen, kein Druck. Es war einfach eine nette Nachricht. Und ich weiß, dass sie harmlos war. Ich hab sie vor dem Absenden sogar nochmal angehört – aus Routine."
                            }
                        ]
                    }
                ]
            },
            {
                id: "scene-2-path-c-decision",
                title: "Glauben schenken oder nicht?",
                content: [
                    {
                        type: 'decision',
                        question: "Das Gespräch mit Ralf König hat neue Fragen aufgeworfen. Die Audioaufnahme steht im Widerspruch zu seinen Aussagen – doch wo liegt die Wahrheit?",
                        choices: [
                            {
                                text: "→ Tonspur forensisch prüfen lassen. Die Aufnahme auf Dr. Hellers Handy wird an eine spezialisierte Abteilung zur technischen Analyse übergeben.",
                                targetSceneId: "scene-3-c-a-tonspur-pruefen"
                            },
                            {
                                text: "→ Tonspur forensisch prüfen lassen. Die Aufnahme auf Dr. Hellers Handy wird an eine spezialisierte Abteilung zur technischen Analyse übergeben.",
                                targetSceneId: "scene-3-c-b-veröffentlichungen-durchleuchten"
                            }
                        ]
                    }
                ]
            },
        ],
    }
]