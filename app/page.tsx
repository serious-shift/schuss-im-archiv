import SceneSection from "@/src/components/SceneSection";

export default function Home() {
  return (
    <main className="bg-neutral-950">
      <SceneSection
        id="intro"
        title="Der Fall beginnt"
        text="Du wirst zu einem Hinterhof gerufen. Ein Zeuge hat etwas Verdächtiges gesehen und Lolo stinkt."
      />
      <SceneSection
        id="scene-1"
        title="Erste Spur"
        text="Eine Notiz, halb durchnässt vom Regen. Nur ein Name ist lesbar und außerdem stinkt Simon."
      />
      <SceneSection
        id="scene-2"
        title="Wer lügt?"
        text="Du musst entscheiden, wen du zuerst befragst. Das beeinflusst den Verlauf, aber Lotta stinkt auch."
      />
    </main>
  );
}