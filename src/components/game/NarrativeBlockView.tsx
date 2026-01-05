import { NarrativeBlock } from "@/src/types";
import ContentBlock from "./ContentBlock";

type NarrativeBlockViewProps = {
    block: NarrativeBlock;
};

export default function NarrativeBlockView({ block }: NarrativeBlockViewProps) {
    const texts = Array.isArray(block.text) ? block.text : [block.text];

    return (
        <ContentBlock speaker="Erzähltext">
            <div id="narrative-scroll-container" className="h-64 overflow-hidden relative">
                <div id="narrative-texts" className="absolute top-0 left-0 w-full">
                    {texts.map((text, index) => (
                        <p key={index} className="text-lg md:text-xl leading-relaxed mb-6 last:mb-0 narrative-paragraph">
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </ContentBlock>
        
    )
}