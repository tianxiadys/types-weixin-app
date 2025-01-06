export interface IPageTextDocument {
    getText(): string;
}
export interface HTMLDataV1 {
    version: 1 | 1.1;
    tags?: ITagData[];
    globalAttributes?: IAttributeData[];
    valueSets?: IValueSet[];
}
export interface ITagData {
    name: string;
    description?: string | MarkupContent;
    attributes: IAttributeData[];
    references?: IReference[];
}
export interface IAttributeData {
    name: string;
    description?: string | MarkupContent;
    valueSet?: string;
    attrType?: string;
    values?: IValueData[];
    references?: IReference[];
}
export interface IValueData {
    name: string;
    description?: string | MarkupContent;
    references?: IReference[];
}
export interface IValueSet {
    name: string;
    values: IValueData[];
}
export interface IReference {
    name: string;
    url: string;
}
export declare type MarkupKind = 'plaintext' | 'markdown';
export interface MarkupContent {
    kind: MarkupKind;
    value: string;
}
