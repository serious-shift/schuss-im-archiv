import { DialogueBlock } from "@/src/types";
import ContentBlock from "./ContentBlock";

type DialogueBlockViewProps = {
    block: DialogueBlock;
};

export default function DialogueBlockView({ block }: DialogueBlockViewProps) {
    const longestLine = block.lines.reduce((a, b) => a.text.length > b.text.length ? a : b, block.lines[0] || { text: '' }).text;

    return (
      <ContentBlock>
        <div className="relative dialogue-container">
          {/* Invisible element to set the height based on the longest line */}
          <p className="text-lg md:text-xl leading-relaxed opacity-0" aria-hidden="true">
            <span className="font-bold text-red-400">Platzhalter: </span>
            <span className="italic">{longestLine}</span>
          </p>

          {/* Actual dialogue lines positioned absolutely */}
          {block.lines.map((line, index) =>(
            <div key={index} className="dialogue-line absolute top-0 left-0 w-full opacity-0">
              <p className="text-lg md:text-xl leading-relaxed">
                <span className="font-bold text-red-400">{line.character}:</span>{" "}
                <span className="italic">{line.text}</span>
              </p>
            </div>
          ))}
        </div>
      </ContentBlock>
    );
}
