import { Chapter } from "@/src/types";

export const veroeffentlichungenDurchleuchtenChapter: Chapter = {
  id: "veroeffentlichungen-durchleuchten",
  title: "Veröffentlichungen durchleuchten",
  scenes: [
    {
        id: "scene-3-c-b-veröffentlichungen-durchleuchten",
        title: "Recherche zu Ralf Königs Veröffentlichungen",
        image: "/schuss-im-archiv/images/scene-5/5CBB-verdeckte-geldfluesse-heller-wankt.png",
        showTitleBanner: true,
        content: [
            {
                type: 'narrative',
                text: [
                    "Sie durchsuchen das digitale Archiv nach Veröffentlichungen von Ralf König. In den letzten Jahren hat er sich einen Namen gemacht – als investigativer Journalist mit einem Gespür für politische Skandale. Seine Spezialität: Undichte Stellen in Behörden.",
                    "In einem Artikel von vor zwei Monaten schreibt er: „Die Wahrheit findet immer einen Weg. Wenn sie im Archiv vergraben liegt, muss man sie eben ausbuddeln.",
                    "In mehreren Artikeln spekulierte er über verdeckte Geldflüsse zwischen politischen Akteuren und sogenannten „Bürgerinitiativen“ – oft ohne vollständige Belege, aber mit hohem medialem Druck.",
                    "Ein brisanter Beitrag vom Vortag des Mordes trägt den Titel: „Dossier H: Kommt bald alles ans Licht?“ Der Text endet mit der Andeutung, dass er im Besitz neuer interner Dokumente sei – möglicherweise aus dem Archiv."
                ]
            },
            {
                type: 'navigation',
                buttonText: "Weiter",
                targetSceneId: "scene-4-c-b-dialogue"
            }
        ]
    },
    {
        id: "scene-4-c-b-dialogue",
        title: "Verhör: Ralf König (Freund & Journalist) II",
        showTitleBanner: true,
        image: '/schuss-im-archiv/images/interrogations/Ralf-König-sitzend-verhörraum.png',
        layout: 'dialogue',
        content: [
            {
                type: 'narrative',
                text: [
                    "Die Analyse von Ralf Königs Artikeln hat neue Fragen aufgeworfen. Seine Texte sind investigativ, pointiert – manchmal provokant. Zwischen den Zeilen: Hinweise auf interne Quellen, vertrauliche Informationen und eine Mission, unbequeme Wahrheiten ans Licht zu bringen.",
                    "Doch ist er ein unbequemer Aufklärer? Oder ein getarnter Drahtzieher in einem Spiel mit hohen Einsätzen? Zeit für ein weiteres Gespräch."
                ]
            },
            {
                type: 'dialogue',
                lines: [
                    {
                        character: "Ermittler:in",
                        text: "Herr König, nach unserem letzten Gespräch haben wir uns Ihre bisherigen Veröffentlichungen angesehen.",
                        align: 'left',
                    },
                    {
                        character: "Ralf König",
                        text: "Ich nehme an, das soll mich jetzt verdächtig machen.",
                        align: 'right',
                    }, 
                    {
                        character: "Ermittler:in",
                        text: "Sie haben in der Vergangenheit sensible Daten veröffentlicht – Mails von Beamten, interne Unterlagen. Teilweise mit klarer politischer Schlagkraft.",
                        align: 'left',
                    },
                    {
                        character: "Ralf König",
                        text: "Ich bin Journalist. Mein Job ist es, Dinge aufzudecken, nicht sie zu verstecken.",
                        align: 'right',
                    },
                    {
                        character: "Ermittler:in",
                        text: "Sie haben auch geschrieben: ‚Manchmal muss man Druck machen, um die Wahrheit freizusetzen.",
                        align: 'left',
                    },
                    {
                        character: "Ralf König",
                        text: "Ja. Druck – im Sinne von Öffentlichkeit. Transparenz. Nicht … Gewalt.",
                        align: 'right',
                    },
                    {
                        character: "Ermittler:in",
                        text: "Und dieser Eintrag in Ihrem Notizbuch – ‚H. weiß mehr. Wenn er blockiert – Plan B?‘ – was hat es damit auf sich?",
                        align: 'left',
                    },
                    {
                        character: "Ralf König",
                        text: "Das ist aus dem Zusammenhang gerissen. ‚Plan B‘ hieß: eine andere Quelle finden. Heller hat sich zunehmend zurückgezogen. Ich dachte, er steigt aus.",
                        align: 'right',
                    },
                    {
                        character: "Ermittler:in",
                        text: "Und wenn er tatsächlich aussteigen wollte? Hätten Sie versucht, ihn doch noch zu zwingen?",
                        align: 'left',
                    },
                    {
                        character: "Ralf König",
                        text: "Ich zwinge niemanden. Ich überzeuge. Ich kläre auf. Wenn er nicht mehr wollte – dann wäre das sein gutes Recht gewesen.",
                        align: 'right',
                    },
                    {
                        character: "Ermittler:in",
                        text: "Sie wussten, dass Heller Akten zu Parteispenden gesammelt hat?",
                        align: 'left',
                    },
                    {
                        character: "Ralf König",
                        text: "Natürlich. Wir haben zusammen daran gearbeitet. Aber er war vorsichtig. Vielleicht zu vorsichtig.",
                        align: 'right',
                    },
                    {
                        character: "Ermittler:in",
                        text: "Sie hätten viel zu gewinnen gehabt – mit der Veröffentlichung. Ruhm. Aufmerksamkeit. Vielleicht auch … ein Comeback als Starreporter?",
                        align: 'left',
                    },
                    {
                        character: "Ralf König",
                        text: "Wenn ich jemanden hätte töten wollen – glauben Sie wirklich, ich hätte mir vorher ein perfektes Motiv in mein Notizbuch geschrieben?",
                        align: 'right',
                    }
                ]
            },
            {
                type: 'navigation',
                buttonText: "Weiter",
                targetSceneId: "scene-4-c-b-decision"
            }
        ]
    },
    {
        id: "scene-4-c-b-decision",
        title: "Und was jetzt?",
        image: "/schuss-im-archiv/images/interrogations/Ralf-Koenig-stehend-verhoerraum.png",
        content: [
            {
                type: 'info',
                text: "Ralf König zeigt sich selbstbewusst – fast trotzig. Seine Aussagen wirken schlüssig – aber auch kalkuliert. Ist er wirklich unschuldig? Oder einfach ein Profi darin, Wahrheiten zu drehen?"
            },
            {
                type: 'decision',
                question: "Wie entscheidest du?",
                choices: [
                    {
                        text: "→ Tonspur forensisch prüfen lassen. Die Aufnahme auf Dr. Hellers Handy wird an eine spezialisierte Abteilung zur technischen Analyse übergeben.",
                        title: "König glauben schenken",
                        targetSceneId: "tonspur-pruefen"
                    },
                    {
                        text: "→ Königs Veröffentlichungen durchleuchten. Sie werfen einen genauen Blick auf Königs journalistische Arbeit: Artikel, Recherchen, mögliche Verbindungen zum Fall.",
                        title: "Vertiefte Analyse seiner Veröffentlichungen",
                        targetChapterId: "tiefere-analyse-veroeffentlichungen"
                    }
                ]
            },

        ]
    },
  ]
}