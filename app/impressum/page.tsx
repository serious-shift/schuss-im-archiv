import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300 p-6 md:p-12 font-sans">
      <div className="max-w-3xl mx-auto space-y-12">
        
        <Link 
            href="/" 
            className="inline-flex items-center text-red-500 hover:text-red-400 font-bold uppercase tracking-widest text-sm transition-colors"
        >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Zurück zum Hauptmenü
        </Link>

        {/* --- IMPRESSUM --- */}
        <section className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Impressum</h1>
            
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">Angaben gemäß § 5 TMG</h2>
                <p>
                    [Marius] [Schmidt]<br />
                    [Am Gonsenheimer Spieß] [19]<br />
                    [55122] [Mainz]
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">Kontakt</h2>
                <p>
                    E-Mail: [marius.schmidt@students.hs-mainz.de]<br />
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                    [Marius] [Schmidt]<br />
                    [Am Gonsenheimer Spieß] [19]<br />
                    [55122] [Mainz]
                </p>
            </div>

            <div className="pt-4 text-sm text-gray-500 border-t border-gray-800">
                <p><strong>Haftungsausschluss:</strong> Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
            </div>
        </section>

        <div className="h-px w-full bg-gray-800" />

        {/* --- DATENSCHUTZ --- */}
        <section className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Datenschutzerklärung</h1>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-medium text-white">Allgemeine Hinweise</h3>
                <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">2. Hosting</h2>
                <p>
                    Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                    <strong>GitHub Inc.</strong><br />
                    88 Colin P Kelly Jr St<br />
                    San Francisco, CA 94107<br />
                    USA<br />
                    (via GitHub Pages)<br />
                    <br />
                    Der Anbieter erhebt in sogenannten Server-Log-Dateien automatisch Informationen, die Ihr Browser automatisch an uns übermittelt, um die Sicherheit und Stabilität der Website zu gewährleisten. Dies sind unter anderem:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse (ggf. anonymisiert)</li>
                </ul>
                <p>
                    Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">3. Speicherung des Spielstands (Local Storage)</h2>
                <p>
                    Diese Anwendung ist ein interaktives Spiel, das Ihren Fortschritt speichert, damit Sie das Spiel nicht bei jedem Seitenaufruf neu starten müssen.
                </p>
                <p>
                    Hierfür verwenden wir den sogenannten <strong>Local Storage</strong> Ihres Webbrowsers. Dabei wird eine Textdatei auf Ihrem Endgerät gespeichert (`visitedScenes`), die Informationen darüber enthält, welche Kapitel Sie bereits gesehen haben.
                </p>
                <p>
                    <strong>Wichtig:</strong> Diese Daten verbleiben ausschließlich auf Ihrem Gerät. Sie werden zu keinem Zeitpunkt an unsere Server oder an Dritte übermittelt. Wenn Sie Ihre Browserdaten löschen oder den "Fall neu starten" Button im Menü nutzen, werden diese Daten entfernt.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">4. Ihre Rechte</h2>
                <p>
                    Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                </p>
            </div>
        </section>

      </div>
    </main>
  );
}