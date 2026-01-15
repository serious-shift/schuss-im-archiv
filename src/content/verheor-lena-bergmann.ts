import { Chapter } from "@/src/types";

export const verheorLenaBergmannChapter: Chapter = {
  id: "verheor-lena-bergmann",
  title: "Verhör: Lena Bergmann",
  scenes: [
    {
      id: "scene-4-a",
      title: "Verhör: Lena Bergmann (Praktikantin)",
      layout: "dialogue",
      image: '/schuss-im-archiv/images/interrogations/Lena-Bergmann-sitzend.png',
      showTitleBanner: true,
      content: [
        {
          type: "dialogue",
          lines: [
            {
              character: "Ermittler:in",
              text: "Guten Tag, Frau Bergmann. Danke, dass sie zu einem erneuertem Verhör zugestimmt haben. Das Zutrittssystem hat Ihre Schlüsselkarte gestern um 19:00 Uhr registriert. Können Sie bitte schildern, wie Ihr gestriger Tag verlaufen ist?",
              align: "left"
            },
            {
              character: "Lena Bergmann",
              text: "Ja … klar. Ich war gestern nur bis etwa 15:00 Uhr im Archiv. Ich hatte meine Aufgaben erledigt und bin dann gegangen – früher als sonst. Um 15:30 Uhr habe ich mich mit einer Freundin im Fitnessstudio getroffen. Wir waren dort bis ungefähr 19:30 Uhr. Danach sind wir noch gemeinsam etwas essen gegangen.",
              align: "right"
            },
            {
              character: "Ermittler:in",
              text: "Ihre Freundin könnte das bestätigen?",
              align: "left"
            },
            {
              character: "Lena Bergmann",
              text: "Ja. Natürlich. Wir waren die ganze Zeit zusammen. Sie weiß jetzt auch schon, dass Sie wahrscheinlich mit ihr sprechen wollen.",
              align: "right"
            },
            {
              character: "Ermittler:in",
              text: "Trotzdem wurde um 19:00 Uhr Ihre Schlüsselkarte benutzt, um das Archiv zu betreten. Wie erklären Sie sich das?",
              align: "left"
            },
            {
              character: "Lena Bergmann",
              text: "Weil ich, wie ich ihnen vorhin bereits erklärt habe, die Karte schon vor drei Tagen verloren habe. Ich war sicher, dass sie irgendwo im Aufenthaltsraum oder bei meinen Unterlagen liegt. Aber sie blieb verschwunden – peinlich, ich weiß. Deshalb habe ich die letzten Tage nur mit dem manuellen Zugangscode (949089) gearbeitet.",
              align: "right"
            },
            {
              character: "Ermittler:in",
              text: "Haben Sie irgendjemandem gemeldet, dass Ihre Karte fehlt?",
              align: "left"
            },
            {
              character: "Lena Bergmann",
              text: "Ja. Dem Archivadministrator. Als ich gemerkt habe, dass die Karte wirklich weg ist, habe ich es gemeldet. Er hat mir daraufhin einen temporären, manuellen Zugangscode ausgestellt.Der Code war ausdrücklich als Übergangslösung gedacht – bis eine neue Karte ausgestellt wird. Dr. Haas wusste davon, weil sie als stellvertretende Archivleitung Zugriff auf diese Meldungen hat.",
              align: "right"
            },
            {
              character: "Ermittler:in",
              text: "Nur um es festzuhalten: Sie waren ab 15:00 Uhr nicht mehr im Archiv, Ihre Schlüsselkarte fehlt seit drei Tagen, und Sie waren zum Zeitpunkt des Eintrags in die Logfiles nachweislich im Fitnessstudio?",
              align: "left"
            },
            {
              character: "Lena Bergmann",
              text: "Ja. Das ist korrekt.",
              align: "right"
            },
            {
              character: "Ermittler:in",
              text: "Gut. Danke für Ihre Offenheit, Frau Bergmann. Wir werden auf Sie zurückkommen.",
              align: "left"
            },
          ]
        },
        {
          type: "navigation",
          buttonText: "Alibi untersuchen",
          targetChapterId: "untersuchung-des-alibis"
        }
      ]
    }
  ]
}