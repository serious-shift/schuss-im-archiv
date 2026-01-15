import { Chapter } from "@/src/types";

export const lenasAnliegenChapter: Chapter = {
  id: "lenas-anliegen",
  title: "Lenas Anliegen",
  scenes: [
    {
      id: "scene-3-b-b",
      title: "Lenas Anliegen",
      layout: "dialogue",
      image: "/schuss-im-archiv/images/scene-3/3BB-Lenas-anliegen.png",
      content: [
        {
          type: "dialogue",
          lines: [
            {
                character: "Lena Bergmann",
                text: "Einen Moment noch. Eine Sache ist mir eingefallen: Meine alte Zugangskarte – die war weg. Ich hab sie vor drei Tagen verloren und direkt als vermisst gemeldet. Eine neue war beantragt, aber ich hatte sie noch nicht. Wenn Sie die Archivzugänge prüfen, suchen Sie nicht nach meinem Namen – sondern nach der ID 949089. Das war meine Karte.",
                align: 'right',
            }
          ]
        },
        {
            type: "navigation",
            buttonText: "Archivzugänge prüfen",
            targetChapterId: "untersuchung-der-archivzugaenge"
        }
      ]
    }
  ]
}