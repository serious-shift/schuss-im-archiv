This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Structure

/
├── app/                                # Routing-Verzeichnis
│   ├── layout.tsx                      # Haupt-Layout der gesamten App
│   ├── globals.css                     # Globale Styles
│   ├── page.tsx                        # Startseite / Landing Page (z.B. mit Spielstart-Button)
│   │
│   └── chapter/                        # Ordner für alles, was mit Kapiteln zu tun hat
│       └── [chapterId]/                # Dynamische Route für jedes Kapitel (z.B. /chapter/1)
│           ├── page.tsx                # Die Hauptseite, die ein Kapitel rendert
│           └── layout.tsx              # (Optional) Ein spezielles Layout nur für die Kapitelansicht
│
├── public/                             # Statische Dateien (Bilder, Videos, Sounds)
│   ├── images/
│   └── audio/
│
├── src/                                # Dein Anwendungs-Code
│   ├── components/                     # Wiederverwendbare React-Komponenten
│   │   ├── ui/                         # Kleine, allgemeine UI-Elemente (Button, Card, etc.)
│   │   ├── game/                       # Spiel-spezifische Komponenten (Scene, Choice, DialogueBox)
│   │   └── layout/                     # Layout-Komponenten (Navbar, ChapterWrapper)
│   │
│   ├── content/                        # Der gesamte Spielinhalt (getrennt vom Code)
│   │   ├── chapters.ts                 # Definiert die Struktur aller Kapitel und Szenen
│   │   └── characters.ts               # Informationen zu den Charakteren
│   │
│   ├── lib/                            # Hilfsfunktionen und Utilities
│   │   ├── utils.ts                    # Allgemeine Helfer
│   │   └── useIsomorphicLayoutEffect.ts # Dein existierender Hook
│   │
│   ├── hooks/                          # Benutzerdefinierte React Hooks
│   │   └── useGameState.ts             # (Optional) Hook zur Verwaltung des Spielzustands
│   │
│   └── types/                          # TypeScript-Typdefinitionen
│       └── index.ts                    # z.B. type Chapter, type Scene, type Choice
│
├── package.json
└── tsconfig.json


Storyboard 
https://www.canva.com/design/DAG4ZYJripE/UzmZ5pl3tZqI2xwa-vAQIQ/edit