import React, { ChangeEvent, useState } from "react";
import styles from "./searchField.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { changeSearchTitleFilter, getSearchTitleFilter } from "@/store/searchTitleFilter";
import setSearchTitleToLS from "@/services/setSearchTitleToLS";

const SearchField = (): React.ReactElement => {
    const dispatch = useAppDispatch();
    const savedCurrentSearchTitle = useAppSelector(getSearchTitleFilter())
    const [currentValue, setCurrentValue] = useState<string>(savedCurrentSearchTitle);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const newValue: string = e.target.value;

        setSearchTitleToLS(newValue);
        setCurrentValue(newValue);
        dispatch(changeSearchTitleFilter(newValue));
    }

    return (
        <section>
            <input
                type="text"
                className={styles.input}
                placeholder="Поиск по заголовку"
                onChange={handleChange}
                value={currentValue}
            />
        </section>
    )
};

export default SearchField;


