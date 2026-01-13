import { Chapter } from "@/src/types";

export const befragungLenaBergmannChapter: Chapter = {
  id: "befragung-lena-bergmann",
  title: "Befragung: Lena Bergmann",
  scenes: [
    {
      id: "scene-5-c-a-b",
      title: "Befragung Lena Bergmann",
      layout: "dialogue",
      image: '/images/interrogations/Lena-Bergmann-sitzend.png',
      showTitleBanner: true,
      content: [
        {
          type: "dialogue",
          lines: [
            {
                character: "Ermittler:in",
                text: "Hallo Frau Bergmann – stellen Sie sich bitte kurz vor. Wer sind Sie, und was genau machen Sie im Staatsarchiv?",
                align: 'left',
            },
            {
                character: "Lena Bergmann",
                text: "Ich heiße Lena Bergmann. Ich bin Praktikantin im Archiv für Zeitgeschichte. Ich arbeite hauptsächlich mit digitalen Dokumenten – Scans, Spendenlisten, Datenpflege. Dafür nutze ich regelmäßig die Admin-Station.",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Sie waren gestern die letzte Person, die diesen Rechner genutzt hat. Laut System bis etwa 15:00 Uhr. Stimmt das?",
                align: 'left',
            },
            {
                character: "Lena Bergmann",
                text: "Ja. Ich habe bis 15:00 Uhr gearbeitet und bin dann gegangen.",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Können Sie das belegen?",
                align: 'left',
            },
            {
                character: "Lena Bergmann",
                text: "Ja. Im Zugangsprotokoll müsste mein letzter Austritt über den manuellen Code stehen – 949089. Meine Zugangskarte ist weg, deshalb nutze ich den Code. Ich habe mich um Punkt 15:00 Uhr ausgeloggt.",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Nach Ihrem Weggang wurde vom gleichen Rechner aus – über das Nutzerkonto von Dr. Heller – eine manipulierte Audiodatei auf dessen Handy übertragen.",
                align: 'left',
            },
            {
                character: "Lena Bergmann",
                text: "Über sein Konto? Das wusste ich nicht. Ich war nicht mehr da. Ich hatte Feierabend.",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Ist Ihnen an dem Tag irgendetwas Ungewöhnliches an der Admin-Station aufgefallen?",
                align: 'left',
            },
            {
                character: "Lena Bergmann",
                text: "Ja. Da steckte ein USB-Stick im Rechner. Silberfarben, kein Label – der war sonst nie da.",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Haben Sie ihn geöffnet?",
                align: 'left',
            },
            {
                character: "Lena Bergmann",
                text: "Ja … ich war kurz neugierig. Ich habe den Stick im Explorer geöffnet – da war nur eine einzige Datei drauf.",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Und der Name?",
                align: 'left',
            },
            {
                character: "Lena Bergmann",
                text: "Der Dateiname war msg_koenig_final.wav. Das kam mir komisch vor – ich dachte, es hätte was mit einem früheren Interview zu tun. Aber ich hab sie nicht geöffnet. Ehrlich nicht.",
                align: 'right',
            },
            {
                character: "Ermittler:in",
                text: "Warum nicht?",
                align: 'left',
            },
            {
                character: "Lena Bergmann",
                text: "Weil das nicht mein Job ist. Ich hab das Fenster direkt wieder geschlossen. Ich wollte einfach nichts falsch machen.",
                align: 'right',
            },
          ]
        },
        {
            type: "decision",
            question: "Die Spuren auf der Tastatur lassen sich nicht mehr ignorieren. Wir haben Fingerabdrücke von Haas aber auch von Bergmann gefunden. Wen möchten Sie konfrontieren?",
            choices: [
                {
                    text: "→ Stimmt es, dass Lena sagt, sie war um 15:00 Uhr weg?",
                    targetChapterId: ""
                },
                {
                    text: "→ Du gibst den silberfarbenen Stick zur forensischen Analyse.",
                    targetChapterId: "usb-stick-verlust"
                }
            ]
        }
      ]
    }
  ]
}