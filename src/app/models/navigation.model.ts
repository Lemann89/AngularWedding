interface Meta {
    title: string;
}
interface Item {
    title: string;
    url: string;
}
interface Action {
    title: string;
    url: string;
}
export interface NavigationModel {
    meta: Meta;
    content: Array<Item>;
    action: Action;
}