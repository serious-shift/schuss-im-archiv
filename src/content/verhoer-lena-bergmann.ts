import { Chapter } from "@/src/types";

export const verhoerLenaBergmannChapter: Chapter = {
  id: "verhoer-lena-bergmann",
  title: "Verhör: Lena Bergmann",
  scenes: [
    {
      id: "szene-2-b",
      title: "Verhör: Lena Bergmann (Praktikantin)",
      image: '/images/interrogations/Lena-Bergmann-sitzend.png',
      layout: "dialogue",
      showTitleBanner: true,
      content: [
        {
          type: "narrative",
          text: [
            "Lena Bergmann, 21, ist Praktikantin im Staatsarchiv. Sie arbeitete in Hellers Abteilung und die Schriftuntersuchung ergab, dass mit ihrer Handschrift der Zettel geschrieben wurde.",
            "Zettel: “Heute Abend ist Schluss. Ich halte das Versteckspiel nicht mehr aus.“"
          ]
        },
        {
          type: "dialogue",
          lines: [
            {
              character: "Ermittler:in",
              text: "Guten Tag, Frau Bergmann. Danke, dass Sie heute hier sind. Wir müssen einige Punkte zu den gestrigen Ereignissen im Staatsarchiv klären. Auf Dr. Hellers Schreibtisch wurde ein handschriftlicher Zettel gefunden. Dort steht: ‚Heute Abend ist Schluss. Ich halte das Versteckspiel nicht mehr aus.‘ Die Handschrift wurde als Ihre identifiziert. Können Sie uns erklären, was es damit auf sich hat?",
              align: "left",
            },
            {
              character: "Lena Bergmann",
              text: "… Der Zettel ist von mir. Das stimmt. Ich habe ihn gestern im Aufenthaltsraum geschrieben – aber ich habe ihn weggeworfen. Zerknüllt und in den Papierkorb. Ich war aufgewühlt … es war ein privates Thema.",
              align: "right",
            }
          ]
        },
        {
          type: "decision",
          question: "Was möchten Sie Lena Bergmann fragen?",
          choices: [
            {
              text: "War es ein persönlicher Konflikt mit einer bestimmten Person?",
              followUpContent: [
                {
                  type: "dialogue",
                  lines: [
                    {
                      character: "Ermittler:in",
                      text: "War es ein persönlicher Konflikt mit einer bestimmten Person?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Es war … kompliziert. Es ging um etwas, das ich lange für mich behalten habe. Ich wollte, dass etwas endet. Mehr nicht.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Mit wem genau?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Ich möchte dazu keine Namen nennen. Es war privat. Und es hatte nichts mit der Arbeit im Archiv zu tun. Ich weiß, wie das klingt. Aber ich habe diesen Zettel nicht geschrieben, um jemandem zu schaden. Ich war überfordert und wollte das einfach loswerden.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Sie sagen also, der Zettel war nicht als Drohung gemeint?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Nein. Ganz sicher nicht. Es war keine Warnung. Und es hatte nichts mit Geld, Akten oder Politik zu tun.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Und trotzdem taucht er später auf dem Schreibtisch von Dr. Heller auf.",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Ja. Und genau das macht mir Angst. Jemand wollte, dass es so aussieht, als hätte ich etwas damit zu tun. Aber ich war nicht in seinem Büro. Ich habe das Archiv am frühen Nachmittag verlassen und bin nicht zurückgekommen.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Sie sagen, Sie haben das Archiv am Nachmittag verlassen – erinnern Sie sich an die genaue Uhrzeit?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Ich bin gegen 15:00 Uhr gegangen. Ich hatte meine Aufgaben abgeschlossen und bin dann ins Fitnessstudio. Ich war den ganzen Abend mit einer Freundin unterwegs. Wenn nötig, kann sie das bestätigen.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Also hatten Sie ab 15:00 Uhr keinen Kontakt mehr zu Dr. Heller oder dem Archiv?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Nein. Kein Kontakt.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Und der Zettel wurde Ihrer Aussage nach im Aufenthaltsraum weggeworfen?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Ja. Direkt in den Papierkorb beim Fenster. Ich war allein, als ich ihn geschrieben habe.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Verstanden. Danke, Frau Bergmann. Wir werden dem nachgehen.",
                      align: "left",
                    }
                  ]
                }
              ]
            },
            {
              text: "Was genau meinten Sie mit ‚Versteckspiel‘? Ging es um berufliche Vorgänge im Archiv?",
              followUpContent: [
                {
                  type: "dialogue",
                  lines: [
                    {
                      character: "Ermittler:in",
                      text: "Was genau meinten Sie mit ‚Versteckspiel‘? Ging es um berufliche Vorgänge im Archiv?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Nein. Es hatte nichts mit der Arbeit zu tun. Es war … persönlich. Und es war ein Fehler, überhaupt etwas aufzuschreiben.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Wieso liegt der Zettel dann auf dem Schreibtisch von Dr. Heller?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Ich weiß es nicht. Ich war nicht in seinem Büro. Ich habe das Archiv am frühen Nachmittag verlassen und bin nicht zurückgekehrt. Jemand muss den Zettel dort hingelegt haben. Aber ich war es nicht.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Sie sagen, Sie haben das Archiv am Nachmittag verlassen – erinnern Sie sich an die genaue Uhrzeit?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Ich bin gegen 15:00 Uhr gegangen. Ich hatte meine Aufgaben abgeschlossen und bin dann ins Fitnessstudio. Ich war den ganzen Abend mit einer Freundin unterwegs. Wenn nötig, kann sie das bestätigen.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Also hatten Sie ab 15:00 Uhr keinen Kontakt mehr zu Dr. Heller oder dem Archiv?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Nein. Kein Kontakt.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Und der Zettel wurde Ihrer Aussage nach im Aufenthaltsraum weggeworfen?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Ja. Direkt in den Papierkorb beim Fenster. Ich war allein, als ich ihn geschrieben habe.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Verstanden. Danke, Frau Bergmann. Wir werden dem nachgehen.",
                      align: "left",
                    }
                  ]
                }
              ]
            },
            {
              text: "Warum haben Sie das überhaupt aufgeschrieben?",
              followUpContent: [
                {
                  type: "dialogue",
                  lines: [
                    {
                      character: "Ermittler:in",
                      text: "Warum haben Sie das überhaupt aufgeschrieben?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Weil ich nicht wusste, wohin sonst mit meinen Gedanken. Ich konnte mit niemandem darüber sprechen.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Über was genau?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Über etwas, das mir zu nah ging. Etwas, das ich viel zu lange mit mir herumgetragen habe. Ich wusste, dass ich eine Entscheidung treffen muss. Aber ich wusste nicht, wie ich sie aussprechen soll.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Welche Entscheidung?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Eine, die nichts mit meiner Arbeit zu tun hatte. Und die… Folgen gehabt hätte. Für mehrere Personen. Ich habe den Zettel geschrieben, weil ich dachte, wenn ich es einmal aufgeschrieben habe, kann ich es später sagen. Oder zumindest… klar denken.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "War der Zettel für Dr. Heller bestimmt?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Ich… habe darüber nachgedacht. Aber ich habe ihn ihm nicht gegeben.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Warum nicht?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Weil ich Angst hatte. Und weil ich mir nicht sicher war, ob ich es wirklich durchziehen kann. Deshalb habe ich den Zettel zerknüllt und weggeworfen.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Und trotzdem taucht er später auf seinem Schreibtisch auf.",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Ja. Und genau das beunruhigt mich. Wenn ich gewollt hätte, dass er ihn liest, hätte ich es ihm direkt gesagt. Oder den Zettel bewusst dagelassen. So war das nicht gedacht.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Und der Zettel wurde Ihrer Aussage nach im Aufenthaltsraum weggeworfen?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Ja. Direkt in den Papierkorb beim Fenster. Ich war allein, als ich ihn geschrieben habe.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Sie sagen, Sie haben das Archiv am Nachmittag verlassen – erinnern Sie sich an die genaue Uhrzeit?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Ich bin gegen 15:00 Uhr gegangen. Ich hatte meine Aufgaben abgeschlossen und bin dann ins Fitnessstudio. Ich war den ganzen Abend mit einer Freundin unterwegs. Wenn nötig, kann sie das bestätigen.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Also hatten Sie ab 15:00 Uhr keinen Kontakt mehr zu Dr. Heller oder dem Archiv?",
                      align: "left",
                    },
                    {
                      character: "Lena Bergmann",
                      text: "Nein. Kein Kontakt.",
                      align: "right",
                    },
                    {
                      character: "Ermittler:in",
                      text: "Verstanden. Danke, Frau Bergmann. Wir werden dem nachgehen.",
                      align: "left",
                    }
                  ]
                }
              ]
            },
          ]
        }
      ]
    },
    {
        id: "scene-2-b-decision",
        title: "Glauben schenken oder nicht?",
        showTitleBanner: true,
        content: [
          {
            type: 'narrative',
            text: [
              "Der Zettel wirft neue Fragen auf.",
              "Lena sagt, sie habe ihn nie übergeben – und doch lag er auf Hellers Schreibtisch.",
              "Auch ihre Aussage zum Zeitpunkt des Verlassens des Archivs könnte entscheidend sein.",
              "War sie wirklich schon um 15:00 Uhr weg?",
              "Zwei Spuren, zwei Möglichkeiten, das Puzzle weiter zusammenzusetzen."
            ]
          },
            {
                type: 'decision',
                question: "Wie möchtest du weiter vorgehen?",
                choices: [
                    {
                        text: "➜ Sie schauen sich die Archivzugänge an. Wurde Lena wirklich um 15:00 Uhr ausgebucht? Oder war sie doch länger vor Ort, als sie behauptet?",
                        targetChapterId: "lenas-anliegen"
                    },
                    {
                        text: "➜ Sie geben den Zettel an die Spurensicherung weiter: Tinte, Fingerabdrücke, Papierherkunft – alles wird geprüft. Vielleicht lässt sich belegen, wer ihn tatsächlich geschrieben – und vielleicht sogar noch angefasst – hat.",
                        targetChapterId: "zettel-pruefen"
                    }
                ]
            }
        ]
    },
  ]
}