import { Chapter } from "@/src/types";

export const tonspurErgebnisseChapter: Chapter = {
    id: "tonspur-ergebnisse",
    title: "Tonspur Ergebnisse",
    scenes: [
        {
            id: "scene-4-c-a",
            title: "Wie kam die Datei auf das Handy?",
            layout: "sequential",
            showTitleBanner: true,
            image: "/schuss-im-archiv/images/scene-3/3CA-Tonspur-pruefen-lassen-mit-Text.png",
            content: [
                {
                    type: "narrative",
                    text: [
                        "Die Deepfake-Tonspur wurde nicht aufgenommen, sondern übertragen.",
                        "Jemand hat sie kurz vor dem Mord auf Hellers Handy geschickt – unter dem Namen „R. König“.",
                        "Doch wie kam die Datei aufs Gerät? Die Forensik liefert erste Hinweise."
                    ]
                },
                {
                    type: "analysis",
                    title: "Geräteanalyse",
                    items: [
                        { label: 'Importzeitpunkt', value: '16:41 Uhr' },
                        { label: 'Dateiname', value: 'msg_koenig_final.wav' },
                        { label: 'Übertragungsweg', value: 'Nearby Share / Bluetooth' },
                        { label: 'Absendergerät', value: 'ADMIN-Station' },
                        { label: 'Gerät ist Teil des', value: 'Archiv-Netzwerks' },
                        { label: 'Letzte Nutzer:innen', value: '', subItems: ['L. Bergmann (11:00 - 15:00 Uhr)', 'M. Heller (16:39 - 16:45 Uhr)'] },
                    ]
                }
            ]
        },
        {
            id: "scene-4-c-a-decision",
            title: "Entscheidung: Nächste Schritte",
            layout: "sequential",
            image: "/schuss-im-archiv/images/scene-3/3CA-Tonspur-pruefen-lassen-ohne-Text.png",
            content: [
                {
                    type: "narrative",
                    text: "Die Datei wurde über das eingeloggte Nutzerkonto von Martin Heller übertragen. Aber er hat sich doch nicht selber so eine Datei übertragen. Doch vielleicht gibt es noch weitere Hinweise am Rechner – zum Beispiel Fingerabdrücke."
                },
                {
                    type: "decision",
                    question: "Wie willst du weiter vorgehen?",
                    choices: [
                        {
                            text: "→ Vielleicht hat die Person beim Aufspielen der Deepfake-Datei Spuren hinterlassen.",
                            title: "Fingerabdruckanalyse an der Tastatur der Admin-Station beauftragen",
                            targetChapterId: "spurensicherung-admin-station"
                        },
                        {
                            text: "→ Was hat sie an dem Tattag am Admin Rechner gemacht?",
                            title: "Lena Bergmann zur letzten Sitzung befragen",
                            targetChapterId: "befragung-lena-bergmann"
                        }
                    ]
                }
            ]
        }
    ]
}