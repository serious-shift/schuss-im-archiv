import { Chapter } from "@/src/types";

export const zettelPruefenChapter: Chapter = {
  id: "zettel-pruefen",
  title: "Forensische Untersuchung: Zettel",
  scenes: [
    {
      id: "scene-2-b-a",
      title: "Forensische Untersuchung: Zettel",
      image: "/schuss-im-archiv/images/scene-2/2BA-forensische-untersuchung-1.png",
      layout: "default",
      showTitleBanner: true,
      content: [
        {
          type: "nullBlock",
        }
      ]
    },
    {
      id: "scene-2-b-a-2",
      title: "Forensische Untersuchung: Zettel",
      image: "/schuss-im-archiv/images/scene-2/2BA-forensische-untersuchung-2.png",
      layout: "default",
      content: [
        {
          type: "narrative",
          text: [
            "Das forensische Labor hat die handschriftliche Notiz untersucht, die am Tatabend auf Dr. Hellers Schreibtisch lag. Ziel: Herausfinden, wann und wo der Zettel zuletzt berührt wurde – und von wem.",
            "1. Papierstruktur: Zettel wurde stark zerknüllt und dann wieder geglättet – entspricht Lenas Aussage.",
            "2. Faserspuren: Feine Gewebefasern an der Rückseite des Zettels – nicht aus dem Aufenthaltsraum, sondern identisch mit den Bezügen von Dr. Hellers Bürostuhl.",
            "3. Tintenanalyse: Der Text wurde mit einem handelsüblichen Archivkuli geschrieben – keine Auffälligkeiten.",
            "4. Schriftbildanalyse: Vergleich mit Notiz aus Praktikantenprotokoll, 2 Wochen alt. Übereinstimmungen bei 13 von 13 Schriftmerkmalen (H, S, z, Schleifenführung, Druckverlauf)",
            "5. Fingerabdruck: Zwei klare Abdrücke: Lena Bergmann – dominant an der Oberseite & Dr. Heller – an der unteren Ecke des Zettels",
            "Die Notiz stammt von Lena. Lena hat sie definitiv geschrieben – und zumindest einmal in der Hand gehalten. Doch auch Dr. Heller muss den Zettel angefasst haben. Heißt das… er hat ihn selbst aus dem Müll geholt? Oder wurde er ihm absichtlich hingelegt – und er hat ihn später in die Hand genommen?",
          ]
        }
      ]
    },
    {
        id: "scene-2-b-a-dialogue",
        title: "Verhör: Lena Bergmann (Praktikantin)",
        layout: "dialogue",
        image: "/schuss-im-archiv/images/interrogations/Lena-Bergmann-sitzend.png",
        showTitleBanner: true,
        content: [
            {
                type: "dialogue",
                lines: [
                    {
                        character: "Ermittler:in",
                        text: "Frau Bergmann, wir müssen nochmals mit Ihnen sprechen. Die forensische Untersuchung hat ergeben: Auf dem Zettel sind nicht nur Ihre Fingerabdrücke – sondern auch die von Dr. Heller.",
                        align: "left",
                    },
                    {
                        character: "Lena Bergmann",
                        text: "Ich … habe etwas verschwiegen. Nicht aus böser Absicht. Ich wollte nur nicht, dass man … das Falsche denkt.",
                        align: "right",
                    },
                    {
                        character: "Ermittler:in",
                        text: "Dann helfen Sie uns, das Richtige zu verstehen.",
                        align: "left",
                    },
                    {
                        character: "Lena Bergmann",
                        text: "Wir hatten eine Affäre. Dr. Heller und ich.",
                        align: "right",
                    },
                    {
                        character: "Ermittler:in",
                        text: "Wie lange schon?",
                        align: "left",
                    },
                    {
                        character: "Lena Bergmann",
                        text: "Seit etwa zwei Monaten. Es war … kompliziert. Heimlich. Ich wusste, dass es keine Zukunft hat. Und irgendwann hat es mich aufgefressen. Ich konnte das Doppelleben nicht mehr.",
                        align: "right",
                    },
                    {
                        character: "Ermittler:in",
                        text: "Deswegen der Zettel?",
                        align: "left",
                    },
                    {
                        character: "Lena Bergmann",
                        text: "Ja. Ich wollte es beenden. Ich konnte es ihm nicht ins Gesicht sagen – also hab ich es aufgeschrieben. Am Nachmittag hab ich ihn in seinem Büro aufgesucht, den Zettel hingelegt und gesagt: ›Ich kann das nicht mehr.‹ Er hat ihn gelesen, aber kaum reagiert.  Er hat gesagt: ›Wir reden später darüber.‹ Dann hat er ihn gefaltet, in seine Schublade gelegt und mich gebeten zu gehen.",
                        align: "right",
                    },
                    {
                        character: "Ermittler:in",
                        text: "Und das war das letzte Gespräch zwischen Ihnen beiden?",
                        align: "left",
                    },
                    {
                        character: "Lena Bergmann",
                        text: "Ja. Ich bin direkt danach gegangen. Gegen 15:00 Uhr. Danach war ich mit einer Freundin verabredet.",
                        align: "right",
                    },
                    {
                        character: "Ermittler:in",
                        text: "Sie verstehen, dass das Motiv – eine heimliche Beziehung, dann ein abruptes Ende – auch in ein anderes Licht gerückt werden könnte?",
                        align: "left",
                    },
                    {
                        character: "Lena Bergmann",
                        text: "Ich weiß, wie das wirkt. Aber ich habe ihn nicht umgebracht. Ich wollte einfach nur raus aus dieser Situation – nicht, dass er stirbt.",
                        align: "right",
                    },
                ]
            }
        ]
    },
    {
      id: "scene-2-b-a-conclusion",
      title: "Hellers Unterlagen durchsuchen",
      layout: "default",
      image: "/schuss-im-archiv/images/scene-2/2B-Entscheidung-aus-dem-verhoerraum.png",
      content: [
        {
          type: "narrative",
          text: [
            "Nach Lenas Geständnis beginnt sich das Puzzle neu zu ordnen.",
            "Heller hatte also eine heimliche Affäre mit seiner Praktikantin.",
            "Und er wurde damit konfrontiert – nur wenige Stunden vor seinem Tod.",
            "Doch warum hat er kaum reagiert?",
            "Wen wollte er „später“ sprechen?",
            "Eine neue Spur ergibt sich aus Hellers interner Kommunikation: Ein kurzer, unverschlüsselter Eintrag in seinem digitalen Notizsystem.",
          ]
        },
        {
            type: "navigation",
            buttonText: "Ralf König befragen",
            targetChapterId: "verhoer-ralf-koenig"
        }
      ]
    },
  ]
}