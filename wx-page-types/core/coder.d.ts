export interface IBufferCoderDescriptor {
    byteOffsets: number[];
    totalBytes: number;
}
export declare type ArrayBufferLike = ArrayBuffer | SharedArrayBuffer;
export declare type ArrayBufferLikeCtor = new (len: number) => ArrayBufferLike;
export declare class BufferCoder {
    readonly descriptor: IBufferCoderDescriptor;
    readonly buffer: ArrayBufferLike;
    private _elementsCache;
    private _dataView;
    constructor(descriptor: IBufferCoderDescriptor, buffer: ArrayBufferLike);
    protected _getOffsetForElement(index: number): number[];
    protected readElement(index: number): number;
    protected writeElement(index: number, value: number): void;
    private _doReadElement;
    private _doWriteElement;
    private _outdate;
    private get dataView();
}
