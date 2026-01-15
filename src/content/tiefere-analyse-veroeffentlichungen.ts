import { Chapter } from "@/src/types";

export const tiefereAnalyseVeroeffentlichungenChapter: Chapter = {
  id: "tiefere-analyse-veroeffentlichungen",
  title: "Tiefere Analyse der Veröffentlichungen",
  scenes: [
    {
        id: "scene-5-c-b-b-analyse",
        title: "Tiefere Analyse Veröffentlichungen",
        image: "/schuss-im-archiv/images/scene-5/5CBB-tiefere-analyse-Veroeffentlichungen.png",
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
                    "- Eine Notiz aus seiner Recherchemappe zeigt: „Heller wankt. Noch ein Schritt – dann kippt er.“",
                    "Zusätzlicher Hinweis:",
                    "König hatte bereits einen Vorvertrag mit einer bekannten Plattform zur Veröffentlichung eines Enthüllungsstücks – geplantes Release: 3 Tage nach dem Mord."
                ]
            }
        ]
    },
    {
        id: "scene-6-c-b-b-info",
        title: "Ein Zeuge meldet sich",
        showTitleBanner: true,
        image: "/schuss-im-archiv/images/scene-6/6CBB-info.png",
        content: [
            {
                type: 'narrative',
                text: [
                    "Ein Zeuge meldet sich!",
                    "„Hier ist jemand, der gestern am Archiv war … Ich habe diesen Ralf König gesehen. So gegen 18:10 Uhr. Ich war mit dem Hund unterwegs. Da war er ganz sicher – hat sich umgeschaut, als ob er rein will. Ich kenne den vom Fernsehen.“",
                    "Ein neuer Hinweis – und er passt ins Bild.",
                    "König hatte angegeben, erst nach dem Schuss am Archiv angekommen zu sein.",
                    "Doch nun behauptet ein Zeuge, ihn bereits gegen 18:10 Uhr dort gesehen zu haben.",
                ]
            }
        ]
    },
    {
        id: "scene-7-c-b-b-könig",
        title: "Trugschluss – Alles spricht gegen König",
        showTitleBanner: true,
        image: "/schuss-im-archiv/images/scene-7/7CBB-Spendenaffäre-im-Staatsdienst.png",
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
            },
            {
                type: 'navigation',
                buttonText: "Weiter",
                targetChapterId: "finale-entscheidung"
            }
        ]
    },
  ]
}