import React, { useState } from "react";
import styles from "./postsField.module.scss";
import { IPost } from "@/models";
import Post from "../Post/post";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { getPostsList } from "@/store/posts";
import ReactPaginate from "react-paginate";
import { changePaginateFilter, getPaginateFilter } from "@/store/paginateFilter";
import setPageToLS from "@/services/setPageToLS";
import { getSearchTitleFilter } from "@/store/searchTitleFilter";

const PostsField = (): React.ReactElement => {
    const dispatch = useAppDispatch();
    const savedCurrentSearchTitle = useAppSelector(getSearchTitleFilter())
    const posts: IPost[] = useAppSelector(getPostsList(savedCurrentSearchTitle));
    const postsPerPage: number = 10;
    const pageLimit = 10;
    const limitedPosts = posts.slice(0, postsPerPage * pageLimit);
    const savedCurrentPage = useAppSelector(getPaginateFilter());
    const [currentPage, setCurrentPage] = useState<number>(+savedCurrentPage);
    const firstItemOnPage = currentPage * postsPerPage;
    const lastItemOnPage: number = firstItemOnPage + postsPerPage;
    const currentPosts: IPost[] = limitedPosts.slice(firstItemOnPage, lastItemOnPage);
    const pageCount: number = Math.ceil(limitedPosts.length / postsPerPage);

    const handlePageClick = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
        setPageToLS(selected);
        dispatch(changePaginateFilter(selected));
    };

    return (
        <section>
            {
                currentPosts.map(post => (
                    <Post
                        key={"Post" + post.id}
                        title={post.title}
                        body={post.body}
                        id={post.id}
                    />
                ))
            }
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={window.innerWidth > 800 ? 10 : 2}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className={styles.paginate}
                pageClassName={styles.item}
                pageLinkClassName={styles.link}
                activeClassName={styles.active}
                previousClassName={styles.item}
                nextClassName={styles.item}
                previousLinkClassName={styles.link}
                nextLinkClassName={styles.link}
                initialPage={currentPage}
                breakClassName={styles.item}
                breakLinkClassName={styles.link}
            />
        </section >
    )
};

export default PostsField;


