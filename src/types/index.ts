import { ComponentType } from "react";

export type Scene = {
    id: string;
    title: string;
    showTitleBanner?: boolean;
    image?: string;
    video?: string;
    content: SceneContent[];
    layout?: 'default' | 'split-view' | 'dialogue' | 'sequential';
}

export type Chapter = {
    id: string; 
    title: string; 
    scenes: Scene[];
}

export type SceneContent = 
    | NarrativeBlock 
    | DialogueBlock 
    | NavigationBlock 
    | nullBlock 
    | InvestigationBlock 
    | DecisionBlock 
    | InfoBlock 
    | AnalysisBlock 
    | CustomBlock
    | AudioBlock
    | ChatBlock;

export type ChatBlock = {
    type: "chat";
    phoneImage: string;
    messages: ChatMessage[];
}

export type ChatMessage = {
    id: string;
    sender: 'Lena' | 'Sarah';
    text: string;
    time: string;
}

export type AudioBlock = {
    type: 'audio';
    audioSrc: string;
    coverImage: string;
    title?: string;
}

export type InvestigationBlock = {
    type: 'investigation';
    backgroundImage: string;
    hotspots: Hotspot[];
    showInternalButton?: boolean;
    navigation?: NavigationBlock;
}

export type Hotspot = {
    id: string;
    title: string;
    description: string;
    image?: string;
    required: boolean;
    audio? : AudioBlock;
    position: {
        x: number;
        y: number;
    };
    rotation?: number;
    scale?: number;
    perspective?: number;
    rotateX?: number;
    rotateY?: number;
    skewX?: number;
    skewY?: number;
}

export type NavigationBlock = {
    type : 'navigation';
    buttonText: string;
    targetSceneId?: string;
    targetChapterId?: string;
}

export type nullBlock = {
    type: "nullBlock";
}

export type NarrativeBlock = {
    type: "narrative";
    text: string | string[];
}

export type DialogueBlock = {
    type: "dialogue";
    lines: DialogueLine[];
}

export type DialogueLine = {
    character: string;
    text: string;
    align: 'left' | 'right';
}

export type Choice = {
    text: string;
    targetSceneId?: string;
    targetChapterId?: string;
    image?: string;
    followUpContent?: SceneContent[];
};

export type DecisionBlock = {
    type: "decision";
    question: string;
    choices: Choice[];
    displayAs?: 'decision' | 'question';
    backgroundImage?: string;
}

export type InfoBlock = {
    type: "info";
    text: string;
}

export type AnalysisBlock = {
    type: "analysis";
    title: string;
    items: {
        label: string;
        value: string;
        subItems?: string[];
    }[];
}

export type CustomBlock = {
    type: 'custom';
    component: ComponentType<any>;
    props?: { [key: string]: any };
};