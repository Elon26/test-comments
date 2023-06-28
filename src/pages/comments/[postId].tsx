import Head from 'next/head'
import styles from './comments.module.scss'
import { useRouter } from 'next/router';
import Link from 'next/link';
import PostComment from '@/components/PostComment/postComment';
import { useEffect, useState } from 'react';
import { IComment } from '@/models';
import getCommentsByPostID from '@/services/getCommentsByPostID';
import { wrapAsyncFunction } from '@/utils/wrapAsyncFunction';
import Loader from '@/components/Loader/loader';

export default function Comment(): React.ReactElement {
    const router = useRouter();
    const currentPost = router.query.postId as string;

    const [comments, setComments] = useState<IComment[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(true);

    const fetchData = async () => {
        setIsLoaded(true);
        const uploadedPosts = await getCommentsByPostID(currentPost);
        setComments(uploadedPosts)
        setIsLoaded(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(wrapAsyncFunction(fetchData), []);

    if (isLoaded) return <Loader />;

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
