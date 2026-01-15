import { Chapter } from "@/src/types";

export const tonspurPruefenChapter: Chapter = {
  id: "tonspur-pruefen",
  title: "Tonspur prüfen lassen",
  scenes: [
    {
      id: "szene-3-c-a",
      title: "Tonspur prüfen lassen",
      showTitleBanner: true,
      layout: "default",
      image: "/schuss-im-archiv/images/scene-3/3CA-Tonspur-pruefen-lassen-mit-Text.png",
      content: [
        {
          type: "narrative",
          text: [
            "Die Forensik-Abteilung nimmt die Audiodatei unter die Lupe. Zunächst scheint alles plausibel – Tonhöhe, Sprechweise, Rhythmus passen zu Ralf König.",
            "Doch bei genauerer Analyse zeigen sich Auffälligkeiten:",
            "- Unregelmäßigkeiten im Spektrum: Bestimmte Frequenzbereiche wirken „zu glatt“, ohne die typischen Störgeräusche einer echten Aufnahme.",
            "- Künstliche Atempausen: Die Analyse entdeckt identische Atemgeräusche an mehreren Stellen – ein Hinweis auf Wiederholung durch KI-Modelle.",
            "- Metadaten-Check: Die Datei wurde nicht direkt auf dem Gerät erstellt.",
            "- Erstellungszeit: 18:56 Uhr",
            "- Software: VoiceClone Studio 5.2",
            "→ Diese Anwendung wird genutzt, um Stimmen künstlich zu erzeugen.",
            "Die Tonspur ist ein Deepfake. Jemand wollte ein Streitgespräch konstruieren – als perfektes Motiv für den Mord."
          ]
        },
        {
          type: "navigation",
          buttonText: "Herkunft prüfen",
          targetChapterId: "tonspur-ergebnisse"
        }
      ]
    },
  ]
}