import { Chapter } from "@/src/types";

export const archivzugangEntscheidungChapter: Chapter = {
    id: "archivzugang-entscheidung",
    title: "Archivzugang Entscheidung",
    scenes: [
        {
            id: "scene-3-a-decision",
            title: "Archivzugang Entscheidung",
            layout: "sequential",
            content: [
                {
                    type: "narrative",
                    text: [
                        "Die Archivprotokolle sind ausgewertet.",
                        "Zwei Punkte bleiben offen.",
                        "Zwei Spuren stehen zur Wahl.",
                    ]
                },
                {
                    type: "decision",
                    question: "Was möchten Sie als Nächstes untersuchen?",
                    choices: [
                        {
                            text: "➜ Sie schauen nochmal erneuert über die Archivzugänge um einen möglichen Hinweis auf den Nutzer des Zugangscodes 949089 zu bekommen.",
                            targetChapterId: "erneute-untersuchung-der-archivzugaenge"
                        },
                        {
                            text: "➜ Sie verschaffen sich Zugang zu Dr. Haas’ Büro.",
                            targetChapterId: "untersuchung-buero-haas"
                        }
                    ]
                }
            ]
        }
    ]
}