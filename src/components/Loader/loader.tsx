import React from "react";
import styles from "./loader.module.scss";

const Loader = (): React.ReactElement => {
    return (
        <div className={styles.loaderBody}>
            <span className={styles.loader}></span>
        </div>
    );
};

export default Loader;
