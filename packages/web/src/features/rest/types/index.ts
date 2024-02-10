export type Header = {
    key: string;
    value: string;
    type: string;
};

export type RestQuery = {
    key: string;
    value: string;
};

// TODO:
// Implement host and path {reference postman}
export type RestRequestUrl = {
    raw: string;
    query: RestQuery[];
};

export type RestRequest = {
    method: string;
    header: Header[];
    url: RestRequestUrl;
};

export type CollectionItem = {
    name: string;
    id: string;
    request: RestRequest;
    response: [];
};

export type Collection = {
    name: string;
    item: CollectionItem[];
    id: string;
};

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
    name: string;
    id?: string;
    request: RestRequest;
    response: RestResponse;
};
