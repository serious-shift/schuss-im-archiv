import { DialogueLine } from "@/src/types";
import ContentBlock from "./ContentBlock";

type DialogueBlockViewProps = {
    line: DialogueLine;
};

export default function DialogueBlockView({ line }: DialogueBlockViewProps) {
    return (
      <ContentBlock speaker={line.character}>
        <p className="text-lg md:text-xl leading-relaxed">
            {line.text}
        </p>
      </ContentBlock>
    );
}
