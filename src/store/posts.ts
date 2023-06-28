import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AppDispatch, RootState } from "./createStore";
import getPosts from "../services/getPosts";
import { IPost } from "@/models";

interface IPostsState {
    entities: IPost[];
    isLoading: boolean;
    error: string | null;
}

const initialState: IPostsState = {
    entities: [],
    isLoading: true,
    error: null
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postsRequested: (state: IPostsState): void => {
            state.isLoading = true;
        },
        postsReceived: (
            state: IPostsState,
            action: PayloadAction<IPost[]>
        ): void => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        postsRequestFailed: (
            state: IPostsState,
            action: PayloadAction<string>
        ): void => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: postsReducer, actions } = postsSlice;
const { postsRequested, postsReceived, postsRequestFailed } =
    actions;

export const loadPostsList =
    () =>
        async (dispatch: AppDispatch): Promise<void> => {
            dispatch(postsRequested());
            try {
                const posts = await getPosts();
                dispatch(postsReceived(posts));
            } catch (e: unknown) {
                const error = e as AxiosError;
                dispatch(postsRequestFailed(error.message));
                console.log(error);
            }
        };

export const getPostsList =
    (request: string) =>
        (state: RootState): IPost[] =>
            state.posts.entities.filter(item => item.title.includes(request));

export const getPostsLoadingStatus =
    () =>
        (state: RootState): boolean =>
            state.posts.isLoading;

export default postsReducer;
