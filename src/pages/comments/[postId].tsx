import Head from 'next/head'
import styles from './comments.module.scss'
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/reduxHook';
import { getCommentsList } from '@/store/comments';
import Link from 'next/link';
import PostComment from '@/components/PostComment/postComment';

export default function Comment(): React.ReactElement {
    const router = useRouter();
    const currentPost = router.query.postId as string;
    const comments = useAppSelector(getCommentsList(+currentPost));

    console.log(comments);

    return (
        <>
            <Head>
                <title>Страница комментариев поста</title>
                <meta name="description" content="Comments" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main + " container"}>
                <Link href={"/"} className={styles.button}>Вернуться на главную</Link>
                {comments.map(comment => (
                    <PostComment
                        key={"Comment" + comment.id}
                        title={comment.name}
                        body={comment.body}
                        email={comment.email}
                    />
                ))}
            </main>
        </>
    )
}
