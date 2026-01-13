import { Chapter } from "@/src/types";

export const verhoerPetraHaasChapter: Chapter = {
  id: "verhoer-petra-haas",
  title: "Verhör: Dr. Petra Haas",
  scenes: [
    {
      id: "szene-2-a",
      title: "Verhör: Dr. Petra Haas (Kollegin)",
      image: '/images/interrogations/Dr-Petra-Haas-sitzend.png',
      layout: "dialogue",
      showTitleBanner: true,
      content: [
        {
          type: "narrative",
          text: "Dr. Petra Haas (52), Stellvertretende Archivleiterin, ist Hellers engste Kollegin. Sie sitzt Ihnen gegenüber. Sie konfrontieren sie direkt mit dem DNA-Befund."
        },
        {
          type: "dialogue",
          lines: [
            {
              character: "Ermittler:in",
              text: "Guten Abend, Frau Dr. Haas. Danke, dass Sie sich Zeit nehmen. Wir untersuchen derzeit die Geschehnisse vom gestrigen Abend im Archiv. Können Sie bitte schildern, wie Ihr gestriger Abend verlaufen ist?",
              align: "left",
            },
            {
              character: "Dr. Petra Haas",
              text: "Natürlich. Ich habe bis etwa 18:30 Uhr gearbeitet – ein paar E-Mails beantwortet, Akten sortiert. Dann habe ich meine Sachen gepackt. Gegen 18:45 Uhr habe ich das Archiv verlassen.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "18:45 Uhr – sind Sie sich da sicher?",
              align: "left",
            },
            {
              character: "Dr. Petra Haas",
              text: "Ja… natürlich. Ich erinnere mich gut – ich habe auf die Uhr gesehen, weil ich den Bus bekommen wollte.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "Haben Sie Dr. Heller an diesem Abend noch gesehen oder gesprochen?",
              align: "left",
            },
            {
              character: "Dr. Petra Haas",
              text: "Nein. Ich habe ihn nur noch kurz in seinem Büro sitzen sehen, als ich gegangen bin. Aber wir hatten in den letzten Tagen kaum direkten Kontakt. Wir sind uns eher aus dem Weg gegangen.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "Woran lag das?",
              align: "left",
            },
            {
              character: "Dr. Petra Haas",
              text: "Wir hatten zuletzt einen fachlichen Disput. Nichts Dramatisches, aber es gab Uneinigkeiten… Ich wollte Eskalationen vermeiden und mich auf meine Arbeit konzentrieren.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "Die Spurensicherung fand ein Haar von Ihnen an Dr. Hellers Jacke – direkt am Ärmel. Das weist auf körperlichen Kontakt hin. Wie erklären Sie sich das?",
              align: "left",
            },
            {
              character: "Dr. Petra Haas",
              text: "Das… überrascht mich. Vielleicht beim Vorbeigehen? Das Archiv ist eng, und auch wenn wir Abstand gehalten haben – Berührungen lassen sich nicht immer vermeiden.",
              align: "right",
            },
            {
              character: "Ermittler:in",
              text: "Sie sind also sicher, das Gebäude um 18:45 Uhr verlassen zu haben – und hatten danach keinen weiteren Kontakt zu Dr. Heller?",
              align: "left",
            },
            {
              character: "Dr. Petra Haas",
              text: "Ja. Ich bin danach direkt nach Hause. Ich hatte nichts weiter geplant.",
              align: "right",
            },
          ]
        },
        {
          type: "narrative",
          text: "Um die zeitlichen Angaben aus der Befragung zu verifizieren, werden nun die Zugangsprotokolle des Archivs ausgewertet."
        },
        {
          type: "navigation",
          buttonText: "Zugangsprotokolle prüfen",
          targetChapterId: "untersuchung-der-archivzugaenge"
        }
      ]
    }
  ]
}