# 🕵️‍♀️ Schuss im Archiv – Ein interaktiver Kriminalfall

![Project Banner](public/images/schuss-im-archiv-logo-f.png)

> **"Zweifel sind mächtiger als Beweise."** > Ein narratives Scrollytelling-Game über Deepfakes, Manipulation und die Wahrheit.

---

## 📖 Über das Projekt

**Schuss im Archiv** ist eine interaktive Web-Experience, die Spieler in die Rolle eines Ermittlers versetzt. Durch das Untersuchen von Tatorten, das Führen von Dialogen und das Analysieren von digitalen Spuren müssen sie einen komplexen Fall lösen.

Das Ziel des Projekts ist es, spielerisch Medienkompetenz zu vermitteln – insbesondere im Hinblick auf **Deepfakes** und **digitale Manipulation**.

Das Projekt entstand im Rahmen von **Digital Media B.Sc., 5. Fachsemester, Interactive Storytelling**.

🔗 **Live Demo:** [HIER DEN LINK ZUR GITHUB PAGES SEITE EINFÜGEN]

---

## ✨ Features

* **Scrollytelling:** Eine immersive Geschichte, die durch Scrollen vorangetrieben wird (powered by GSAP ScrollTrigger).
* **Interaktive Entscheidungen:** Deine Wahl beeinflusst den Verlauf und das Ende der Geschichte.
* **Beweis-System:** Finde Hinweise in "Point & Click"-artigen Untersuchungsszenen.
* **Persistenter Fortschritt:** Das Spiel merkt sich via LocalStorage, wo du warst und welche Beweise du gefunden hast.
* **Deepfake-Analyse:** Ein pädagogischer "Debriefing"-Modus am Ende erklärt die technischen Hintergründe der Täuschung.
* **Responsive Design:** Optimiert für Desktop (mit Hinweis-Overlay für Mobile-User).

---

## 🛠️ Tech Stack

Dieses Projekt wurde als statische Web-App entwickelt:

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animation:** [GSAP](https://greensock.com/gsap/) & ScrollTrigger
* **Sprache:** TypeScript
* **Deployment:** GitHub Pages (Static Export)

---

## 📂 Projektstruktur

Ein kurzer Überblick über die wichtigsten Ordner:

* `src/app`: Next.js App Router Pages (Home, Resolution, Impressum).
* `src/components/game`: Die Kern-Logikblöcke (DialogueView, InvestigationView, ChatBlock, etc.).
* `src/components/ui`: UI-Elemente wie Menüs, Buttons und Overlays.
* `src/content`: Hier liegen die Story-Inhalte (Kapitel-JSONs).
* `public`: Statische Assets (Bilder, Audio).

---

## 🎨 Credits & Team

**Konzept & Story:**
* Lotta Klinke
* Leonie Mäder

**Entwicklung & Umsetzung:**
* Marius Schmidt

**Design & Assets:**
* Simeon Lenz

**Asset-Erstellung (KI-Tools):**
** Widow.ai **
* Gemini Pro
* Nano Banana
* ChatGPT
* Runway
* Sora 2
* Dall-E
* ElevenLabs
* Kling
* Veo

**Dozenten:**
* Alexander Rossner
* Jens Friederich

---

## 🚀 Installation & Setup

Möchtest du das Projekt lokal ausführen?

1.  **Repository klonen:**
    ```bash
    git clone [https://github.com/](https://github.com/)serious-shift/schuss-im-archiv.git
    ```

2.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```

3.  **Development Server starten:**
    ```bash
    npm run dev
    ```
    Öffne `http://localhost:3000` in deinem Browser.

---

## ⚖️ Lizenz & Rechtliches

Der Code unterliegt der [MIT License](LICENSE). 
Die Story-Inhalte und spezifischen Grafiken unterliegen dem Urheberrecht der Ersteller.

[Impressum & Datenschutz](/src/app/impressum/page.tsx) sind im Spiel integriert.