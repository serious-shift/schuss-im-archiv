import { Chapter } from "@/src/types";

export const untersuchungDesAlibisChapter: Chapter = {
  id: "untersuchung-des-alibis",
  title: "Untersuchung des Alibis",
  scenes: [
    {
      id: "scene-4-a",
      title: "Untersuchung des Alibis",
      layout: "default",
      content: [
        {
          type: "narrative",
          text: "Lenas Verhör hat neue Hinweise geliefert – aber keiner davon ist bisher belegt. Um herauszufinden, welche ihrer Aussagen Bestand hat, muss nun entschieden werden, welche Spur als Nächstes untersucht wird."
        },
        {
            type: "decision",
            question: "Welche Spur möchtest du als Nächstes untersuchen?",
            choices: [
                {
                    text: "→ Sind noch andere Hinweis auf dem Zettel zu finden",
                    targetChapterId: "zettel-pruefen"
                },
                {
                    text: "→ Kann Lenas Alibi ab 15:00 Uhr bestätigt werden",
                    targetChapterId: "-"
                }
            ]
        }
      ]
    }
  ]
}