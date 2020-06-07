interface Item {
    title: string;
    url: string;
    name: string;
    direction: string;
    workExperience: number;
    teachExperience: number;
    style: Array<string>;
}

export interface Meta {
    title: string;
    description: string;
    location: string;
    heroImage: string;
}

interface Action {
    title: string;
    url: string;
}

export interface Content {
    meta: Meta;
    action: Action;
    type: string;
    content: Array<Item>;
}

export interface SectionModel {
    content: Array<Content>;
}