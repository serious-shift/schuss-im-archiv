import { Chapter } from "@/src/types";

export const untersuchungDerArchivzugaengeChapter: Chapter = {
    id: "untersuchung-der-archivzugaenge",
    title: "Untersuchung der Archivzugänge",
    scenes: [
        {
            id: "scene-3-a",
            title: "Untersuchung der Archivzugänge",
            layout: "sequential",
            showTitleBanner: true,
            image: "/images/3A-Untersuchung-der-Archivzugaenge.png",
            content: [
                {
                    type: "narrative",
                    text: "Die digitale Spurensicherung hat die Zugangsprotokolle für das Staatsarchiv aufbereitet. Sie sehen eine Übersicht aller bekannten Bewegungen am Tatabend. Ihre Aufgabe ist es, die Zeitfenster abzugleichen."
                },
                {
                    type: "analysis",
                    title: "Zugangsprotokolle Archiv",
                    items: [
                        { label: '07:30 Uhr', value: '', subItems: ['Archiv wird mit Zugangscode 949089 betreten'] },
                        { label: '08:00 Uhr', value: '', subItems: ['Dr. Haas betritt das Archiv mit ihrer Schlüsselkarte'] },
                        { label: '09:00 Uhr', value: '', subItems: ['Martin Heller Betritt das Archiv mit seiner Schlüsselkarte'] },
                        { label: '15:00 Uhr', value: '', subItems: ['Zugangscode 949089 verlässt das Gebäude'] },
                        { label: '18:45 Uhr', value: '', subItems: ['Haas verlässt mit Ihrer Schlüsselkarte das Gebäude'] },
                        { label: '18:50 Uhr', value: '', subItems: ['Die Innen- & Außenkameras gehen offline'] },
                        { label: '19:00 Uhr', value: '', subItems: ['Archiv wird mit Bergmanns Schlüsselkarte betreten'] },
                    ]
                },
                {
                    type: "navigation",
                    buttonText: "Weiter",
                    targetChapterId: "-"
                }
            ]
        }
    ]
}