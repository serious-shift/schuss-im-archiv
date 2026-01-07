import { DecisionBlock } from '@/src/types';

type DecisionBlockViewProps = {
    block: DecisionBlock;
    onNavigate: (targetSceneId: string) => void;
};

export default function DecisionBlockView({ block, onNavigate }: DecisionBlockViewProps) {
    // determine display style
    const isQuestionStyle = block.displayAs === 'question';
    const isImageTileStyle = block.choices.some(choice => choice.image);

    const backgroundStyle = block.backgroundImage
        ? { backgroundImage: `url(${block.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        : undefined;

    const combinedStyle = {
        // Setze IMMER eine Hintergrundfarbe. 
        // RGBA: 0, 0, 0 ist Schwarz. 0.7 ist 70% Deckkraft.
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        borderRadius: '0.5rem', // Entspricht rounded-lg
        // Füge das Hintergrundbild hinzu, WENN es existiert
        ...(block.backgroundImage && { 
            backgroundImage: `url(${block.backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
        })
    };

    if (isImageTileStyle) {
        return (
            <div className="text-center p-4 space-y-8 opacity-100 bg-black" style={combinedStyle}>
                <p className="text-xl italic text-gray-300">
                    {block.question}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {block.choices.map((choice, index) => (
                        <button
                            key={index}
                            onClick={() => onNavigate(choice.targetSceneId)}
                            className="relative aspect-square bg-gray-900/50 border-2 border-gray-700 rounded-lg overflow-hidden group transition-all duration-300  hover:border-red-500 hover:scale-105 focus:outline-none focus:border-red-500"
                            aria-label={choice.text}
                        >
                            {choice.image && (
                                <img
                                    src={choice.image}
                                    alt={choice.text}
                                    className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            )}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors duration-300">
                                <span className="text-white font-bold text-center p-2">{choice.text}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    const containerClasses = isQuestionStyle
        ? "text-left p-4 space-y-3"
        : "text-center p-4 space-y-6";

    return (
        <div className={containerClasses} style={combinedStyle}>
            <p className="text-xl italic text-gray-300">
                {block.question}
            </p>
            <div className={isQuestionStyle ? "flex flex-col items-start gap-2" : "flex flex-col md:flex-row justify-center gap-4"}>
                {block.choices.map((choice, index) => (
                    <button
                        key={index}
                        onClick={() => onNavigate(choice.targetSceneId)}
                        className="bg-gray-800 hover:bg-red-700 border border-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex-1 text-left"
                    >
                        {choice.text}
                    </button>
                ))}

            </div>
        </div>
    )
}