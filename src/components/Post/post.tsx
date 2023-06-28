import React from "react";
import styles from "./post.module.scss";
import Link from "next/link";

interface PostProps {
    title: string;
    body: string;
    id: number
}

const Post = ({ title, body, id }: PostProps): React.ReactElement => {
    return (
        <article className={styles.wrapper}>
            <Link href={`/comments/${id}`} className={styles.title}>{title} </Link>
            <div className={styles.body}>{body}</div>
        </article>
    );
};

export default Post;
