import { Chapter } from "@/src/types";

export const videoPruefenChapter: Chapter = {
  id: "video-pruefen",
  title: "Video forensisch prüfen",
  scenes: [
    {
      id: "scene-7-a-a-b",
      title: "Video forensisch prüfen",
      layout: "sequential",
      content: [
        {
          type: "narrative",
          text: "Das Videomaterial wird an die forensische IT-Abteilung übergeben. Nach eingehender Prüfung erhalten Sie einen technischen Analysebericht – und ein Ergebnis, das Zweifel nährt."
        },
        {
          type: "narrative",
          text: [
            "Forensisches Gutachten – Videoanalyse (Fitnessstudio, 19.11.2025) Geprüfte Dateien: 3 Überwachungsvideos (Eintritt, Innenbereich, Ausgang)",
            "Ergebnisse:",
            "- Metadatenabweichung: Timestamps der Dateien weichen geringfügig vom internen Kamerasystem ab",
            "- Unregelmäßigkeiten im Bewegungsmuster: KI-Tracking zeigt nur eine Person – keine zweite erkannt",
            "Frame-Glitches & Layering-Spuren: Hinweise auf nachträgliche Bildveränderungen",
            "Gesichtssignaturprüfung: Frame-by-frame Analyse zeigt Inkonsistenzen in der Beleuchtung auf Sarahs Gesicht – typisch für Deepfake-Komposition",
            "Schlussfolgerung:",
            "Die vorliegenden Videoaufnahmen sind höchstwahrscheinlich manipuliert. Es besteht der Verdacht auf eine Deepfake-Erstellung, um eine zweite Person im Video zu entfernen oder nie einzuarbeiten."
          ]
        },
        {
          type: "narrative",
          text: [
            "Ein beunruhigender Befund:",
            "Die Videos wurden offenbar manipuliert – gezielt, professionell, mit dem Ziel, den Eindruck zu erwecken, Lena Bergmann sei niemals im Fitnessstudio gewesen.",
            "Wer hatte das technische Know-how – und das Motiv – ein Alibi zu fälschen?",
          ]
        },
      ]
    },
    {
        id: "scene-7-a-a-b-1",
        title: "Fitness IT-Abteilung befragen",
        showTitleBanner: true,
        video: "/videos/scene-0-1-police_car_pov-clean.mp4",
        content: [
            {
                type: 'narrative',
                text: [
                    "Noch am selben Tag fahren Sie persönlich zum Fitnessstudio, um mit der IT-Leitung zu sprechen.",
                    "Ziel: Herausfinden, wer auf das Kamera-System zugreifen kann – und ob es Anhaltspunkte für eine externe Manipulation gibt.",
                ]
            },
            {
                type: 'navigation',
                buttonText: "Weiter",
                targetSceneId: "scene-0-1"
            }
        ]
    },
    {
        id: "scene-8-a-a-b",
        title: "Befragung: IT-Techniker Braun",
        showTitleBanner: true,
        layout: "dialogue",
        content: [
            {
                type: 'dialogue',
                lines: [
                    {
                        character: "Ermittler:in",
                        text: "Danke, dass Sie sich die Zeit nehmen. Wir haben ernstzunehmende Hinweise, dass Ihre Kameraaufnahmen vom gestrigen Nachmittag manipuliert wurden. Können Sie mir sagen, wer Zugriff auf das System hat?",
                        align: "left"
                    },
                    {
                        character: "IT-Techniker Braun",
                        text: "Das überrascht mich. Die Kameras laufen autark – die Aufnahmen werden lokal gespeichert und einmal täglich in die Cloud gespiegelt. Zugriff haben nur zwei Personen: Ich – und der beauftragte IT-Dienstleister der Sicherheitsfirma.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Gibt es Protokolle oder Logs, die Zugriffe auf das System dokumentieren?",
                        align: "left"
                    },
                    {
                        character: "IT-Techniker Braun",
                        text: "Ja, natürlich. Ich kann Ihnen die Remote-Zugriffsprotokolle zeigen… Einen Moment.",
                        align: "right"
                    },
                    {
                        character: "IT-Techniker Braun",
                        text: "Hier… gestern, 20:11 Uhr. Externer Zugriff über einen VPN-Tunnel. Die IP ist verschlüsselt – das war keiner von uns. Jemand hat sich offenbar von außerhalb in das System eingewählt. Und zwar nachdem die Originaldaten bereits hätten synchronisiert sein sollen.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "War das System zu diesem Zeitpunkt offen oder schwach gesichert?",
                        align: "left"
                    },
                    {
                        character: "IT-Techniker Braun",
                        text: "Nein, eigentlich nicht. Zwei-Faktor-Authentifizierung, individuelle Passwörter. Wenn jemand reinkam, dann wusste er, was er tut.",
                        align: "right"
                    },
                ]
            },
            {
                type: 'narrative',
                text: [
                    "Die Systemlogs zeigen einen externen Remote-Zugriff auf das Kamerasystem – ausgeführt um 20:11 Uhr, also deutlich nach der Tat.",
                    "Der Zeitpunkt und die Art des Zugriffs deuten auf eine gezielte Manipulation der Aufnahmen hin.",
                    "Aber wer hätte es nötig das Video so zu manipulieren, dass Lena nicht drin vor kommt? ",
                    "Vielleicht sollten wir nochmal mit Lena darüber sprechen."
                ]
            }
        ]
    },
    {
        id: "scene-9-a-b-b",
        title: "Verhör II: Lena Bergmann",
        layout: "dialogue",
        image: "/images/interrogations/Lena-Bergmann-sitzend.png",
        content: [
            {
                type: 'dialogue',
                lines: [
                    {
                        character: "Ermittler:in",
                        text: "Frau Bergmann – danke, dass Sie noch einmal gekommen sind. Wir haben mittlerweile das Videomaterial des Fitnessstudios analysiert. Ihre Freundin Sarah ist darauf zu sehen. Sie hingegen… nicht.",
                        align: "left"
                    },
                    {
                        character: "Lena Bergmann",
                        text: "Was? Das kann nicht sein … Wir waren zusammen da. Ich war mit ihr im Gym. Ich … ich weiß nicht, wie das sein kann.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Die Aufnahmen wurden manipuliert. Technische Forensik hat bestätigt: Es handelt sich um ein Deepfake. Jemand wollte gezielt Ihre Anwesenheit aus den Bildern entfernen.",
                        align: "left"
                    },
                    {
                        character: "Ermittler:in",
                        text: "...",
                        align: "left"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Frau Bergmann – wer hätte ein Interesse daran, Ihnen ein glaubwürdiges Alibi zu nehmen? Wer hätte Zugang zu entsprechender Technik – oder ein Motiv, Sie zu belasten?",
                        align: "left"
                    },
                    {
                        character: "Lena Bergmann",
                        text: "Ich weiß es nicht sicher… aber… Wenn jemand sowas wirklich geplant hat, dann… vielleicht Dr. Haas?",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Warum Haas?",
                        align: "left"
                    },
                    {
                        character: "Lena Bergmann",
                        text: "Sie wusste, dass ich die Karte verloren habe. Sie hat mich vorgestern sogar darauf angesprochen. Und… sie mochte mich nie besonders. Ich hatte das Gefühl, sie misstraut mir seit Wochen.",
                        align: "right"
                    },
                    {
                        character: "Lena Bergmann",
                        text: "...",
                        align: "right"
                    },
                    {
                        character: "Lena Bergmann",
                        text: "Und wenn es wirklich stimmt, dass sie Zugriff auf die Technik hat – sie war jahrelang Projektleiterin beim Digitalarchiv. Die IT-Abteilung kennt sie gut…",
                        align: "right"
                    },
                ]
            },
            {
                type: 'narrative',
                text: [
                    "Lena wirkt ehrlich erschüttert – und liefert neue Puzzleteile.",
                    "Doch ein Verdacht ist noch kein Beweis.",
                    "Was wusste Dr. Haas wirklich – und wie tief steckt sie in diesem Netz aus Spuren, Lügen und manipulierten Beweisen?"
                ]
            }
        ]
    },
    {
        id: "scene-10-a-b-b",
        title: "Verhör II: Dr. Petra Haas",
        layout: "dialogue",
        image: "/images/interrogations/Dr-Petra-Haas-sitzend.png",
        content: [
            {
                type: 'dialogue',
                lines: [
                    {
                        character: "Ermittler:in",
                        text: "Dr. Haas – es gibt neue Entwicklungen, die wir mit Ihnen besprechen müssen.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Natürlich. Ich habe nichts zu verbergen.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Uns liegt das Überwachungsvideo des Fitnessstudios vor, in dem Lena Bergmann am Abend des Mordes gewesen sein will. Doch die Aufnahmen zeigen ausschließlich ihre Freundin – Frau Bergmann ist nicht zu sehen.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Dann war sie wohl nicht dort. Das sollten Sie mit ihr klären.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Wir haben das Video forensisch prüfen lassen. Ergebnis: manipuliert. Ein externer Remote-Zugriff auf das Kamera-System – am Abend der Tat, um 20:11 Uhr.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Und… was hat das mit mir zu tun?",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Sie waren jahrelang verantwortlich für das Archivsystem – Sie kennen die Infrastruktur. Und: Frau Bergmann hat angegeben, dass Sie wussten, dass sie ihre Zugangskarte verloren hatte.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Ich bin nicht mehr im Projektteam. Und was Frau Bergmann behauptet… vielleicht will sie nur ablenken.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Frau Bergmann wurde mit einem persönlichen Zettel in Verbindung gebracht, der auf dem Schreibtisch des Opfers lag – obwohl sie diesen laut eigener Aussage in den Papierkorb im Aufenthaltsraum geworfen hatte.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Zufall. Vielleicht hat jemand ihn aufgelesen und hingelegt. Was weiß ich.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Oder jemand wollte gezielt eine falsche Spur legen. Sie wussten von dem Zettel, und Sie wussten, dass Frau Bergmann kein wasserdichtes Alibi hatte.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Sie unterstellen mir hier etwas. Ich habe keinen Grund, mich in sowas zu verwickeln.",
                        align: "right"
                    },
                    {
                        character: "Ermittler:in",
                        text: "Sie hätten die Mittel, den Zugang zur IT, und das Motiv – ein offener Disput mit dem Opfer.",
                        align: "left"
                    },
                    {
                        character: "Dr. Petra Haas",
                        text: "Ich sage nichts mehr ohne meinen Anwalt.",
                        align: "right"
                    },
                ]
            },
            {
                type: 'narrative',
                text: [
                    "Haas zieht sich zurück – doch der Druck wächst.",
                    "Um weitere Hinweise zu finden, rücken die Ermittler nun ihr Büro in den Fokus.",
                    "Gibt es dort Spuren, die zeigen, wie tief sie wirklich in den Fall verstrickt ist?"
                ]
            },
            {
                type: 'navigation',
                buttonText: "Büro durchsuchen",
                targetChapterId: "untersuchung-buero-haas"
            }
        ]
    }
  ]
}