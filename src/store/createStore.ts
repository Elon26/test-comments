import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentsReducer from "./comments";
import postsReducer from "./posts";
import paginateFilterReducer from "./paginateFilter";
import searchTitleFilterReducer from "./searchTitleFilter";

const rootReduser = combineReducers({
    comments: commentsReducer,
    posts: postsReducer,
    paginateFilter: paginateFilterReducer,
    searchTitleFilter: searchTitleFilterReducer
});

const store = configureStore({
    reducer: rootReduser
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
