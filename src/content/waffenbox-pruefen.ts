import { Chapter } from "@/src/types";

export const waffenboxPruefenChapter: Chapter = {
  id: "waffenbox-pruefen",
  title: "Waffenbox prüfen",
  scenes: [
    {
      id: "scene-5-a-a-b",
      title: "Artikelnummer recherchieren",
      showTitleBanner: true,
      image: "/schuss-im-archiv/images/scene-5/5AAB-Artikelnummer-recherchieren-ohne-Text.png",
      layout: "sequential",
      content: [
        {
          type: "narrative",
          text: [
            "Du begutachtest erneut die leere Waffenbox aus Dr. Haas’ Büro. Auf dem Deckel klebt ein vergilbter Aufkleber:",
            "Seriennummer: SW-228/4.9",
            "Du gibst beide Nummern ins Recherchetool ein.",
            "Nach wenigen Sekunden erscheint ein Treffer im zentralen Waffenregister:",
          ]
        },
        {
            type: "analysis",
            title: "Waffenregister",
            items: [
                { label: 'Treffer', value: 'Pistole Walther P5' },
                { label: 'Typ', value: '9mm-Selbstladepistole' },
                { label: 'Baujahr', value: '1981' },
                { label: 'Halter', value: 'Bernd Haas', subItems: ['ehem. Kriminalhauptkommissar, Vater von Dr. Petra Haas'] },
                { label: 'Status', value: 'Privatbesitz, ordnungsgemäß gemeldet' },
                { label: 'Hinweis', value: '', subItems: ['Modell wird seit Jahrzehnten nicht mehr hergestellt – offizielle Munition wird nicht mehr produziert.'] },
            ]
        },
        {
            type: "narrative",
            text: [
                "Ein altmodisches Modell – schwer zu beschaffen, noch schwerer einsatzbereit zu machen. Und dennoch… genau diese Waffe könnte es gewesen sein.",
                "Die Walther P5 gilt offiziell als veraltet. Die dazugehörige Munition wird seit Jahren nicht mehr regulär produziert – zumindest nicht für den zivilen Markt.",
                "Wenn die Tatwaffe tatsächlich mit frischer Munition abgefeuert wurde, muss diese irgendwoher stammen. Nicht aus offiziellen Beständen. Nicht aus dem Archiv. Bleibt nur eine Möglichkeit: ein inoffizieller Weg."
            ],
        }
      ]
    },
    {
        id: "scene-6-a-a-b",
        title: "Schwarzmarkt Munition",
        image: "/schuss-im-archiv/images/scene-6/6AAB-Schwarzmaerkten-Munition.png",
        layout: "default",
        content: [
            {
                type: "narrative",
                text: [
                    "- Munition für die Walther P5 ist selten, aber nicht unmöglich zu beschaffen",
                    "- Zugänglich über spezialisierte Zwischenhändler mit Behördennähe",
                    "- Käuferkreis stark eingeschränkt – meist Personen mit Vorwissen oder Altbeständen",
                ]
            }
        ]
    },
    {
        id: "scene-7-a-a-b",
        title: "Verhör: Dr. Petra Haas (Kollegin)",
        showTitleBanner: true,
        image: "/schuss-im-archiv/images/interrogations/Dr-Petra-Haas-sitzend.png",
        layout: "dialogue",
        content: [
            {
                type: "dialogue",
                lines: [
                    {
                        character: "Ermittler:in",
                        text: "Frau Dr. Haas – wir haben eine Pistole sichergestellt. Modell: Walther P5. Alt, aber funktionstüchtig.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Was hat das mit mir zu tun?",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Die Seriennummer führt zu einem alten Behördenbestand. Auf den Namen Ihres Vaters registriert – ehemaliger Kriminalhauptkommissar.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Das überrascht mich. Ich wusste davon nichts.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Die Transportbox lag in Ihrem Büro – im Aktenschrank. Eine leere Box. Keine Waffe.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Wie bitte? Die Box bewahre ich dort auf, weil sie von meinem Vater ist. Eine Erinnerung. Aber ich habe sie seit Monaten nicht angerührt.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Ihr Vater war jahrzehntelang bei der Polizei. Die Walther P5 wird seit Jahren nicht mehr gebaut. Reguläre Munition ist nicht mehr im Umlauf – aber laut unseren Recherchen auf dem Schwarzmarkt beschaffbar.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Das bedeutet gar nichts. Ich habe keine Waffe benutzt. Und ich habe niemanden verletzt.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Wir sprechen hier von Mord.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Dann sollten Sie beweisen, dass ich’s war – statt mit leeren Kisten und alten Geschichten zu kommen.",
                        align: "right"
                    },
                ]
            },
            {
                type: "narrative",
                text: [
                    "Dr. Haas bleibt bei ihrer Linie. Doch die Verbindung zur Tatwaffe lässt sich nicht mehr leugnen. Du brauchst mehr. Mehr als Indizien.",
                    "Aber warte mal, ganz am Anfang lag doch am Tatort eine 9mm Patronenhülse. Vielleicht sollten wir die mal genauer unter die Lupe nehmen."
                ]
            }
        ]
    },
    {
        id: "scene-8-a-a-b",
        title: "Patronenhülse wird analysiert",
        image: "/schuss-im-archiv/images/scene-8/8AAB-Patronenhuelse-wird-analysiert.png",
        layout: "default",
        content: [
            {
                type: "narrative",
                text: [
                    "Du übergibst die am Tatort sichergestellte Patronenhülse dem kriminaltechnischen Labor. Es soll geklärt werden, ob sie aus der Walther P5 abgefeuert wurde, die auf den Vater von Dr. Haas registriert war.",
                    "Ergebnis:",
                    "Die Untersuchung ergibt ein ballistisches Match. Die Mikrospuren an der Patronenhülse – insbesondere die Schlagbolzenmarkierung und die Auszieherrille – passen exakt zur Walther P5, die in Haas’ Büro vermisst wird.",
                    "Ein deutliches Indiz: Die Hülse stammt aus genau dieser Waffe."
                ]
            },
            {
                type: "navigation",
                buttonText: "Weiter",
                targetChapterId: "finale-entscheidung"
            }
        ]
    }
  ]
}