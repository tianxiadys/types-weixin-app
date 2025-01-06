export interface IExtensibleConnection {
    onDidReceiveMessage(handler: (message: any) => void): {
        dispose(): void;
    };
    sendMessage(...messages: any[]): void;
}
