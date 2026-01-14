import { Chapter } from "@/src/types";

export const festnahmeChapter: Chapter = {
  id: "festnahme",
  title: "Festnahme",
  scenes: [
    {
      id: "scene-xxx",
      title: "Festnahme",
      layout: 'split-view',
      content: [
        {
          type: 'info',
          text: "Es wurden genügend Beweise gesammelt. Zeit, den Täter festzunehmen.",
        },
        {
          type: 'decision',
          question: "Wen möchtest du als Täter an dem Mord an Martin Heller verhaften?",
          backgroundImage: '/images/investigation_tatort.png',
          choices: [
              {
                  text: "Dr. Petra Haas (DNA des Haars am Ärmel)",
                  targetChapterId: "finale-petra-haas",
                  image: '/images/martin_heller.png' 
              },
              {
                  text: "Lena Bergmann (Schriftuntersuchung des Zettels auf Schreibtisch)",
                  targetChapterId: "finale-lena-bergmann",
                  image: '/images/martin_heller.png'
              },
              {
                  text: "Ralf König (Audiospur auf Hellers Handy)",
                  targetChapterId: "finale-ralf-koenig",
                  image: '/images/martin_heller.png',

              }
          ],
          displayAs: 'decision',
        }
      ]
    },
  ]
}