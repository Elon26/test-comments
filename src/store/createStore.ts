import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paginateFilterReducer from "./paginateFilter";
import searchTitleFilterReducer from "./searchTitleFilter";

const rootReduser = combineReducers({
    paginateFilter: paginateFilterReducer,
    searchTitleFilter: searchTitleFilterReducer
});

const store = configureStore({
    reducer: rootReduser
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
