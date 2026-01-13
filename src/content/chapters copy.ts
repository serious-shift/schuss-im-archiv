import { Chapter } from "@/src/types";

export const chapters: Chapter[] = [
    {
        id: "1-einfuehrung",
        title: "Einführung",
        scenes: [
            {
                id: "scene-0",
                title: "Rolle als Ermittler:in",
                showTitleBanner: true,
                video: "/videos/scene-0-transition-clean.mp4",
                content: [
                    {
                        type: 'narrative',
                        text: [
                            "Willkommen, Kommissar:in.",
                            "Ihr Team hat Sie zum Staatsarchiv für Zeitgeschichte gerufen. Der leitende Archivar, Dr. Martin Heller (58), wurde gestern Abend tot in seinem Büro aufgefunden.",
                            "Die E-Mail ist kurz und prägnant: Zitat: „Dr. Martin Heller, 58, leitender Archivar im Staatsarchiv für Zeitgeschichte, wurde gestern Abend tot aufgefunden. Ermittlungen eingeleitet. Ihre Anwesenheit wird im Archiv erwartet. Keine sichtbaren Einbruchsspuren. Wir warten auf Sie."
                        ]
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
                        backgroundImage: '/images/investigation_tatort.png',
                        hotspots: [
                            {
                                id: 'hint-1',
                                title: 'Schusswaffe und Patrone',
                                description: 'Ein kalter Boden. Neben Dr. Heller finden Sie nur eine einzelne Patronenhülse – Kaliber 9mm. Die Waffe selbst wurde mitgenommen. Es war ein sauberer Schuss aus nächster Nähe.',
                                image: '/images/pistole.png',
                                required: false,
                                position: { x: 40, y: 84 },
                                rotation: -40,
                                rotateX: -56,
                                rotateY: -10,
                                perspective: 0,
                                scale: 1.5,
                            },
                            {
                                id: 'hint-2',
                                title: 'Zeitstempel',
                                description: 'Hellers Armbanduhr liegt mit gesprungenem Glas am Boden. Sie ist stehen geblieben.',
                                image: '/images/Watch.png',
                                required: false,
                                position: { x: 76, y: 84 },
                                rotation: -105,
                            },
                            {
                                id: 'hint-3',
                                title: 'DNA-Spur',
                                description: 'Die Spurensicherung war bereits vor Ort und konnte eine DNA Spur in Form einer Haares an Hellers Ärmel sicherstellen.',
                                image: '/images/pistole.png',
                                required: true,
                                position: { x: 10, y: 30 }
                            },
                            {
                                id: 'hint-4',
                                title: 'Papier Spur',
                                description: ' Hellers Schreibtisch ist aufgeräumt. Nur eine Spendenliste sticht heraus - neben ihr ein zerknüllter Zettel. Er trägt die klare Handschrift einer anderen Person.',
                                image: '/images/Papierspur-detail_prop.png',  
                                required: true,
                                position: { x: 68, y: 52.5 },
                                rotateX: -70,
                                rotateY: 4,
                                scale: 2.7,
                            },
                            {
                                id: 'hint-5',
                                title: 'Wiederhergestellte Audioaufnahme',
                                description: ' Die Spurensicherung konnte eine gelöschte Audio-Datei von Hellers Handy wiederherstellen. Sie hören ein lautes, emotionales Streitgespräch mit dem Journalisten Ralf König. ',
                                image: '/images/pistole.png',
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
                layout: 'split-view',
                content: [
                    {
                        type: 'info',
                        text: "Die Spurensicherung hat die Funde aus Büro 3.17 verarbeitet. Die Ergebnisse führen zu drei Personen:",
                    },
                    {
                        type: 'decision',
                        question: "Sie müssen entscheiden, welche der drei Hauptspuren Sie zuerst in der Konfrontation vertiefen.",
                        backgroundImage: '/images/investigation_tatort.png',
                        choices: [
                            {
                                text: "Dr. Petra Haas (DNA des Haars am Ärmel)",
                                targetSceneId: "scene-2-path-a",
                                image: '/images/martin_heller.png' 
                            },
                            {
                                text: "Lena Bergmann (Schriftuntersuchung des Zettels auf Schreibtisch)",
                                targetSceneId: "scene-2-path-b",
                                image: '/images/martin_heller.png'
                            },
                            {
                                text: "Ralf König (Audiospur auf Hellers Handy)",
                                targetChapterId: "2",
                                image: '/images/martin_heller.png',

                            }
                        ],
                        displayAs: 'decision',
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
                image: '/images/Verhoerraum.png',
                layout: 'dialogue',
                showTitleBanner: true,
                content: [
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Herr König, danke, dass Sie sich Zeit genommen haben. Es geht um das Audiomaterial auf dem Handy von Dr. Heller.",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Ich habe davon gehört. Meine Redaktion hat mich direkt informiert. Aber … ich verstehe das nicht. Ich war das nicht.",
                                align: 'right',
                            },
                            {
                                character: "Ermittler:in",
                                text: "Auf der Aufnahme sind Sie klar zu hören. Ihre Stimme, Ihre Wortwahl – alles passt. Wie erklären Sie sich das?",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Ich war gestern nicht einmal in Hellers Büro. Ich wollte ihn nur nach der Arbeit zum Essen abholen. Wir hatten locker 18:30 ausgemacht. Aber er ist nicht rausgekommen. Irgendwas war komisch.",
                                align: 'right',
                            },
                            {
                                character: "Ermittler:in",
                                text: "Die Aufnahme auf seinem Handy klingt deutlich schärfer. Fast wie eine Warnung.",
                                align: 'left',
                            },
                        ]
                    },
                    //{
                    //    type: 'audio',
                    //    src: '/audios/audio-koenig.mp3',
                    //    caption: 'Audioaufnahme von Ralf König auf Dr. Hellers Handy'
                    //},
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Du weißt genau, dass es so nicht weitergehen kann. Irgendwann muss Schluss sein, verstehst du? Und wenn du das nicht einsehen willst… dann musst du eben die Konsequenzen tragen.",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Was… zur Hölle? Das… das habe ich nie gesagt. Das ist nicht meine Nachricht. Also, nicht so.",
                                align: 'right',
                            },
                            {
                                character: "Ermittler:in",
                                text: "Sind Sie sicher, dass Sie nicht in der Hitze des Moments—",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Nein! Ich meine… ja, es ist meine Stimme. Aber ich schwöre Ihnen, das war nie der Inhalt. Ich habe gesagt, dass ich draußen auf ihn warte. Mehr nicht.",
                                align: 'right',
                            },
                        ]
                    },
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
                image: '/images/Verhoerraum.png',
                layout: 'dialogue',
                content: [
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Würden Sie sich bereit erklären, uns Ihr Handy zu geben? Wir lassen beide Geräte forensisch untersuchen.",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Natürlich. Ich habe nichts zu verbergen. Nehmen Sie’s – checken Sie, wann ich was aufgenommen habe. Das Original klingt völlig anders, da bin ich mir sicher.",
                                align: 'right',
                            }
                        ]
                    },
                    {
                        type: 'navigation',
                        buttonText: "Weiter",
                        targetSceneId: "scene-2-path-c-decision"
                    }
                ]
            },
            {
                id: "scene-2-path-c-q2",
                title: "Interaktive Frage 2",
                image: '/images/Verhoerraum.png',
                layout: 'dialogue',
                content: [
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Herr König, welche Themen decken Sie aktuell in Ihrer journalistischen Arbeit ab?",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Vor allem politische Verflechtungen, Parteispenden, intransparente Förderstrukturen. Das Archiv war da eine wichtige Quelle – und Heller manchmal mein Türöffner.",
                                align: 'right',
                            }
                        ]
                    },
                    {
                        type: 'navigation',
                        buttonText: "Weiter",
                        targetSceneId: "scene-2-path-c-decision"
                    }
                ]
            },
            {
                id: "scene-2-path-c-q3",
                title: "Interaktive Frage 3",
                image: '/images/Verhoerraum.png',
                layout: 'dialogue',
                content: [
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Wissen Sie noch, was genau Sie Heller in Ihrer Sprachnachricht sagen wollten – also im Original?",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Ja. Ich hab gesagt, dass ich draußen warte und mich auf den Abend freue. Dass er sich nicht stressen soll, falls er noch in einem Gespräch steckt. Ganz neutral. Keine Anspielungen, kein Druck. Es war einfach eine nette Nachricht. Und ich weiß, dass sie harmlos war. Ich hab sie vor dem Absenden sogar nochmal angehört – aus Routine.",
                                align: 'right',
                            }
                        ]
                    },
                    {
                        type: 'navigation',
                        buttonText: "Weiter",
                        targetSceneId: "scene-2-path-c-decision"
                    }
                ]
            },
            {
                id: "scene-2-path-c-decision",
                title: "Glauben schenken oder nicht?",
                showTitleBanner: true,
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
                                text: "→ Königs Veröffentlichungen durchleuchten. Sie werfen einen genauen Blick auf Königs journalistische Arbeit: Artikel, Recherchen, mögliche Verbindungen zum Fall.",
                                targetSceneId: "scene-3-c-b-veröffentlichungen-durchleuchten"
                            }
                        ]
                    }
                ]
            },
            {
                id: "scene-3-c-b-veröffentlichungen-durchleuchten",
                title: "Recherche zu Ralf Königs Veröffentlichungen",
                showTitleBanner: true,
                content: [
                    {
                        type: 'narrative',
                        text: [
                            "Sie durchsuchen das digitale Archiv nach Veröffentlichungen von Ralf König. In den letzten Jahren hat er sich einen Namen gemacht – als investigativer Journalist mit einem Gespür für politische Skandale. Seine Spezialität: Undichte Stellen in Behörden.",
                            "In einem Artikel von vor zwei Monaten schreibt er: „Die Wahrheit findet immer einen Weg. Wenn sie im Archiv vergraben liegt, muss man sie eben ausbuddeln.",
                            "In mehreren Artikeln spekulierte er über verdeckte Geldflüsse zwischen politischen Akteuren und sogenannten „Bürgerinitiativen“ – oft ohne vollständige Belege, aber mit hohem medialem Druck.",
                            "Ein brisanter Beitrag vom Vortag des Mordes trägt den Titel: „Dossier H: Kommt bald alles ans Licht?“ Der Text endet mit der Andeutung, dass er im Besitz neuer interner Dokumente sei – möglicherweise aus dem Archiv."
                        ]
                    },
                    {
                        type: 'navigation',
                        buttonText: "Weiter",
                        targetSceneId: "scene-4-c-b-dialogue"
                    }
                ]
            },
            {
                id: "scene-4-c-b-dialogue",
                title: "Verhör: Ralf König (Freund & Journalist) II",
                showTitleBanner: true,
                image: '/images/Verhoerraum.png',
                layout: 'dialogue',
                content: [
                    {
                        type: 'narrative',
                        text: [
                            "Die Analyse von Ralf Königs Artikeln hat neue Fragen aufgeworfen. Seine Texte sind investigativ, pointiert – manchmal provokant. Zwischen den Zeilen: Hinweise auf interne Quellen, vertrauliche Informationen und eine Mission, unbequeme Wahrheiten ans Licht zu bringen.",
                            "Doch ist er ein unbequemer Aufklärer? Oder ein getarnter Drahtzieher in einem Spiel mit hohen Einsätzen? Zeit für ein weiteres Gespräch."
                        ]
                    },
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Herr König, nach unserem letzten Gespräch haben wir uns Ihre bisherigen Veröffentlichungen angesehen.",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Ich nehme an, das soll mich jetzt verdächtig machen.",
                                align: 'right',
                            }, 
                            {
                                character: "Ermittler:in",
                                text: "Sie haben in der Vergangenheit sensible Daten veröffentlicht – Mails von Beamten, interne Unterlagen. Teilweise mit klarer politischer Schlagkraft.",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Ich bin Journalist. Mein Job ist es, Dinge aufzudecken, nicht sie zu verstecken.",
                                align: 'right',
                            },
                            {
                                character: "Ermittler:in",
                                text: "Sie haben auch geschrieben: ‚Manchmal muss man Druck machen, um die Wahrheit freizusetzen.",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Ja. Druck – im Sinne von Öffentlichkeit. Transparenz. Nicht … Gewalt.",
                                align: 'right',
                            },
                            {
                                character: "Ermittler:in",
                                text: "Und dieser Eintrag in Ihrem Notizbuch – ‚H. weiß mehr. Wenn er blockiert – Plan B?‘ – was hat es damit auf sich?",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Das ist aus dem Zusammenhang gerissen. ‚Plan B‘ hieß: eine andere Quelle finden. Heller hat sich zunehmend zurückgezogen. Ich dachte, er steigt aus.",
                                align: 'right',
                            },
                            {
                                character: "Ermittler:in",
                                text: "Und wenn er tatsächlich aussteigen wollte? Hätten Sie versucht, ihn doch noch zu zwingen?",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Ich zwinge niemanden. Ich überzeuge. Ich kläre auf. Wenn er nicht mehr wollte – dann wäre das sein gutes Recht gewesen.",
                                align: 'right',
                            },
                            {
                                character: "Ermittler:in",
                                text: "Sie wussten, dass Heller Akten zu Parteispenden gesammelt hat?",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Natürlich. Wir haben zusammen daran gearbeitet. Aber er war vorsichtig. Vielleicht zu vorsichtig.",
                                align: 'right',
                            },
                            {
                                character: "Ermittler:in",
                                text: "Sie hätten viel zu gewinnen gehabt – mit der Veröffentlichung. Ruhm. Aufmerksamkeit. Vielleicht auch … ein Comeback als Starreporter?",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Wenn ich jemanden hätte töten wollen – glauben Sie wirklich, ich hätte mir vorher ein perfektes Motiv in mein Notizbuch geschrieben?",
                                align: 'right',
                            }
                        ]
                    },
                    {
                        type: 'navigation',
                        buttonText: "Weiter",
                        targetSceneId: "scene-4-c-b-decision"
                    }
                ]
            },
            {
                id: "scene-4-c-b-decision",
                title: "Und was jetzt?",
                showTitleBanner: true,
                content: [
                    {
                        type: 'info',
                        text: "Ralf König zeigt sich selbstbewusst – fast trotzig. Seine Aussagen wirken schlüssig – aber auch kalkuliert. Ist er wirklich unschuldig? Oder einfach ein Profi darin, Wahrheiten zu drehen?"
                    },
                    {
                        type: 'decision',
                        question: "Wie entscheidest du?",
                        choices: [
                            {
                                text: "→ Tonspur forensisch prüfen lassen. Die Aufnahme auf Dr. Hellers Handy wird an eine spezialisierte Abteilung zur technischen Analyse übergeben.",
                                targetSceneId: "..."
                            },
                            {
                                text: "→ Königs Veröffentlichungen durchleuchten. Sie werfen einen genauen Blick auf Königs journalistische Arbeit: Artikel, Recherchen, mögliche Verbindungen zum Fall.",
                                targetSceneId: "scene-5-c-b-b-analyse"
                            }
                        ]
                    },

                ]
            },
            {
                id: "scene-5-c-b-b-analyse",
                title: "Tiefere Analyse Veröffentlichungen",
                showTitleBanner: true,
                content: [
                    {
                        type: 'narrative',
                        text: [
                            "Sie beschließen, Königs journalistisches Archiv tiefer zu durchleuchten. Besonders die letzten Monate stehen im Fokus: Veröffentlichungen, Tweets, geleakte Dokumente.",
                            "Erkenntnisse:",
                            "- Mehrere Artikel enthalten Details, die nur interne Quellen kennen konnten.",
                            "- In einem Gastbeitrag spekulierte König schon vor Wochen über „verdeckte Geldflüsse zwischen Archiven und parteinahen Stiftungen“.",
                            "- In einem inzwischen gelöschten Podcast sagt er den Satz: „Wenn ich Heller zum Reden bringe, haben wir die Story des Jahrzehnts.“",
                            "- Eine Notiz aus seiner Recherchemappe (per Screenshot eingeblendet) zeigt: „Heller wankt. Noch ein Schritt – dann kippt er.“",
                            "Zusätzlicher Hinweis:",
                            "König hatte bereits einen Vorvertrag mit einer bekannten Plattform zur Veröffentlichung eines Enthüllungsstücks – geplantes Release: 3 Tage nach dem Mord."
                        ]
                    },
                    {
                        type: 'navigation',
                        buttonText: "Weiter",
                        targetSceneId: "scene-6-c-b-b-info"
                    }
                ]
            },
            {
                id: "scene-6-c-b-b-info",
                title: "Ein Zeuge meldet sich",
                showTitleBanner: true,
                content: [
                    //{
                    //    type: 'audio',
                    //    src: '/audios/PLACEHERE',
                    //    caption: "Ein Zeuge meldet sich mit einer wichtigen Information, die den Fall in einem neuen Licht erscheinen lässt."
                    //},
                    {
                        type: 'narrative',
                        text: [
                            "Ein neuer Hinweis – und er passt ins Bild.",
                            "König hatte angegeben, erst nach dem Schuss am Archiv angekommen zu sein.",
                            "Doch nun behauptet ein Zeuge, ihn bereits gegen 18:10 Uhr dort gesehen zu haben.",
                        ]
                    },
                    {
                        type: 'navigation',
                        buttonText: "Weiter",
                        targetSceneId: "scene-7-c-b-b-könig"
                    }
                ]
            },
            {
                id: "scene-7-c-b-b-könig",
                title: "Trugschluss – Alles spricht gegen König",
                showTitleBanner: true,
                content: [
                    {
                        type: 'narrative',
                        text: [
                            "Immer mehr spricht gegen Ralf König:",
                            "- Seine Artikel – präzise, zu präzise?",
                            "- Die Tonaufnahme – aufgeladen, persönlich, voller Wut.",
                            "- Und jetzt: ein Zeuge will ihn um 18:10 Uhr am Archiv gesehen haben – deutlich vor dem Mord.",
                            "",
                            "Ein Widerspruch zu seiner Aussage.",
                            "Ein Motiv, das greifbarer wird.",
                            "Ein Täterbild, das sich zu fügen scheint.",
                        ]
                    }
                ]
            },
            {
                id: "scene-xxx-final-decision",
                title: "Finale Entscheidung",
                showTitleBanner: true,
                content: [
                    {
                        type: 'decision',
                        question: "Meinst du du hast jetzt genug belastende Beweise um den Täter festzunhemen?",
                        choices: [
                            {
                                text: "→ Nein, wir müssen nochmal genauer rechechieren",
                                targetSceneId: "..."
                            },
                            {
                                text: "→ Ja, ich bin mir sicher!",
                                targetSceneId: "scene-xxx-conclusion"
                            }
                        ]
                    }
                ]
            },
            {
                id: "scene-xxx-conclusion",
                title: "Festnahme",
                showTitleBanner: true,
                content: [
                    {
                        type: 'decision',
                        question: "Wen möchtest du als Täter an dem Mord an Martin Heller verhaften?",
                        choices: [
                            {
                                text: "Option A → Dr. Petra Haas",
                                targetSceneId: "..."
                            },
                            {
                                text: "Option B → Lena Bergmann",
                                targetSceneId: "..."
                            },
                            {
                                text: "Option C → Ralf König",
                                targetSceneId: "..."
                            },
                        ]
                    }
                ]
            }
        ],
    },
    {
        id: "2",
        title: "Kapitel 2",
        scenes: [
            {
                id: "scene-2-path-c",
                title: "Verhör: Ralf König (Freund & Journalist)",
                image: '/images/Verhoerraum.png',
                layout: 'dialogue',
                showTitleBanner: true,
                content: [
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Herr König, danke, dass Sie sich Zeit genommen haben. Es geht um das Audiomaterial auf dem Handy von Dr. Heller.",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Ich habe davon gehört. Meine Redaktion hat mich direkt informiert. Aber … ich verstehe das nicht. Ich war das nicht.",
                                align: 'right',
                            },
                            {
                                character: "Ermittler:in",
                                text: "Auf der Aufnahme sind Sie klar zu hören. Ihre Stimme, Ihre Wortwahl – alles passt. Wie erklären Sie sich das?",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Ich war gestern nicht einmal in Hellers Büro. Ich wollte ihn nur nach der Arbeit zum Essen abholen. Wir hatten locker 18:30 ausgemacht. Aber er ist nicht rausgekommen. Irgendwas war komisch.",
                                align: 'right',
                            },
                            {
                                character: "Ermittler:in",
                                text: "Die Aufnahme auf seinem Handy klingt deutlich schärfer. Fast wie eine Warnung.",
                                align: 'left',
                            },
                        ]
                    },
                    //{
                    //    type: 'audio',
                    //    src: '/audios/audio-koenig.mp3',
                    //    caption: 'Audioaufnahme von Ralf König auf Dr. Hellers Handy'
                    //},
                    {
                        type: 'dialogue',
                        lines: [
                            {
                                character: "Ermittler:in",
                                text: "Du weißt genau, dass es so nicht weitergehen kann. Irgendwann muss Schluss sein, verstehst du? Und wenn du das nicht einsehen willst… dann musst du eben die Konsequenzen tragen.",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Was… zur Hölle? Das… das habe ich nie gesagt. Das ist nicht meine Nachricht. Also, nicht so.",
                                align: 'right',
                            },
                            {
                                character: "Ermittler:in",
                                text: "Sind Sie sicher, dass Sie nicht in der Hitze des Moments—",
                                align: 'left',
                            },
                            {
                                character: "Ralf König",
                                text: "Nein! Ich meine… ja, es ist meine Stimme. Aber ich schwöre Ihnen, das war nie der Inhalt. Ich habe gesagt, dass ich draußen auf ihn warte. Mehr nicht.",
                                align: 'right',
                            },
                        ]
                    },
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
        ]
    }
]
