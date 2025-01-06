export interface IPageJSDataSet {
    name: string;
    initialConstantValue?: any;
    isProp?: boolean;
}
export interface IPageJSMethod {
    name: string;
    args: string[];
}
export interface IPageJSData {
    uri: string;
    dataSet: IPageJSDataSet[];
    properties: IPageJSDataSet[];
    methods: IPageJSMethod[];
}
