export declare function ab2str(buf: ArrayBuffer | SharedArrayBuffer, charIndex?: number, charLen?: number): string;
export declare function str2ab<CTOR extends (ArrayBuffer | SharedArrayBuffer)>(str: string, ctor: new (len: number) => CTOR): CTOR;
export declare function writeChars(fullStr: string, buf: ArrayBuffer | SharedArrayBuffer, bufWriteOffset: number, strOffset: number, writeLen: number): ArrayBuffer | SharedArrayBuffer;
