export interface IPageStyles {
    sections: IPageStyleSection[];
    selectors: IPageStyleSelector[];
    uri?: any;
}
export interface IPageStyleSelector {
    selectorName: string;
    offsets: number[];
}
export interface IPageStyleSection {
    selector: string;
    rules: string[];
}
