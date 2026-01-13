import { Chapter } from "@/src/types";

export const verhoerRalfKoenigChapter: Chapter = {
  id: "verhoer-ralf-koenig",
  title: "Verhör: Ralf König",
  scenes: [
    {
        id: "scene-2-c",
        title: "Verhör: Ralf König (Freund & Journalist)",
        image: '/images/interrogations/Ralf-König-sitzend-verhörraum.png',
        layout: 'dialogue',
        showTitleBanner: true,
        content: [
            {
                type: 'dialogue',
                lines: [
                    {
                        character: "Ermittler:in",
                        text: "Herr König, danke, dass Sie sich Zeit genommen haben. Es geht um das Audiomaterial auf dem Handy von Dr. Heller.",
                        align: 'left',
                    },
                    {
                        character: "Ralf König",
                        text: "Ich habe davon gehört. Meine Redaktion hat mich direkt informiert. Aber … ich verstehe das nicht. Ich war das nicht.",
                        align: 'right',
                    },
                    {
                        character: "Ermittler:in",
                        text: "Auf der Aufnahme sind Sie klar zu hören. Ihre Stimme, Ihre Wortwahl – alles passt. Wie erklären Sie sich das?",
                        align: 'left',
                    },
                    {
                        character: "Ralf König",
                        text: "Ich war gestern nicht einmal in Hellers Büro. Ich wollte ihn nur nach der Arbeit zum Essen abholen. Wir hatten locker 18:30 ausgemacht. Aber er ist nicht rausgekommen. Irgendwas war komisch.",
                        align: 'right',
                    },
                    {
                        character: "Ermittler:in",
                        text: "Die Aufnahme auf seinem Handy klingt deutlich schärfer. Fast wie eine Warnung.",
                        align: 'left',
                    },
                ]
            },
            //{
            //    type: 'audio',
            //    src: '/audios/audio-koenig.mp3',
            //    caption: 'Audioaufnahme von Ralf König auf Dr. Hellers Handy'
            //},
            {
                type: 'dialogue',
                lines: [
                    {
                        character: "Ermittler:in",
                        text: "Du weißt genau, dass es so nicht weitergehen kann. Irgendwann muss Schluss sein, verstehst du? Und wenn du das nicht einsehen willst… dann musst du eben die Konsequenzen tragen.",
                        align: 'left',
                    },
                    {
                        character: "Ralf König",
                        text: "Was… zur Hölle? Das… das habe ich nie gesagt. Das ist nicht meine Nachricht. Also, nicht so.",
                        align: 'right',
                    },
                    {
                        character: "Ermittler:in",
                        text: "Sind Sie sicher, dass Sie nicht in der Hitze des Moments—",
                        align: 'left',
                    },
                    {
                        character: "Ralf König",
                        text: "Nein! Ich meine… ja, es ist meine Stimme. Aber ich schwöre Ihnen, das war nie der Inhalt. Ich habe gesagt, dass ich draußen auf ihn warte. Mehr nicht.",
                        align: 'right',
                    },
                ]
            },
            {
                type: 'decision',
                question: "Was möchten Sie Ralf König fragen?",
                choices: [
                    {
                        text: "Würden Sie sich bereit erklären, uns Ihr Handy zu geben? Wir lassen beide Geräte forensisch untersuchen.",
                        followUpContent: [
                          {
                              type: 'dialogue',
                              lines: [
                                  {
                                      character: "Ermittler:in",
                                      text: "Würden Sie sich bereit erklären, uns Ihr Handy zu geben? Wir lassen beide Geräte forensisch untersuchen.",
                                      align: 'left',
                                  },
                                  {
                                      character: "Ralf König",
                                      text: "Natürlich. Ich habe nichts zu verbergen. Nehmen Sie’s – checken Sie, wann ich was aufgenommen habe. Das Original klingt völlig anders, da bin ich mir sicher.",
                                      align: 'right',
                                  }
                              ]
                          },
                          {
                              type: 'navigation',
                              buttonText: "Weiter",
                              targetChapterId: "tonspur-pruefen"
                          }
                        ]
                    },
                    {
                        text: "Herr König, welche Themen decken Sie aktuell in Ihrer journalistischen Arbeit ab?",
                        followUpContent: [
                          {
                              type: 'dialogue',
                              lines: [
                                  {
                                      character: "Ermittler:in",
                                      text: "Herr König, welche Themen decken Sie aktuell in Ihrer journalistischen Arbeit ab?",
                                      align: 'left',
                                  },
                                  {
                                      character: "Ralf König",
                                      text: "Vor allem politische Verflechtungen, Parteispenden, intransparente Förderstrukturen. Das Archiv war da eine wichtige Quelle – und Heller manchmal mein Türöffner.",
                                      align: 'right',
                                  }
                              ]
                          },
                          {
                              type: 'navigation',
                              buttonText: "Weiter",
                              targetSceneId: "scene-2-path-c-decision"
                          }
                        ]
                    },
                    {
                        text: "Wissen Sie noch, was genau Sie Heller in Ihrer Sprachnachricht sagen wollten – also im Original?",
                        followUpContent: [
                          {
                              type: 'dialogue',
                              lines: [
                                  {
                                      character: "Ermittler:in",
                                      text: "Wissen Sie noch, was genau Sie Heller in Ihrer Sprachnachricht sagen wollten – also im Original?",
                                      align: 'left',
                                  },
                                  {
                                      character: "Ralf König",
                                      text: "Ja. Ich hab gesagt, dass ich draußen warte und mich auf den Abend freue. Dass er sich nicht stressen soll, falls er noch in einem Gespräch steckt. Ganz neutral. Keine Anspielungen, kein Druck. Es war einfach eine nette Nachricht. Und ich weiß, dass sie harmlos war. Ich hab sie vor dem Absenden sogar nochmal angehört – aus Routine.",
                                      align: 'right',
                                  }
                              ]
                          },
                          {
                              type: 'navigation',
                              buttonText: "Weiter",
                              targetSceneId: "scene-2-path-c-decision"
                          }
                        ]
                    },
                ]
            }
        ]
    },
    {
        id: "scene-2-path-c-decision",
        title: "Glauben schenken oder nicht?",
        showTitleBanner: true,
        content: [
            {
                type: 'decision',
                question: "Das Gespräch mit Ralf König hat neue Fragen aufgeworfen. Die Audioaufnahme steht im Widerspruch zu seinen Aussagen – doch wo liegt die Wahrheit?",
                choices: [
                    {
                        text: "→ Tonspur forensisch prüfen lassen. Die Aufnahme auf Dr. Hellers Handy wird an eine spezialisierte Abteilung zur technischen Analyse übergeben.",
                        targetChapterId: "tonspur-pruefen"
                    },
                    {
                        text: "→ Königs Veröffentlichungen durchleuchten. Sie werfen einen genauen Blick auf Königs journalistische Arbeit: Artikel, Recherchen, mögliche Verbindungen zum Fall.",
                        targetChapterId: "veroeffentlichungen-durchleuchten"
                    }
                ]
            }
        ]
    },
  ]
}