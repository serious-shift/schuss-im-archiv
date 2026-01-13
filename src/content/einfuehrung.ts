import { Chapter } from "@/src/types";

export const einfuehrungChapter: Chapter = {
  id: "einfuehrung",
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
            id: "scene-1",
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
                            required: false,
                            position: { x: 10, y: 30 }
                        },
                        {
                            id: 'hint-4',
                            title: 'Papier Spur',
                            description: ' Hellers Schreibtisch ist aufgeräumt. Nur eine Spendenliste sticht heraus - neben ihr ein zerknüllter Zettel. Er trägt die klare Handschrift einer anderen Person.',
                            image: '/images/Papierspur-detail_prop.png',  
                            required: false,
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
                            required: false,
                            position: { x: 30, y: 50 }
                        }
                    ]
                },
                {
                    type: 'navigation',
                    buttonText: "Ermittlung abschließen",
                    targetChapterId: "entscheidung-1"
                }
            ]
        },
    ],
}