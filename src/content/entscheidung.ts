import { Chapter } from "@/src/types";

export const entscheidungChapter: Chapter = {
  id: "entscheidung-1",
  title: "Erste Entscheidung",
  scenes: [
    {
      id: "scene-1-decision",
      title: "Erste Entscheidung",
      layout: 'split-view',
      content: [
        {
          type: 'info',
          text: "Die Spurensicherung hat die Funde aus Büro 3.17 verarbeitet. Die Ergebnisse führen zu drei Personen:",
        },
        {
          type: 'decision',
          question: "Sie müssen entscheiden, welche der drei Hauptspuren Sie zuerst in der Konfrontation vertiefen.",
          backgroundImage: '/schuss-im-archiv/images/scene-1/1-Blick-auf-Tisch-mit-Beweismitteln.png',
          choices: [
              {
                  text: "DNA des Haars (Dr. Petra Haas)",
                  targetChapterId: "verhoer-petra-haas",
                  image: '/schuss-im-archiv/images/investigationAssets/Haar_prop.png' 
              },
              {
                  text: "Schriftuntersuchung des Zettels auf Schreibtisch (Lena Bergmann)",
                  targetChapterId: "verhoer-lena-bergmann",
                  image: '/schuss-im-archiv/images/investigationAssets/Papierspur-detail_prop.png'
              },
              {
                  text: "Audiospur auf Hellers Handy (Ralf König)",
                  targetChapterId: "verhoer-ralf-koenig",
                  image: '/schuss-im-archiv/images/investigationAssets/Handy-front_prop.png',

              }
          ],
          displayAs: 'decision',
        }
      ]
    },
  ]
}