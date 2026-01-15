import { Chapter } from "@/src/types";

export const finaleRalfKoenigChapter: Chapter = {
  id: "finale-ralf-koenig",
  title: "Festnahme: Ralf Koenig",
  scenes: [
    {
      id: "szene-xxx-ralf",
      title: "Festnahme: Ralf Koenig",
      layout: "dialogue",
      image: "/schuss-im-archiv/images/scene-xxx/ralf/XXX-verhoerszene-ralf-koenig-1.png",
      content: [
        {
          type: "dialogue",
          lines: [
            {
                character: "Ermittler:in",
                text: "Dr. König, wir haben genug Beweise. Nicht für einen Verdacht. Für die Wahrheit. Wenn Sie jetzt sprechen, dann vollständig.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Sie wollen wissen, wie es wirklich war?",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Ja.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Dann hören Sie zu. Und unterbrechen Sie mich nicht. Martin Heller war kein Heiliger. Er hat mit Informationen gespielt, die alles zerstören können. Aber ich habe ihn nicht erschossen.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Die Audioaufnahme ist Ihre Stimme.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Meine Stimme ist öffentlich. Es gibt hunderte Interviews. Wenn jemand schneiden kann, kann er mich alles sagen lassen.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Die Aufnahme klingt echt.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Echt genug, um zu wirken. Nicht echt genug, um vor Gericht zu halten.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Die Datei: msg_koenig_final.wav.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Allein der Name ist ein Fingerzeig. ‘Final’. Als hätte jemand eine fertige Version gebraucht — eine fertige Schuld.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Sie hatten ein Motiv. Martin wollte die Wahrheit rausbringen.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Ich hatte ein Motiv, ihn zu stoppen — politisch. Mit Worten. Nicht mit einer Waffe.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Sie waren der öffentliche Gegner. Der Druck kam von Ihnen.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Und deshalb bin ich das perfekte Ziel für eine inszenierte Tonspur.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Frau Bergmanns Karte war verschwunden.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Und Sie glauben, ich stehle Mitarbeitenden Schlüsselkarte aus der Teeküche?",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Jemand musste ins Archiv.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Dann schauen Sie auf die Person, die Zugänge hat. Passwörter. Nutzerkonten. Administratorrechte.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Dr. Haas.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Sie sagen es.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Und um 16:41 Uhr wurde die Datei über Martins Konto übertragen.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Ich habe keine Befugnis, in Martins Konto zu gehen. Haas schon.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Ich habe keine Befugnis, in Martins Konto zu gehen. Haas schon.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Ich war nicht im Archiv. Und wenn Sie das Gegenteil behaupten, dann haben Sie eine Spur — keine Wahrheit.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Sie spielen das hier runter.",
                align: "left"
            },
            {
                character: "Ralf Koenig",
                text: "Nein. Ich sage Ihnen, dass Sie gerade einer Konstruktion folgen. Einer plausiblen. Genau deshalb ist sie gefährlich.",
                align: "right"
            },
          ]
        }
      ]
    },
    {
        id: "szene-xxx-ralf-festnahme",
        title: "Festnahme: Ralf Koenig",
        layout: "dialogue",
        image: "/schuss-im-archiv/images/scene-xxx/ralf/XXX-verhoerszene-ralf-koenig-2.png",
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
                    character: "Ralf Koenig",
                    text: "Dann hoffen Sie, dass Ihre Geschichte stärker ist als die echte.",
                    align: "right"
                },
                ]
            }
        ]
    },
    {
        id: "szene-xxx-ralf-abfuhr",
        title: "Festnahme: Ralf Koenig",
        layout: "default",
        image: "/schuss-im-archiv/images/scene-xxx/ralf/XXX-verhoerszene-ralf-koenig-4.png",
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