import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Collection, RestRequestResponse, RestResponse } from "../types";

interface RestState {
    openedTabs: RestRequestResponse[];
    recentlyClosedTabs: RestRequestResponse[];
    selectedTabIndex: number;
    collections: Collection[];
}

const initialState: RestState = {
    openedTabs: [],
    recentlyClosedTabs: [],
    selectedTabIndex: 0,
    collections: [],
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
        createNewCollection: (state, action: PayloadAction<string>) => {
            state.collections.push({ name: action.payload, id: "randomId", item: [] });
        },
        saveRequestToCollection: (state, action) => {
            const collectionObjIndex = state.collections.findIndex((c) => c.id === action.payload?.id);
            if (collectionObjIndex !== -1) {
                // state.collections[collectionObjIndex].item.push({
                //     id: "",
                //     name: "",
                //     request: {},
                //     response: [],
                // });
            }
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
    createNewCollection,
} = restSlice.actions;

export default restSlice.reducer;
