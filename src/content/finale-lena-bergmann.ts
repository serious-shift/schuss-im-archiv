import { Chapter } from "@/src/types";

export const finaleLenaBergmannChapter: Chapter = {
  id: "finale-lena-bergmann",
  title: "Festnahme: Lena Bergmann",
  scenes: [
    {
      id: "szene-xxx-lena",
      title: "Festnahme: Lena Bergmann",
      layout: "dialogue",
      image: "/schuss-im-archiv/images/scene-xxx/lena/XXX-verhoerszene-Lena-2.png",
      content: [
        {
          type: "dialogue",
          lines: [
            {
                character: "Ermittler:in",
                text: "Frau Bergmann, wir haben genug Beweise. Nicht für einen Verdacht. Für die Wahrheit. Wenn Sie jetzt sprechen, dann vollständig.",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Sie wollen wissen, wie es wirklich war?",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Ja.",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Dann hören Sie zu. Und unterbrechen Sie mich nicht. Martin Heller war kein Opfer politischer Mächte. Er war jemand, der zu viel gesehen hat. Aber ich habe ihn nicht getötet.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Weshalb dann Ihre Schlüsselkarte im Archiv?",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Weil sie weg war. Zwei Tage vorher. In der Teeküche.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Und trotzdem: Zutritt genau zur Tatzeit.",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Genau. Jemand wollte, dass es so aussieht, als wäre ich es gewesen.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Die Kameras im Fitnessstudio.",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Manipuliert. Ich war dort. Aber jemand hat Minuten verschoben, ersetzt — damit mein Alibi bricht.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Sie erwarten, dass ich das glaube?",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Sie müssen es nicht glauben. Sie müssen nur fragen, wer das kann.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Die Audioaufnahme.",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Ein Zusammenschnitt. Silben, Tonlagen, geglättete Übergänge. Nicht mal gut versteckt.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Sie haben Schnitt-Erfahrung.",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Und Dr. Haas hat Zugriff auf alles: Systeme, Passwörter, Dateien. Sie ist stellvertretende Archivleitung.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Die Datei hieß msg_koenig_final.wav.",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Eben. ‘Final’. Als wäre das eine fertige Erzählung. Eine, die König belasten soll — und mich gleich mit, weil meine Karte am Tatort auftaucht.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Ihr Fingerabdruck auf der Eingabetaste.",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Im Archiv arbeite ich täglich. Meine Abdrücke sind überall. Das beweist nur: dass ich existiere.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Was ist am Abend passiert?",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Ich war nicht im Archiv. Martin hat mir vorher noch gesagt, er will ‘aufräumen’. Und danach war er tot. Mehr weiß ich nicht.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Sie haben ein perfektes Motiv: Angst, dass alles rauskommt.",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Ich hatte Angst, ja. Aber Angst ist kein Geständnis. Das Geständnis bekommen Sie bei der Person, die Spuren legen kann.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Sie schieben es auf Haas.",
                align: "left"
            },
            {
                character: "Lena Bergmann",
                text: "Ich schiebe gar nichts. Ich sage nur: Ihre Beweise erzählen eine Geschichte. Und jemand hat sie geschrieben.",
                align: "right"
            },
          ]
        }
      ]
    },
    {
        id: "szene-xxx-lena-festnahme",
        title: "Festnahme: Lena Bergmann",
        layout: "dialogue",
        image: "/schuss-im-archiv/images/scene-xxx/lena/XXX-verhoerszene-Lena-3.png",
        content: [
            {
                type: "dialogue",
                lines: [
                    {
                        character: "Ermittler:in",
                        text: "Sie sind festgenommen wegen Mordverdachts an Dr. Martin Heller.",
                        align: "left"
                    },
                    {
                        character: "Lena Bergmann",
                        text: "Dann nehmen Sie mich fest. Aber Sie verhaften gerade die Falsche.",
                        align: "right"
                    },
                ]
            }
        ]
    },
    {
        id: "szene-xxx-lena-abfuhr",
        title: "Festnahme: Lena Bergmann",
        layout: "default",
        image: "/schuss-im-archiv/images/scene-xxx/lena/XXX-verhoerszene-Lena-5.png",
        content: [
            {
                type: "nullBlock",
            },
            {
                type: "navigation",
                buttonText: "Fall abschließen",
                customUrl: "/resolution?result=failure"
            }
        ]
    },
  ]
}