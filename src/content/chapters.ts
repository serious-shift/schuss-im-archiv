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
                                image: '/images/Pistole_Prop.png',
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
                                image: '/images/Pistole_Prop.png',  
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
            }
        ],
    }
]