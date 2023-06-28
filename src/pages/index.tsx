import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import PostsField from '@/components/PostsField/postsField';
import SearchField from '@/components/SearchField/searchField';

export default function Home(): React.ReactElement {
    return (
        <>
            <Head>
                <title>Главная страница</title>
                <meta name="description" content="Comments" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main + " container"}>
                <SearchField />
                <PostsField />
            </main>
        </>
    )
}
