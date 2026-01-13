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
          backgroundImage: '/images/investigation_tatort.png',
          choices: [
              {
                  text: "Dr. Petra Haas (DNA des Haars am Ärmel)",
                  targetChapterId: "2-verhoer-petra-haas",
                  image: '/images/martin_heller.png' 
              },
              {
                  text: "Lena Bergmann (Schriftuntersuchung des Zettels auf Schreibtisch)",
                  targetChapterId: "2-verhoer-lena-bergmann",
                  image: '/images/martin_heller.png'
              },
              {
                  text: "Ralf König (Audiospur auf Hellers Handy)",
                  targetChapterId: "verhoer-ralf-koenig",
                  image: '/images/martin_heller.png',

              }
          ],
          displayAs: 'decision',
        }
      ]
    },
  ]
}