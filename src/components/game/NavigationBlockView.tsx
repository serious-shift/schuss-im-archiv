"use client";

import { NavigationBlock } from '@/src/types';
import { useRouter } from 'next/navigation';

type NavigationBlockViewProps = {
    block: NavigationBlock;
    onNavigate: (targetSceneId: string) => void;
};

export default function NavigationBlockView({ block, onNavigate }: NavigationBlockViewProps) {
    const router = useRouter();

    const handleNavigationClick = () => {
        if (block.targetChapterId) {
            router.push(`/chapter/${block.targetChapterId}`);
        } else if (block.targetSceneId) {
            onNavigate(block.targetSceneId);
        }
    };

    return (
        <div className="anim-interactive inline-block pt-4 pointer-events-auto">
            <button
                onClick={() => handleNavigationClick()}
                className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
            >
                {block.buttonText}
            </button>
        </div>
    )
}