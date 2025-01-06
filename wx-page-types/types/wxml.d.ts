import { IPageTextDocument } from './document';
export declare type IPageWXMLStructuredNodeType = 'node' | 'text' | 'comment' | 'whitespace';
export interface IPageWXMLStructuredNode {
    type: IPageWXMLStructuredNodeType;
    name: string;
    innerWXML: string;
    outterWXML: string;
    attrs: IPageWXMLStructuredNodeAttr[];
    ibIdentity?: any;
    children?: IPageWXMLStructuredNode[];
}
export declare type IPageWXMLStructuredNodeAttrType = 'string' | 'eventHandle' | 'ibIdentity' | 'boolean';
export interface IPageWXMLStructuredNodeAttr {
    name: string;
    rawValue: string;
    attrType: IPageWXMLStructuredNodeAttrType;
}
export interface IPageWXMLStructuredData {
    rootNodes: IPageWXMLStructuredNode[];
    getRawFile(): Promise<IPageTextDocument>;
    getStructuredRawFile(): Promise<IPageTextDocument>;
}
