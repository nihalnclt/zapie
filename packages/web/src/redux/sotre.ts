import { configureStore } from "@reduxjs/toolkit";
import { restReducer } from "../features/rest/slices";

export const store = configureStore({
    reducer: {
        rest: restReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
