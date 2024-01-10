import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RestRequestResponse, RestResponse } from "../types";

interface RestState {
    openedTabs: RestRequestResponse[];
    recentlyClosedTabs: RestRequestResponse[];
    selectedTabIndex: number;
}

const initialState: RestState = {
    openedTabs: [],
    recentlyClosedTabs: [],
    selectedTabIndex: 0,
};

export const restSlice = createSlice({
    name: "rest",
    initialState,
    reducers: {
        addNewRestRequestTab: (state) => {
            state.openedTabs.push({
                method: "GET",
                requestName: "",
                url: "https://jsonplaceholder.typicode.com/posts",
                UrlParams: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        },
        closeOpenedRestRequestTab: (state, action: PayloadAction<number>) => {
            state.openedTabs.splice(action.payload, 1);
        },
        updateRestSelectedTab: (state, action: PayloadAction<number>) => {
            state.selectedTabIndex = action.payload;
        },
        updateSelectedRestRequestUrl: (state, action: PayloadAction<string>) => {
            state.openedTabs[state.selectedTabIndex].url = action.payload;
        },
        updateSelectedRestRequestMethod: (state, action: PayloadAction<string>) => {
            state.openedTabs[state.selectedTabIndex].method = action.payload;
        },
        updateSelectedRestRequestName: (state, action: PayloadAction<string>) => {
            state.openedTabs[state.selectedTabIndex].requestName = action.payload;
        },
        updateSelectedRestRequestResponseData: (state, action: PayloadAction<RestResponse>) => {
            state.openedTabs[state.selectedTabIndex].responseData = action.payload.responseData;
        },
    },
});

export const {
    addNewRestRequestTab,
    closeOpenedRestRequestTab,
    updateRestSelectedTab,
    updateSelectedRestRequestResponseData,
    updateSelectedRestRequestMethod,
    updateSelectedRestRequestName,
    updateSelectedRestRequestUrl,
} = restSlice.actions;

export default restSlice.reducer;
