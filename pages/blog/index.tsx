import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/Blog.module.scss";
import PostCard from "../../components/PostCard/PostCard";
import Link from "next/link";
import { BlogI } from "../../interfaces/Interfaces";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
import { NextPageContext } from "next";
import Header from '../../components/Header/Header';

export default function Index(props: BlogI) {

  return (
    <div className={styles.background}>
      <MainLayout>
        <Header/>
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
                      query: {postId: post.slug},
                    }}
                  >
                    <a className={styles.postCardContainer}>
                      <PostCard post={post}/>
                    </a>
                  </Link>
                );
              })}
            </div>
            <Pagination totalPages={props.pages} path={"/blog"}/>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  try {
    const pageId = context.query.page;
    const response = await axios.get(
      `${process.env.LOCALHOST_URL}/posts?page=${pageId}`)
    const posts = response.data.posts;
    const pages = response.data.pages;

    return {
      props: {
        posts,
        pages,
      },
    };
  } catch (e) {
    return {
      props:{}
    }
  }
};
