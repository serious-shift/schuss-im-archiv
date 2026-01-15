import { Chapter } from "@/src/types";

export const spurensicherungAdminStationChapter: Chapter = {
  id: "spurensicherung-admin-station",
  title: "Spurensicherung: Admin-Station",
  scenes: [
    {
      id: "scene-5-c-a-a",
      title: "Spurensicherung: Admin-Station",
      layout: "default",
      showTitleBanner: true,
      image: "/schuss-im-archiv/images/scene-5/5CAA-Spurensicherung–Admin-Station-zusammen.png",
      content: [
        {
          type: "narrative",
          text: "Die Techniker:innen des LKA sind schnell vor Ort. Die Admin-Station wird isoliert, jede Fläche sorgfältig abgesichert. Wir müssen nach Gegenständen suchen, die wertvolle Spuren liefern könnten."
        },
      ]
    },
    {
        id: "scene-5-c-a-a-investigation",
        title: "Was könnte Spuren liefern?",
        showTitleBanner: true,
        content: [
            {
                type: "investigation",
                backgroundImage: '/schuss-im-archiv/images/scene-5/5CAA-Spurensicherung–Admin-Station-Hintergrund.png',
                showInternalButton: true,
                navigation: {
                    type : 'navigation',
                    buttonText: "Ermittlung abschließen",
                    targetSceneId: "scene-5-c-a-a-conclusion"
                },
                hotspots: [
                    {
                        id: 'hint-1',
                        title: 'Bildschirm',
                        description: 'Eher unwahrscheinlich. Bildschirme werden selten direkt berührt – Fingerabdrücke sind hier selten und meist unvollständig.',
                        image: '/schuss-im-archiv/images/investigationAssets/5CAA-Spurensicherung–Admin-Station-Bildschirm-n.png',
                        required: false,
                        position: { x: 80, y: 50 },
                        scale: 5,
                    },
                    {
                        id: 'hint-2',
                        title: 'Maus',
                        description: 'Möglich, aber wenig präzise. Die Maus wird zwar oft genutzt, liefert aber meist unscharfe oder überlagerte Spuren.',
                        image: '/schuss-im-archiv/images/investigationAssets/5CAA-Spurensicherung–Admin-Station-Maus-n.png',
                        required: false,
                        position: { x: 92, y: 80 },
                        scale: 3.5,
                    },
                    {
                        id: 'hint-3',
                        title: 'Tastatur',
                        description: 'Sehr wahrscheinlich! Besonders häufig genutzte Tasten können gut erhaltene, verwertbare Fingerabdrücke liefern – vor allem bei gezielten Eingaben.',
                        image: '/schuss-im-archiv/images/investigationAssets/5CAA-Spurensicherung–Admin-Station-Tastatur-n.png',
                        required: true,
                        position: { x: 66, y: 80 },
                        scale: 6,
                    },
                ]
            }
        ]
    },
    {
        id: "scene-5-c-a-a-conclusion",
        title: "Ergebnisse der Spurensicherung",
        showTitleBanner: true,
        image: "/schuss-im-archiv/images/investigationAssets/5CAA-entscheidung.png",
        layout: "sequential",
        content: [
            {
                type: "narrative",
                text: [
                    "Insgesamt vier verwertbare Fingerabdrücke auf den zuletzt benutzten Tasten. Zwei davon lassen sich eindeutig Lena Bergmann zuordnen – sie nutzte den Rechner am Vormittag.",
                    "Ein weiterer Abdruck stammt von Dr. Petra Haas.",
                    "Auffällig: Der Abdruck von Dr. Haas befindet sich auf der Eingabetaste – genau an der Stelle, an der der Datenimport ausgelöst wurde.",
                    "Ein vierter Abdruck bleibt unzuordenbar, taucht jedoch nur randständig auf und steht in keinem direkten Zusammenhang mit der Übertragung.",
                ]
            },
            {
                type: "decision",
                question: "Die Spuren auf der Tastatur lassen sich nicht mehr ignorieren. Wir haben Fingerabdrücke von Haas aber auch von Bergmann gefunden. Wen möchten Sie konfrontieren?",
                choices: [
                    {
                        text: "→ Was sind ihre Aufgaben an dem Admin-PC & wann hat Sie ihn zuletzt genutzt?",
                        title: "Haas befragen",
                        targetChapterId: "befragung-petra-haas"
                    },
                    {
                        text: "→ Warum wurde die manipulierte Nachricht über ihr Konto auf Hellers Handy übertragen?",
                        title: "Lena Bergmann befragen",
                        targetChapterId: "befragung-lena-bergmann"
                    }
                ]
            }
        ]
    },
  ]
}