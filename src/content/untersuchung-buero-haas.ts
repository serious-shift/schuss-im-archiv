import { Chapter } from "@/src/types";

export const untersuchungBueroHaasChapter: Chapter = {
    id: "untersuchung-buero-haas",
    title: "Büro von Dr. Petra Haas untersuchen",
    scenes: [
        {
            id: "scene-4-a-a",
            title: "Büro von Dr. Petra Haas untersuchen",
            layout: "sequential",
            content: [
                {
                    type: "narrative",
                    text: [
                        "Zwischen alten Archivnotizen und Büroklammern entdeckst du einen silbernen USB-Stick – exakt wie Lena ihn beschrieben hat.",
                        "Daneben: eine leere Transportbox für eine Waffe. Der Schaumstoffeinsatz passt exakt zu einer Pistole – Modell und Kaliber lassen sich durch die Artikelnummer SW-228/4.9 recherchieren.",
                        "Zwei Objekte, zwei Spuren – beide könnten direkt mit dem Mord in Verbindung stehen.",
                        "Zwei Spuren – beide potenziell entscheidend.",
                        "Der gefundene USB-Stick könnte interessante Hinweise enthalten.",
                        "Und die leere Kiste? Sie war eindeutig für eine Waffe gedacht. Die Artikelnummer darauf ist ungewöhnlich präzise – sie könnte zur Registrierung der mutmaßlichen Tatwaffe führen.",
                        "Doch du kannst nicht beides gleichzeitig tun.",
                        "Wähl deinen nächsten Schritt mit Bedacht.",
                    ]
                },
                {
                    type: "decision",
                    question: "Was möchtest du zuerst untersuchen?",
                    choices: [
                        {
                            text: "➜ Du lässt den Stick unter Laborbedingungen auslesen – in der Hoffnung, neue digitale Spuren zu finden.",
                            targetChapterId: "-"
                        },
                        {
                            text: "➜ Du gibst die Nummer in eine Waffen-Datenbank ein – vielleicht führt sie zur Registrierung der Tatwaffe und zu einem eindeutigen Besitzer.",
                            targetChapterId: "-"
                        }
                    ]
                }
            ]
        }
    ]
}
