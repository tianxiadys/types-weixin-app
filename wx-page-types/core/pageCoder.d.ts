import { IBufferCoderDescriptor, BufferCoder, ArrayBufferLike } from './coder';
export declare const WXMLNodeBufferCoderDescriptor: IBufferCoderDescriptor;
export declare const WXMLAttrBufferCoderDescriptor: IBufferCoderDescriptor;
export declare const enum WXMLBufferEncoderNodeType {
    Node = 0,
    Attr = 1,
    Unknown = 255
}
export declare class ReadonlyWXMLAttrBufferDecoder extends BufferCoder {
    constructor(ab: ArrayBuffer);
    get nodeType(): WXMLBufferEncoderNodeType.Node | WXMLBufferEncoderNodeType.Attr;
    get offset(): number;
    get endOffset(): number;
    get keyEndOffset(): number;
    get valueOffset(): number;
    print(): string;
}
export declare class WXMLAttrBufferEncoder extends ReadonlyWXMLAttrBufferDecoder {
    constructor(ab?: ArrayBuffer);
    set nodeType(val: number);
    get nodeType(): number;
    set offset(val: number);
    get offset(): number;
    set endOffset(val: number);
    get endOffset(): number;
    set keyEndOffset(val: number);
    get keyEndOffset(): number;
    set valueOffset(val: number);
    get valueOffset(): number;
}
export declare class ReadonlyWXMLNodeBufferDecoder extends BufferCoder {
    constructor(ab: ArrayBuffer);
    get nodeType(): WXMLBufferEncoderNodeType.Node | WXMLBufferEncoderNodeType.Attr;
    get closed(): number;
    get offset(): number;
    get endOffset(): number;
    get openTagCloseOffset(): number;
    get closeTagOffset(): number;
    print(): string;
}
export declare class WXMLNodeBufferEncoder extends ReadonlyWXMLNodeBufferDecoder {
    private _closed;
    constructor(ab?: ArrayBuffer);
    set nodeType(val: number);
    get nodeType(): number;
    set closed(val: number);
    get closed(): number;
    set offset(val: number);
    get offset(): number;
    set endOffset(val: number);
    get endOffset(): number;
    set openTagCloseOffset(val: number);
    get openTagCloseOffset(): number;
    set closeTagOffset(val: number);
    get closeTagOffset(): number;
}
export declare function typeOfWXMLBufferCoder(ab: ArrayBufferLike): WXMLBufferEncoderNodeType;
