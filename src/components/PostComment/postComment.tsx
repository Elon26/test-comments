import React from "react";
import styles from "./postComment.module.scss";
import Link from "next/link";

interface PostCommentProps {
    title: string;
    body: string;
    email: string
}

const PostComment = ({ title, body, email }: PostCommentProps): React.ReactElement => {
    return (
        <article className={styles.wrapper}>
            <div className={styles.title}>{title} </div>
            <div className={styles.body}>{body}</div>
            <div className={styles.email}>{email}</div>
        </article>
    );
};

export default PostComment;
