import { Chapter } from "@/src/types";

export const usbStickVerlustChapter: Chapter = {
  id: "usb-stick-verlust",
  title: "Der USB-Stick ist verschwunden",
  scenes: [
    {
      id: "scene-5-c-a-b-b",
      title: "Der USB-Stick ist verschwunden",
      showTitleBanner: true,
      layout: "sequential",
      image: "/schuss-im-archiv/images/scene-5/5CABB-Der-USB-Stick-ist-verschwunden.png",
      content: [
        {
          type: "narrative",
          text: [
            "Du kehrst zurück zur Admin-Station. Dein Plan: Den silberfarbenen USB-Stick sicherstellen und sofort zur forensischen Untersuchung geben.",
            "Doch als du den Anschluss überprüfst, ist der Stick verschwunden. Nur ein feiner Abdruck im Staub am Rand des USB-Ports zeigt: Er war da.",
            "Niemand im Archiv will etwas bemerkt haben.",
            "Keine Videoüberwachung im Raum. Keine Logins an diesem Terminal seit Lenas Ausloggen.",
            "Du organisierst eine gezielte Durchsuchung: alle Schreibtische, Mülleimer, Technikräume.",
            "Vielleicht hat der Täter den Stick versteckt. Oder entsorgt.",
            "Du hast das gesamte Archiv durchkämmt.",
            "Jeden Raum. Jeden Schreibtisch. Jeden Winkel.",
            "Kein USB-Stick. Keine Spur.",
            "Nur ein Ort blieb unangetastet: das Büro von Dr. Petra Haas.",
          ]
        },
        {
            type: "navigation",
            buttonText: "Büro untersuchen",
            targetChapterId: "untersuchung-buero-haas"
        }
      ]
    }
  ]
}