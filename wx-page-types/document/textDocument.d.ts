import { BufferedTextDocumentModel } from './bufferedTextDocumentModel';
export declare class PageTextDocument {
    readonly uriString: string;
    readonly version: number;
    readonly model: BufferedTextDocumentModel;
    constructor(uriString: string, version: number, model: BufferedTextDocumentModel);
}
