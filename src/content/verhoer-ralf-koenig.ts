import { Chapter } from "@/src/types";

export const verhoerRalfKoenigChapter: Chapter = {
  id: "verhoer-ralf-koenig",
  title: "Verhör: Ralf König",
  scenes: [
    {
        id: "scene-2-path-c",
        title: "Verhör: Ralf König (Freund & Journalist)",
        image: '/images/Verhoerraum.png',
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
                        targetSceneId: "scene-2-path-c-q1"
                    },
                    {
                        text: "Herr König, welche Themen decken Sie aktuell in Ihrer journalistischen Arbeit ab?",
                        targetSceneId: "scene-2-path-c-q2"
                    },
                    {
                        text: "Wissen Sie noch, was genau Sie Heller in Ihrer Sprachnachricht sagen wollten – also im Original?",
                        targetSceneId: "scene-2-path-c-q3"
                    },
                ]
            }
        ]
    },
  ]
}