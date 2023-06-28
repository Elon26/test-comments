import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./createStore";
import getSavedCurrentPage from "@/services/getSavedCurrentPage";
import getSavedSearchTitle from "@/services/getSavedSearchTitle";

interface ISearchTitleFilterState {
    entities: string;
}

const initialState: ISearchTitleFilterState = {
    entities: ""
};

const searchTitleFilterSlice = createSlice({
    name: "searchTitleFilter",
    initialState,
    reducers: {
        searchTitleFilterChanged: (
            state: ISearchTitleFilterState,
            action: PayloadAction<string>
        ): void => {
            state.entities = action.payload;
        }
    }
});

const { reducer: searchTitleFilterReducer, actions } = searchTitleFilterSlice;
const { searchTitleFilterChanged } =
    actions;

export const loadSearchTitleFilter =
    () =>
        (dispatch: AppDispatch): void => {
            const savedSearchTitle = getSavedSearchTitle();
            dispatch(searchTitleFilterChanged(savedSearchTitle));
        };

export const changeSearchTitleFilter =
    (payload: string) =>
        (dispatch: AppDispatch): void => {
            dispatch(searchTitleFilterChanged(payload));
        };

export const getSearchTitleFilter =
    () =>
        (state: RootState): string =>
            state.searchTitleFilter.entities;

export default searchTitleFilterReducer;
