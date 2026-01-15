import { Chapter } from "@/src/types";

export const archivzugangEntscheidungChapter: Chapter = {
    id: "archivzugang-entscheidung",
    title: "Archivzugang Entscheidung",
    scenes: [
        {
            id: "scene-3-a-decision",
            title: "Archivzugang Entscheidung",
            image: "/schuss-im-archiv/images/scene-3/3A-Untersuchung-der-Archivzugaenge.png",
            layout: "split-view",
            content: [
                {
                type: 'info',
                text: "Die Archivprotokolle sind ausgewertet. Zwei Punkte bleiben offen. Zwei Spuren stehen zur Wahl.",
                },
                {
                    type: "decision",
                    question: "Was möchten Sie als Nächstes untersuchen?",
                    backgroundImage: '/schuss-im-archiv/images/scene-3/3A-Untersuchung-der-Archivzugaenge.png',
                    choices: [
                        {
                            text: "➜ Sie schauen nochmal erneuert über die Archivzugänge um einen möglichen Hinweis auf den Nutzer des Zugangscodes 949089 zu bekommen.",
                            targetChapterId: "erneute-untersuchung-der-archivzugaenge",
                            image: "/schuss-im-archiv/images/scene-3/3A-Entscheidung-Code.png",
                        },
                        {
                            text: "➜ Sie verschaffen sich Zugang zu Dr. Haas’ Büro.",
                            targetChapterId: "untersuchung-buero-haas",
                            image: "/schuss-im-archiv/images/scene-3/3A-Entscheidung-Haas.png",
                        }
                    ],
                    displayAs: 'decision',
                }
            ]
        }
    ]
}