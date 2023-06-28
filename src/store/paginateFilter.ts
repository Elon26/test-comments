import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./createStore";
import getSavedCurrentPage from "@/services/getSavedCurrentPage";

interface IPaginateFilterState {
    entities: number;
}

const initialState: IPaginateFilterState = {
    entities: 0
};

const paginateFilterSlice = createSlice({
    name: "paginateFilter",
    initialState,
    reducers: {
        paginateFilterChanged: (
            state: IPaginateFilterState,
            action: PayloadAction<number>
        ): void => {
            state.entities = action.payload;
        }
    }
});

const { reducer: paginateFilterReducer, actions } = paginateFilterSlice;
const { paginateFilterChanged } =
    actions;

export const loadPaginateFilter =
    () =>
        (dispatch: AppDispatch): void => {
            const savedCurrentPage = getSavedCurrentPage();
            dispatch(paginateFilterChanged(savedCurrentPage));
        };

export const changePaginateFilter =
    (payload: number) =>
        (dispatch: AppDispatch): void => {
            dispatch(paginateFilterChanged(payload));
        };

export const getPaginateFilter =
    () =>
        (state: RootState): number =>
            state.paginateFilter.entities;

export default paginateFilterReducer;
