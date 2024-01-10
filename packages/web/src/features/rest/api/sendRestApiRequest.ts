import axios from "axios";

import { RestRequestResponse, RestResponse } from "../types";

export const sendRestApiRequest = async (requestData: RestRequestResponse): Promise<RestResponse> => {
    const response = await axios.request({
        method: requestData.method,
        url: requestData.url,
    });

    return { responseData: response.data, responseDataType: "applications/json", statusCode: 200 };
};
