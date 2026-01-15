import { Chapter } from "@/src/types";

export const zeugenbefragungChapter: Chapter = {
  id: "zeugenbefragung",
  title: "Zeugenbefragung",
  scenes: [
    {
      id: "scene-5-a-a",
      title: "Zeugenbefragung",
      layout: "dialogue",
      image: "/images/scene-5/5AA-Zeugenbefragung.png",
      content: [
        {
          type: "dialogue",
          lines: [
            {
                character: "Ermittler:in",
                text: "Danke, dass Sie sich die Zeit nehmen, Frau Weber. Es geht um den gestrigen Abend – Ihre Freundin Lena Bergmann ist eine Schlüsselfigur in unseren Ermittlungen.",
                align: "left"
            },
            {
                character: "Sarah Weber",
                text: "Ja, natürlich. Ich helfe gern. Lena und ich waren den ganzen Nachmittag zusammen.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Können Sie mir genau sagen, wann Sie sich getroffen haben?",
                align: "left"
            },
            {
                character: "Sarah Weber",
                text: "Wir haben uns gegen 15:15 Uhr im Fitnessstudio getroffen. Sie ist mit dem Bus gekommen. Wir waren ungefähr bis 17:00 Uhr dort und sind danach noch was essen gegangen.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Waren Sie durchgehend zusammen?",
                align: "left"
            },
            {
                character: "Sarah Weber",
                text: "Ja. Durchgehend.",
                align: "right"
            },
            {
                character: "Ermittler:in",
                text: "Könnten Sie das belegen?",
                align: "left"
            },
            {
                character: "Sarah Weber",
                text: "Ja, wir haben direkt davor geschrieben. Ich kann Ihnen den Chat zeigen um 15:01 Uhr. Außerdem müsste das Fitnessstudio doch Kameras haben, die uns vor, während und nach dem Training zeigen sollten.",
                align: "right"
            },
        ],
        },
        {
            type: "chat",
            phoneImage: "/images/investigationAssets/Handy-front_prop.png",
            messages: [
                { id: "1", sender: "Lena", text: "Bin gerade los, Bus kommt in 2 Minuten.", time: "15:01 Uhr" },
                { id: "2", sender: "Sarah", text: "Ich bin schon da, steh vorm Eingang.", time: "15:02 Uhr" },
                { id: "3", sender: "Lena", text: "Top, bis gleich 😄", time: "15:03 Uhr" },
            ]
        },
        {
            type: "dialogue",
            lines: [
        
                {
                    character: "Ermittler:in",
                    text: "Danke. Wir werden zusätzlich die Überwachungskameras des Studios anfordern.",
                    align: "left"
                },
            ]
        },
        {
            type: "narrative",
            text: "Sarah Weber liefert ein scheinbar lückenloses Alibi für Lena Bergmann: Übereinstimmende Aussagen, ein plausibler Chatverlauf – und sogar der Hinweis auf Videoaufzeichnungen des Fitnessstudios. Doch stimmen ihre Angaben mit den objektiven Beweismitteln überein? Die Ermittler fordern die Aufnahmen an."
        }
      ]
    },
    {
        id: "scene-6-a-a-1",
        title: "Fitnessstudio Kameras",
        layout: "default",
        image: "/images/scene-6/6AA-Fitnessstudio-Kameras-Hintergrund.png",
        content: [
            {
                type: 'narrative',
                text: "Die angeforderten Aufnahmen des Fitnessstudios treffen ein – gefilmt von drei Kameras: Eingangsbereich, Trainingsfläche, Ausgang."
            }
        ]
    },
    {
        id: "scene-6-a-a-2",
        title: "Fitnessstudio Kamera 1",
        video: "/videos/6AA-Fitnessstudiokameras-Video-1-Eingang-clean.mp4",
        content: [
            {
                type: 'nullBlock'
            }
        ]
    },
    {
        id: "scene-6-a-a-3",
        title: "Fitnessstudio Kamera 2",
        video: "/videos/6AA-Fitnessstudiokameras-Video-2-Laufband-clean.mp4",
        content: [
            {
                type: 'nullBlock'
            }
        ]
    },
    {
        id: "scene-6-a-a-4",
        title: "Fitnessstudio Kamera 3",
        video: "/videos/6AA-Fitnessstudiokameras-Video-3-Ausgang-clean.mp4",
        content: [
            {
                type: 'nullBlock'
            }
        ]
    },
    {
        id: "scene-6-a-a-5",
        title: "Fitnessstudio Kameras",
        layout: "sequential",
        image: "/images/scene-6/6AA-Fitnessstudio-Kameras-Hintergrund.png",
        content: [
            {
                type: 'narrative',
                text: "Laut Aussage waren Lena und Sarah zur gleichen Zeit vor Ort. Doch auf allen drei Videos ist nur Sarah Weber zu sehen."
            },
            {
                type: 'narrative',
                text: [
                    "Die Überwachungsvideos des Fitnessstudios werfen neue Fragen auf:",
                    "Obwohl Sarah Weber behauptet, sie und Lena seien gemeinsam dort gewesen, zeigen die Aufnahmen nur Sarah allein.",
                    "Ein Widerspruch, der nicht zu ignorieren ist.",
                ]
            },
            {
                type: "decision",
                question: "Was möchtest du tun?",
                choices: [
                    {
                        text: "→ Sie konfrontieren Lena Bergmann mit den Aufnahmen. Wie wird sie auf den offensichtlichen Widerspruch reagieren?",
                        title: "Lena zur Diskrepanz konfrontieren",
                        targetChapterId: "konfrontation-lena-bergmann"
                    },
                    {
                        text: "→ Sie geben das Videomaterial an eine forensische Abteilung zur Echtheitsprüfung weiter.",
                        title: "Video forensisch prüfen lassen",
                        targetChapterId: "video-pruefen"
                    }
                ]
            }
        ]
    },
  ]
}