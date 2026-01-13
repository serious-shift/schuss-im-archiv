import { DecisionBlock, Choice, SceneContent } from '@/src/types';
import { useRouter } from 'next/navigation';

type DecisionBlockViewProps = {
    block: DecisionBlock;
    onNavigate: (targetSceneId: string) => void;
    onDecision?: (followUpContent: SceneContent[]) => void;
};

export default function DecisionBlockView({ block, onNavigate, onDecision }: DecisionBlockViewProps) {
    const router = useRouter();

    const handleChoiceClick = (choice: Choice) => {
        if (choice.targetChapterId) {
            router.push(`/chapter/${choice.targetChapterId}`);
        } else if (choice.targetSceneId) {
            onNavigate(choice.targetSceneId);
        } else if (choice.followUpContent && onDecision) {
            onDecision(choice.followUpContent);
        } else {
            console.warn('Choice has no targetSceneId or targetChapterId:', choice);
            return;
        }
    }

    // determine display style
    const isQuestionStyle = block.displayAs === 'question';
    const isImageTileStyle = block.choices.some(choice => choice.image);

    const backgroundStyle = block.backgroundImage
        ? { backgroundImage: `url(${block.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        : undefined;

    const combinedStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        ...(block.backgroundImage && { 
            backgroundImage: `url(${block.backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
        })
    };

    if (isImageTileStyle) {
        return (
            <div className="h-full text-center space-y-8 flex flex-col overflow-hidden" style={combinedStyle}>
                <div className="bg-red-500 w-full flex flex-col p-4 justify-center items-center">
                    <h3>
                        {block.question}
                    </h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 h-full flex flex-col">
                    {block.choices.map((choice, index) => (
                        <button
                            key={index}
                            onClick={() => handleChoiceClick(choice)}
                            className="h-full relative bg-gray-900/50 border-2 border-gray-700 rounded-lg overflow-hidden group transition-all duration-300  hover:border-red-500 hover:scale-105 hover:z-10 focus:outline-none focus:border-red-500"
                            aria-label={choice.text}
                        >
                            {choice.image && (
                                <img
                                    src={choice.image}
                                    alt={choice.text}
                                    className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 object-cover group-focus:opacity-100"
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
            <div className={isQuestionStyle ? "flex flex-col items-start gap-2" : "flex flex-col justify-center gap-4"}>
                {block.choices.map((choice, index) => (
                    <button
                        key={index}
                        onClick={() => handleChoiceClick(choice)}
                        className="bg-gray-800 hover:bg-red-700 border border-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex-1 text-left"
                    >
                        {choice.text}
                    </button>
                ))}

            </div>
        </div>
    )
}