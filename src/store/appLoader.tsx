import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import Loader from "@/components/Loader/loader";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { wrapAsyncFunction } from "@/utils/wrapAsyncFunction";
import { loadPaginateFilter } from "./paginateFilter";
import { loadSearchTitleFilter } from "./searchTitleFilter";

const AppLoader = ({
    children
}: {
    children: React.ReactElement;
}): React.ReactElement => {
    const dispatch = useAppDispatch();
    const [isLoaded, setIsLoaded] = useState<boolean>(true);

    const fetchData = async () => {
        try {
            setIsLoaded(true);
            await Promise.all([
                dispatch(loadPaginateFilter()),
                dispatch(loadSearchTitleFilter())
            ]);
            setIsLoaded(false);
        } catch (e) {
            console.log(e);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(wrapAsyncFunction(fetchData), []);

    if (isLoaded) return <Loader />;

    return <>{children}</>;
};

export default AppLoader;
