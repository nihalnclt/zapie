export interface UrlParam {
    key: string;
    value: string;
    selected: boolean;
}

export type RestResponse = {
    responseData?: string;
    responseDataType?: string;
    statusCode?: number;
};

export type RestRequestResponse = {
    requestName: string;
    method: string;
    url: string;
    UrlParams: UrlParam[];
    createdAt: Date;
    updatedAt: Date;
} & RestResponse;
