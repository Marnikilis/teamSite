import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/Blog.module.scss";
import PostCard from "../../components/PostCard/PostCard";
import Link from "next/link";
import { BlogI } from "../../interfaces/Interfaces";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
import { NextPageContext } from "next";

export default function Index(props: BlogI) {
  return (
    <div className={styles.background}>
      <MainLayout>
        <div className={"mainContainer"}>
          <div className={styles.container}>
            <div className={"heading"}>Blog posts</div>
            <span>Our latest updates and blogs about managing your team</span>
            <div className={styles.posts}>
              {props.posts.map((post, i) => {
                return (
                  <Link
                    key={i}
                    href={{
                      pathname: "/blog/[postId]",
                      query: { postId: post.slug },
                    }}
                  >
                    <div className={styles.postContainer}>
                      <PostCard post={post} />
                    </div>
                  </Link>
                );
              })}
            </div>
            <Pagination totalPages={props.pages} path={"/blog"} />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const pageId = context.query.page;
  const response = await axios.get(
    `http://localhost:3000/api/posts?page=${pageId}`
  );
  const posts = response.data.posts;
  const pages = response.data.pages;

  return {
    props: {
      posts,
      pages,
    },
  };
};
