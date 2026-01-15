import { Chapter } from "@/src/types";

export const finaleEntscheidungChapter: Chapter = {
  id: "finale-entscheidung",
  title: "Finale Entscheidung",
  scenes: [
    {
      id: "scene-xxx",
      title: "Finale Entscheidung",
      layout: "default",
      image: "/schuss-im-archiv/images/scene-xxx/XXX-finale-entscheidung.png",
      content: [
        {
          type: "decision",
          question: "Meinst du du hast jetzt genug belastende Beweise um den Täter festzunhemen?",
          choices: [
            {
                text: "→ Nein, wir müssen nochmal genauer rechechieren",
                targetChapterId: "entscheidung-1"
            },
            {
                text: "→ Ja, ich bin mir sicher!",
                targetChapterId: "festnahme"
            }
          ]
        }
      ]
    }
  ]
}