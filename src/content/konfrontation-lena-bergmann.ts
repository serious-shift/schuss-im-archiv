import { Chapter } from "@/src/types";

export const konfrontationLenaBergmannChapter: Chapter = {
  id: "konfrontation-lena-bergmann",
  title: "Verhör: Lena Bergmann",
  scenes: [
    {
      id: "scene-7-a-b-a",
      title: "Verhör: Lena Bergmann",
      layout: "dialogue",
      image: "/schuss-im-archiv/images/interrogations/Lena-Bergmann-sitzend.png",
      showTitleBanner: true,
      content: [
        {
          type: "dialogue",
          lines: [
            {
              character: "Ermittler:in",
              text: "Frau Bergmann, wir müssen noch einmal miteinander sprechen. Es geht um die Aufnahmen aus dem Fitnessstudio am Tattag.",
              align: "left",
            },
            {
              character: "Lena Bergmann",
              text: "Die hab ich schon gesehen. Da ist … offenbar was schiefgelaufen. Sarah und ich waren zusammen da – zumindest dachte ich das.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "Laut Videoüberwachung waren Sie zu diesem Zeitpunkt nicht vor Ort. Nur Frau Weber ist auf den Aufnahmen zu sehen. Können Sie erklären, wie es zu diesem Widerspruch kommt?",
              align: "left",
            },
            {
              character: "Lena Bergmann",
              text: "Ich … kann’s mir nicht erklären. Vielleicht war ich früher dort? Oder später? Ich weiß nur, wir hatten ausgemacht, zusammen hinzugehen.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "Wann genau soll das gewesen sein?",
              align: "left",
            },
            {
              character: "Lena Bergmann",
              text: "Ich glaube … gegen 13 Uhr? Aber vielleicht war sie vorher schon da. Oder ich bin früher los. Ich hab ehrlich gesagt nicht auf die Uhr geschaut.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "Sie verstehen, dass Ihre Aussage nicht mit den überprüfbaren Daten übereinstimmt.",
              align: "left",
            },
            {
              character: "Lena Bergmann",
              text: "Ich verstehe, dass das seltsam aussieht. Aber ich hab keinen Grund zu lügen.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "Sie sagten in einem früheren Gespräch, dass Sie Dr. Heller am Nachmittag in seinem Büro getroffen haben, um ihm etwas Persönliches zu übergeben.",
              align: "left",
            },
            {
              character: "Lena Bergmann",
              text: "Ja … den Zettel. Ich konnte ihm das nicht ins Gesicht sagen. Ich wollte unsere … Beziehung beenden. Ich hab’s ihm einfach hingelegt.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "Was genau stand auf dem Zettel?",
              align: "left",
            },
            {
              character: "Lena Bergmann",
              text: "Dass ich das alles nicht mehr kann. Heimlich, unehrlich. Ich wollte raus aus der Situation.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "Haben Sie gesehen, was er mit dem Zettel gemacht hat?",
              align: "left",
            },
            {
              character: "Lena Bergmann",
              text: "Er hat ihn gelesen. Und … dann gefaltet. In die Schublade gelegt.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "Sie verstehen sicher, dass wir den Zettel untersuchen müssen. Wann wurde er geschrieben? Welche Spuren trägt er? Wer hatte wirklich Zugriff?",
              align: "left",
            },
            {
              character: "Lena Bergmann",
              text: "Ich hab nichts gemacht. Ich wollte einfach nur raus.",
              align: "right",
            },
          ]
        },
        {
            type: "narrative",
            text: "Der Zettel könnte mehr Informationen enthalten, als auf den ersten Blick sichtbar ist. Um den genauen Ursprung, die Abfolge und mögliche Manipulationen festzustellen, veranlassen Sie eine forensische Untersuchung."
        },
        {
            type: "navigation",
            buttonText: "Zettel prüfen",
            targetChapterId: "zettel-pruefen"
        }
      ]
    }
  ]
}