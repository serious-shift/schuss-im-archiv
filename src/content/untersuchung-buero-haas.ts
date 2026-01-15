import { Chapter } from "@/src/types";

export const untersuchungBueroHaasChapter: Chapter = {
    id: "untersuchung-buero-haas",
    title: "Büro von Dr. Petra Haas untersuchen",
    scenes: [
        {
            id: "scene-4-a-a",
            title: "Büro von Dr. Petra Haas untersuchen",
            showTitleBanner: true,
            image: "/schuss-im-archiv/images/scene-4/4AA-Buero-von-haas-durchsuchen.png",
            layout: "sequential",
            content: [
                {
                    type: "narrative",
                    text: [
                        "Zwischen alten Archivnotizen und Büroklammern entdeckst du einen silbernen USB-Stick – exakt wie Lena ihn beschrieben hat.",
                        "Daneben: eine leere Transportbox für eine Waffe. Der Schaumstoffeinsatz passt exakt zu einer Pistole – Modell und Kaliber lassen sich durch die Seriennummer SW-228/4.9 recherchieren.",
                        "Zwei Objekte, zwei Spuren – beide könnten direkt mit dem Mord in Verbindung stehen.",
                        "Zwei Spuren – beide potenziell entscheidend.",
                        "Der gefundene USB-Stick könnte interessante Hinweise enthalten.",
                        "Und die leere Kiste? Sie war eindeutig für eine Waffe gedacht. Die Seriennummer darauf ist ungewöhnlich präzise – sie könnte zur Registrierung der mutmaßlichen Tatwaffe führen.",
                        "Doch du kannst nicht beides gleichzeitig tun.",
                        "Wähl deinen nächsten Schritt mit Bedacht.",
                    ]
                }
            ]
        },
        {
            id: "scene-4-a-a-decision",
            title: "Büro von Dr. Petra Haas untersuchen - Entscheidung",
            layout: "split-view",
            content: [
                {
                    type: "decision",
                    question: "Was möchtest du zuerst untersuchen?",
                    choices: [
                        {
                            text: "➜ Du lässt den Stick unter Laborbedingungen auslesen – in der Hoffnung, neue digitale Spuren zu finden.",
                            targetChapterId: "usb-stick-analyse",
                            image: "/schuss-im-archiv/images/scene-4/4AA-Entscheidung-USB-Stick.png"
                        },
                        {
                            text: "➜ Du gibst die Nummer in eine Waffen-Datenbank ein – vielleicht führt sie zur Registrierung der Tatwaffe und zu einem eindeutigen Besitzer.",
                            targetChapterId: "waffenbox-pruefen",
                            image: "/schuss-im-archiv/images/scene-4/4AA-Entscheidung-Barcode.png",
                        }
                    ],
                    displayAs: 'decision',
                }
            ],
        }
    ]
}
