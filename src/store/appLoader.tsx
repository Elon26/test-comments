import React, { useEffect } from "react";
import { AxiosError } from "axios";
import { getCommentsLoadingStatus, loadCommentsList } from "./comments";
import Loader from "@/components/Loader/loader";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { loadPostsList } from "./posts";
import { wrapAsyncFunction } from "@/utils/wrapAsyncFunction";
import { loadPaginateFilter } from "./paginateFilter";
import { loadSearchTitleFilter } from "./searchTitleFilter";

const AppLoader = ({
    children
}: {
    children: React.ReactElement;
}): React.ReactElement => {
    const dispatch = useAppDispatch();
    const isCommentsLoading = useAppSelector(getCommentsLoadingStatus());

    const fetchData = async () => {
        try {
            await Promise.all([
                dispatch(loadCommentsList()),
                dispatch(loadPostsList()),
                dispatch(loadPaginateFilter()),
                dispatch(loadSearchTitleFilter())
            ]);
        } catch (e) {
            console.log(e);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(wrapAsyncFunction(fetchData), []);

    if (isCommentsLoading) return <Loader />;

    return <>{children}</>;
};

export default AppLoader;
