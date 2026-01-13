import { Chapter } from "@/src/types";

export const befragungPetraHaasChapter: Chapter = {
  id: "befragung-petra-haas",
  title: "Befragung: Dr. Petra Haas",
  scenes: [
    {
      id: "scene-5-c-a-a-a",
      title: "Befragung: Dr. Petra Haas",
      layout: "dialogue",
      image: '/images/interrogations/Dr-Petra-Haas-sitzend.png',
      showTitleBanner: true,
      content: [
        {
          type: "dialogue",
          lines: [
            {
                character: "Ermittler:in",
                text: "Frau Dr. Haas – laut System wurden am Admin-PC sowohl Ihr Fingerabdruck als auch der von Frau Bergmann festgestellt. Wann genau haben Sie den Rechner zuletzt benutzt?",
                align: 'left',
            },
            {
                character: "Dr. Petra Haas",
                text: "Ich arbeite dort regelmäßig – meist nachmittags. Wir koordinieren über diesen PC die Spendenlisten und Dokumentenfreigaben. Mein letzter Einsatz… müsste vorgestern gewesen sein.",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Also nicht am Tag des Vorfalls?",
                align: 'left',
            },
            {
                character: "Dr. Petra Haas",
                text: "Nein. Da war ich mit der Aktenorganisation in meinem Büro beschäftigt. Ich hatte keinen Bedarf, den Admin-PC zu nutzen.",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Frau Dr. Haas – wir haben festgestellt, dass am Tag der Tat um 16:41 Uhr eine Audiodatei an Dr. Hellers Handy übertragen wurde.",
                align: 'left',
            },
            {
                character: "Dr. Petra Haas",
                text: "Von wem?",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Vom Admin-PC – über Dr. Hellers eigenen Account.",
                align: 'left',
            },
            {
                character: "Dr. Petra Haas",
                text: "Dann war er es wohl selbst?",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Es handelt sich um eine manipulierte Aufnahme – ein sogenannter Deepfake. Ein Streitgespräch mit Ralf König, das so nie stattgefunden hat.",
                align: 'left',
            },
            {
                character: "Dr. Petra Haas",
                text: "Dann wurde sein Account missbraucht?",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Das ist die naheliegende Erklärung. Nur: Zu diesem Zeitpunkt war der Rechner offen, sein Konto aktiv – kein Logout. Jemand muss physischen Zugriff gehabt haben.",
                align: 'left',
            },
            {
                character: "Dr. Petra Haas",
                text: "Ich weiß davon nichts.",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Wer außer Ihnen hatte an diesem Tag überhaupt noch Zugang zu dem Bereich? Und wer hätte Interesse daran, Dr. Heller zu diskreditieren – oder schlimmer?",
                align: 'left',
            },
            {
                character: "Dr. Petra Haas",
                text: "Diese Unterstellung weise ich entschieden zurück. Ich war nicht an diesem Rechner. Und ich würde niemals ein gefälschtes Tonband verschicken – das ist absurd. Ich will hier niemanden verdächtigen … aber wenn Sie schon fragen: Ich habe gesehen, dass Frau Bergmann an diesem Tag länger am Admin-PC saß. Zumindest am Vormittag. Was sie genau gemacht hat – keine Ahnung.",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Sie sagen, sie war am Admin-Rechner?",
                align: 'left',
            },
            {
                character: "Dr. Petra Haas",
                text: "Wie gesagt: Ich will keine voreiligen Schlüsse ziehen. Aber falls Sie nach Zugriffsmöglichkeiten suchen – vielleicht hilft Ihnen das weiter.",
                align: 'right',
            },
          ]
        },
        {
            type: "narrative",
            text: [
                "Dr. Haas bestreitet jede Verantwortung – und bleibt vage.",
                "Doch ihre Aussage bringt eine neue Figur ins Zentrum der Ermittlungen: Lena Bergmann. Die Praktikantin hatte laut Haas am Tattag Zugang zum Admin-Rechner. War sie zur falschen Zeit am falschen Ort – oder steckt mehr dahinter? Um Klarheit zu schaffen, beschließen Sie, Lena erneut zu befragen."
            ]
        },
        {
            type: "navigation",
            buttonText: "Weiter zur Befragung von Lena Bergmann",
            targetChapterId: "befragung-lena-bergmann"
        }
      ]
    }
  ]
}