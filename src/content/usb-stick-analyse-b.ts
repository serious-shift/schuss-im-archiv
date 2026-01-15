import { Chapter } from "@/src/types";

export const USBStickAnalysePathBChapter: Chapter = {
  id: "usb-stick-analyse-b",
  title: "USB-Stick analysieren lassen",
  scenes: [
    {
      id: "scene-6-a-a-a-b",
      title: "USB-Stick analysieren lassen",
      showTitleBanner: true,
      image: "/schuss-im-archiv/images/scene-5/5AAA-USB-Stick-analysieren-lassen.png",
      layout: "sequential",
      content: [
        {
          type: "narrative",
          text: [
            "Analyse Ergebnisse:",
            "- Die Datei msg_koenig_final.wav entspricht 1:1 der Deepfake-Audiodatei auf Hellers Handy.",
            "- Die Datei wurde laut Exportlog.txt um 16:41 Uhr exportiert.",
            "- Bearbeitungsdateien zeigen, dass R. Königs Stimme aus 4 älteren Interviews rekonstruiert wurde.",
            "- Das Profil im Ordner wurde unter dem Benutzernamen „P.HAAS_legacy“ angelegt."
          ]
        },
        {
            type: "narrative",
            text: [
                "Der Stick ist ein digitaler Tatort.",
                "Er enthält die Spur zu allem: zur Software, zur Stimme, zur Vorbereitung.",
                "Und zum Absender.",
                "Ein Benutzername taucht auf – „P.HAAS_legacy“. Sieht aus als müsstest du nochmal mit Haas reden"
            ]
        },
        {
          type: "navigation",
          buttonText: "Petra Haas konfrontieren",
          targetSceneId: "scene-7-a-a-a"
        }
      ]
    },
    {
        id: "scene-7-a-a-a",
        title: "Verhör: Dr. Petra Haas",
        showTitleBanner: true,
        layout: "dialogue",
        image: "/schuss-im-archiv/images/interrogations/Dr-Petra-Haas-sitzend.png",
        content: [
            {
                type: "dialogue",
                lines: [
                    {
                        character: "Ermittler:in",
                        text: "Frau Dr. Haas, wir müssen noch einmal mit Ihnen sprechen. Dieses Mal geht es um ganz konkrete Spuren.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Ich habe bereits mit Ihnen gesprochen. Was gibt es denn jetzt noch?",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Die manipulierte Audiodatei, die an Dr. Hellers Handy geschickt wurde, stammt von einem USB-Stick. Diesen Stick haben wir heute Vormittag in Ihrem Büro gefunden.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "In meinem Büro? Das kann nicht sein. Ich bewahre keine privaten Sticks auf.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Und doch war er dort. In Ihrer Schreibtischschublade. Noch interessanter: Die Datei wurde am Vortag um 16:41 Uhr vom Admin-PC aus an Dr. Heller übertragen. Auf der Eingabetaste, mit der dieser Transfer abgeschlossen wurde, befindet sich ein klarer Fingerabdruck von Ihnen – frisch und eindeutig zuordenbar.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Ich habe den Rechner nicht genutzt. Ich weiß nicht, wie mein Fingerabdruck dorthin kommen soll.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Sie bestreiten also, den Stick zu kennen, den Rechner genutzt zu haben und irgendetwas mit der Übertragung zu tun zu haben?",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Korrekt. Ich weiß nicht, wie diese Datei auf das Handy von Herrn Heller gelangt ist – und ich habe nichts damit zu tun.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Auch wenn alle Spuren zu Ihnen führen?",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Dann sollten Sie sich fragen, wer ein Interesse daran hat, dass es so aussieht.",
                        align: "right"
                    },
                ]
            },
            {
                type: "narrative",
                text: [
                    "Dr. Haas streitet alles ab. Kein Eingeständnis, kein Widerspruch – nur eine Mauer aus Worten. Du hast sie mit den bisherigen Beweisen konfrontiert – doch sie bleibt unbeeindruckt.",
                    "Ein letzter Blick durchs Büro.",
                    "Und da ist sie wieder: die leere Waffenbox.",
                    "Nur eine Artikelnummer auf dem Etikett – fast übersehen.",
                    "Vielleicht ist genau das der Schlüssel: Welcher Waffentyp gehörte in diese Kiste? Woher stammt sie? Und wer hatte Zugriff?",
                ]
            },
            {
                type: "navigation",
                buttonText: "Artikelnummer prüfen",
                targetChapterId: "waffenbox-pruefen"
            }
        ] 
    }
  ]
}