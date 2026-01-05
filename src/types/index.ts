export type Scene = {
    id: string;
    title: string;
    showTitleBanner?: boolean;
    image?: string;
    video?: string;
    content: SceneContent[];
}

export type Chapter = {
    id: string; 
    title: string; 
    scenes: Scene[];
}

export type SceneContent = NarrativeBlock | DialogueBlock | NavigationBlock | nullBlock | InvestigationBlock | DecisionBlock;

export type InvestigationBlock = {
    type: 'investigation';
    backgroundImage: string;
    hotspots: Hotspot[];
}

export type Hotspot = {
    id: string;
    title: string;
    description: string;
    image: string;
    required: boolean;
    position: {
        x: number;
        y: number;
    }
}

export type NavigationBlock = {
    type : 'navigation';
    buttonText: string;
    targetSceneId: string;
}

export type nullBlock = {
    type: "nullBlock";
}

export type NarrativeBlock = {
    type: "narrative";
    text: string;
}

export type DialogueBlock = {
    type: "dialogue";
    lines: DialogueLine[];
}

export type DialogueLine = {
    character: string;
    text: string;
}

export type Choice = {
    text: string;
    targetSceneId: string;
    image?: string;
};

export type DecisionBlock = {
    type: "decision";
    question: string;
    choices: Choice[];
    displayAs?: 'decision' | 'question';
}