import { Chapter } from "@/src/types";

export const USBStickAnalysePathAChapter: Chapter = {
  id: "usb-stick-analyse-a",
  title: "USB-Stick analysieren lassen",
  scenes: [
    {
      id: "scene-6-a-a-a",
      title: "USB-Stick analysieren lassen",
      layout: "default",
      content: [
        {
          type: "narrative",
          text: [
            "Erinnerst du dich an die Audiodatei auf Hellers Handy? Diese ist eine Sprachnachricht von Ralf König, hellers bestem Freund in der er sagt: ",
            "„Du weißt genau, dass es so nicht weitergehen kann. Irgendwann muss Schluss sein, verstehst du? Und wenn du das nicht einsehen willst… dann musst du eben die Konsequenzen tragen.“.",
            "Während du das Verhör mit Frau Haas hattest hat die Forensik diese Datei schon mal überprüft. Hier sind die Ergebnisse:"
          ]
        },
        {
          type: "navigation",
          buttonText: "Ergebnisse ansehen",
          targetChapterId: "tonspur-pruefen"
        }
      ]
    }
  ]
}