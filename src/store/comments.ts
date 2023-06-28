import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AppDispatch, RootState } from "./createStore";
import getComments from "../services/getComments";
import { IComment } from "@/models";

interface ICommentsState {
    entities: IComment[];
    isLoading: boolean;
    error: string | null;
}

const initialState: ICommentsState = {
    entities: [],
    isLoading: true,
    error: null
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        commentsRequested: (state: ICommentsState): void => {
            state.isLoading = true;
        },
        commentsReceived: (
            state: ICommentsState,
            action: PayloadAction<IComment[]>
        ): void => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentsRequestFailed: (
            state: ICommentsState,
            action: PayloadAction<string>
        ): void => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const { commentsRequested, commentsReceived, commentsRequestFailed } =
    actions;

export const loadCommentsList =
    () =>
        async (dispatch: AppDispatch): Promise<void> => {
            dispatch(commentsRequested());
            try {
                const comments = await getComments();
                dispatch(commentsReceived(comments));
            } catch (e: unknown) {
                const error = e as AxiosError;
                dispatch(commentsRequestFailed(error.message));
                console.log(error);
            }
        };

export const getCommentsList =
    (currentPost: number) =>
        (state: RootState): IComment[] =>
            state.comments.entities.filter(item => item.postId === currentPost);

export const getCommentsLoadingStatus =
    () =>
        (state: RootState): boolean =>
            state.comments.isLoading;

export default commentsReducer;
