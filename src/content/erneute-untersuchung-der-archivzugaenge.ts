import { Chapter } from "@/src/types";

export const erneuteUntersuchungDerArchivzugaengeChapter: Chapter = {
    id: "erneute-untersuchung-der-archivzugaenge",
    title: "Archivzugänge neu prüfen",
    scenes: [
        {
            id: "scene-4-a-b",
            title: "Archivzugänge neu prüfen",
            layout: "sequential",
            showTitleBanner: true,
            content: [
                {
                    type: "analysis",
                    title: "Manuelle Zugangserteilung",
                    items: [
                        { label: 'Manuelle Zugangserteilung', value: '', subItems: ['Mitarbeiter: Lena Bergmann'] },
                        { label: 'Datum', value: '3 Tage vor dem Vorfall' },
                        { label: 'Zugangscode', value: '949089' },
                        { label: 'Begründung', value: 'Verlust der Schlüsselkarte' },
                        { label: 'Status', value: 'Ersatzkarte in Bearbeitung' },
                    ]
                },
                {
                    type: "narrative",
                    text: [
                        "Drei Tage vor der Tat wurde Lena Bergmann vorübergehend ein Zugangscode zugeteilt – ausgerechnet der, mit dem am Abend des Mordes das Archiv betreten wurde.",
                        "Begründung: „Verlust der Schlüsselkarte“",
                        "Status: „Neue Karte wird ausgestellt“"
                    ]
                }
            ]
        },
        {
            id: "scene-4-a-b-conclusion",
            title: "Schlussfolgerung",
            layout: "default",
            showTitleBanner: true,
            content: [
                {
                    type: "narrative",
                    text: [
                        "Der Zugangscode 949089 wurde eindeutig Lena Bergmann zugewiesen – ausgestellt nur wenige Tage vor der Tat.",
                        "Damit ist klar: Sie hat das Archiv betreten.",
                        "Zeit für eine erneute Befragung."
                    ]
                }
            ]
        },
        {
            id: "scene-4-a-b-interrogation",
            title: "Verhör: Lena Bergmann (Praktikantin)",
            layout: "dialogue",
            showTitleBanner: true,
            content: [
                {
                    type: "narrative",
                    text: [
                        "Lena Bergmann, 21, ist Praktikantin im Staatsarchiv. Sie arbeitete in Hellers Abteilung und die Schriftuntersuchung ergab, dass mit ihrer Handschrift der Zettel geschrieben wurde.",
                        "Zettel: “Heute Abend ist Schluss. Ich halte das Versteckspiel nicht mehr aus.“",
                    ]
                },
                {
                    type: "dialogue",
                    lines: [
                        {
                            character: "Ermittler:in",
                            text: "Guten Tag, Frau Bergmann. Danke, dass Sie heute hier sind. Wir müssen einige Punkte zu den gestrigen Ereignissen im Staatsarchiv klären. Das Zutrittssystem hat Ihre Schlüsselkarte gestern um 19:00 Uhr registriert. Können Sie bitte schildern, wie Ihr gestriger Tag verlaufen ist?",
                            align: "left",
                        },
                        {
                            character: "Lena Bergmann",
                            text: "Ja … klar. Ich war gestern nur bis etwa 15:00 Uhr im Archiv. Ich hatte meine Aufgaben erledigt und bin dann gegangen – früher als sonst. Um 15:30 Uhr habe ich mich mit einer Freundin im Fitnessstudio getroffen. Wir waren dort bis ungefähr 19:30 Uhr. Danach sind wir noch gemeinsam etwas essen gegangen.",
                            align: "right",
                        },
                        {
                            character: "Ermittler:in",
                            text: "Ihre Freundin könnte das bestätigen?",
                            align: "left",
                        },
                        {
                            character: "Lena Bergmann",
                            text: "Ja. Natürlich. Wir waren die ganze Zeit zusammen. Sie weiß jetzt auch schon, dass Sie wahrscheinlich mit ihr sprechen wollen.",
                            align: "right",
                        },
                        {
                            character: "Ermittler:in",
                            text: "Trotzdem wurde um 19:00 Uhr Ihre Schlüsselkarte benutzt, um das Archiv zu betreten. Wie erklären Sie sich das?",
                            align: "left",
                        },
                        {
                            character: "Lena Bergmann",
                            text: "Weil ich die Karte schon vor drei Tagen verloren habe. Ich war sicher, dass sie irgendwo im Aufenthaltsraum oder bei meinen Unterlagen liegt. Aber sie blieb verschwunden – peinlich, ich weiß. Deshalb habe ich die letzten Tage nur mit dem manuellen Zugangscode (949089) gearbeitet. Wenn Sie die Protokolle prüfen, sehen Sie das auch: Immer wenn ich morgens und mittags da war, ist der Code eingetragen.",
                            align: "right",
                        },
                        {
                            character: "Ermittler:in",
                            text: "Haben Sie irgendjemandem gemeldet, dass Ihre Karte fehlt?",
                            align: "left",
                        },
                        {
                            character: "Lena Bergmann",
                            text: "Ja. Dem Archivadministrator. Als ich gemerkt habe, dass die Karte wirklich weg ist, habe ich es gemeldet. Er hat mir daraufhin einen temporären, manuellen Zugangscode ausgestellt.Der Code war ausdrücklich als Übergangslösung gedacht – bis eine neue Karte ausgestellt wird. Dr. Haas wusste davon, weil sie als stellvertretende Archivleitung Zugriff auf diese Meldungen hat.",
                            align: "right",
                        },
                        {
                            character: "Ermittler:in",
                            text: "Dieser Zettel lag gestern Abend auf dem Schreibtisch von Dr. Heller: ‚Heute Abend ist Schluss. Ich halte das Versteckspiel nicht mehr aus.‘ Die Handschrift ist eindeutig Ihre. Können Sie dazu Stellung nehmen?",
                            align: "left",
                        },
                        {
                            character: "Lena Bergmann",
                            text: "Ja … der ist von mir. Aber ich hab den zerknüllt und in den Papierkorb im Aufenthaltsraum geworfen! Ich war gestern Nachmittag so … emotional überfordert. Das sollte niemand sehen. Ich war nicht mehr in seinem Büro – wirklich nicht.",
                            align: "right",
                        },
                        {
                            character: "Ermittler:in",
                            text: "Wie erklären Sie sich, dass der Zettel auf dem Schreibtisch von Dr. Heller gefunden wurde?",
                            align: "left",
                        },
                        {
                            character: "Lena Bergmann",
                            text: "Wie erklären Sie sich, dass der Zettel auf dem Schreibtisch von Dr. Heller gefunden wurde?",
                            align: "right",
                        },
                        {
                            character: "Ermittler:in",
                            text: "Was meinten Sie mit ‚Versteckspiel‘?",
                            align: "left",
                        },
                        {
                            character: "Lena Bergmann",
                            text: "Es war etwas Persönliches. Aber es hat nichts mit seiner Arbeit zu tun – und erst recht nicht mit … dem, was passiert ist. Mehr möchte ich dazu nicht sagen.",
                            align: "right",
                        },
                        {
                            character: "Ermittler:in",
                            text: "Nur um es festzuhalten: Sie waren ab 15:00 Uhr nicht mehr im Archiv, Ihre Schlüsselkarte fehlt seit drei Tagen, und Sie waren zum Zeitpunkt des Eintrags in die Logfiles nachweislich im Fitnessstudio?",
                            align: "left",
                        },
                        {
                            character: "Lena Bergmann",
                            text: "Ja. Das ist korrekt.",
                            align: "right",
                        },
                        {
                            character: "Ermittler:in",
                            text: "Gut. Danke für Ihre Offenheit, Frau Bergmann. Wir werden auf Sie zurückkommen.",
                            align: "left",
                        },
                    ]
                },
                {
                    type: "navigation",
                    buttonText: "Alibi untersuchen",
                    targetChapterId: "-"
                }
            ]
        }
    ]
}