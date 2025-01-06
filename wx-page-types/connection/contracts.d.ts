export interface ITransferableTextModel {
    oChunks: SharedArrayBuffer[];
    aChunks: SharedArrayBuffer[];
    nodes: SharedArrayBuffer[];
}
export declare type ITransferableWXMLStructureElement = ArrayBuffer | ITransferableWXMLStructureElement[];
export interface IBaseRequest {
    id: string;
}
export interface IBaseResponse {
    id: string;
    error?: string;
}
export interface IParseWXMLRequestData {
    textModel: ITransferableTextModel;
}
export interface IParseWXMLResult extends IBaseResponse {
    result: ITransferableWXMLStructureElement[];
}
export interface IInvestigateCompletionSituationPosition {
    line: number;
    character: number;
}
export interface IInvestigateCompletionSituationRange {
    start: IInvestigateCompletionSituationPosition;
    end: IInvestigateCompletionSituationPosition;
}
export interface IInvestigateCompletionSituationRequestData {
    textModel: ITransferableTextModel;
    position: IInvestigateCompletionSituationPosition;
    fileUri: string;
}
export interface IInvestigateCompletionSituationResultAttributeValue {
    type: 'attributeValue';
    addQuotes: boolean;
    tag: string;
    valueStart: number;
    valueEnd: number;
    offset: number;
    attribute: string;
    valuePrefix: string;
    range: IInvestigateCompletionSituationRange;
    fullRange: IInvestigateCompletionSituationRange;
}
export interface IInvestigateCompletionSituationResult extends IBaseResponse {
    result: null | IInvestigateCompletionSituationResultAttributeValue;
}
