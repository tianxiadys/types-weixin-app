import { IBufferCoderDescriptor, BufferCoder, ArrayBufferLike } from '../core/index';
export declare const PreferredChunkSize: number;
export declare const BufferedTextDocumentModelNodeDescriptor: IBufferCoderDescriptor;
export declare const enum BufferedTextDocumentModelNodeType {
    Original = 0,
    Added = 1
}
export declare class BufferedTextDocumentModelNode extends BufferCoder {
    constructor(ab?: ArrayBufferLike);
    clone(): BufferedTextDocumentModelNode;
    set nodeType(val: BufferedTextDocumentModelNodeType);
    get nodeType(): BufferedTextDocumentModelNodeType;
    set chunkIndex(val: number);
    get chunkIndex(): number;
    set charIndex(val: number);
    get charIndex(): number;
    set charLen(val: number);
    get charLen(): number;
    print(): string;
}
export declare function reArrangeNodes(nodes: BufferedTextDocumentModelNode[]): BufferedTextDocumentModelNode[];
export declare function nodeIndexForByteOffset(nodes: readonly BufferedTextDocumentModelNode[], byteOffset: number): [number, number, number] | undefined;
export declare function nodeIndexForCharOffset(nodes: readonly BufferedTextDocumentModelNode[], charOffset: number): [number, number, number] | undefined;
export declare function copyArrayWithReplaces<T = any>(array: T[], replaces: Map<number, null | T | T[]>): T[];
export declare function deleteCharsInsideNodes(nodes: BufferedTextDocumentModelNode[], charOffset: number, deleteCharLen: number): BufferedTextDocumentModelNode[];
export declare function insertCharsWithinNodes<CTOR extends (ArrayBuffer | SharedArrayBuffer)>(nodes: BufferedTextDocumentModelNode[], originalChunkSlot: CTOR | undefined, lastChunkIndex: number, lastChunkWriteOffset: number, beforeCharOffset: number, chars: string, ctor: new (len: number) => CTOR): {
    newlyChunks: CTOR[];
    lastOffset: number;
    nodes: BufferedTextDocumentModelNode[];
};
