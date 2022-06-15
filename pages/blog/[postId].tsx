import MainLayout from "../../components/MainLayout/MainLayout";
import styles from "../../styles/Post.module.scss";
import { PostI, PostT } from "../../interfaces/Interfaces";
import axios from "axios";
import { NextPageContext } from "next";
import Image from 'next/image';
import Header from '../../components/Header/Header';

export default function PostItem(props : PostI) {

  return (
    <MainLayout>
      <Header/>
      <div className={"mainContainer"}>
        <div className={styles.postContainer}>
          <div className={styles.heading}>
            <div className={styles.title}>{props.post?.title} </div>
            <div className={styles.author}>
              <Image
                src={props.post?.author?.avatar}
                alt="Avatar"
                width={56}
                height={56}
              />
              <span>{props.post?.author?.name}</span>
              <span className={styles.line}>|</span>
              <span>2nd January, 2022</span>
            </div>
          </div>
          <img
            src={props.post?.postPhoto}
            alt="Avatar"
            className={styles.postPhoto}
          />
          <div className={styles.text}>
            <p>
              If you’re thinking of starting a blog of your own, but just don’t
              have a clue on what to blog about, then fear not!
            </p>
            <p>
              In this article, I have included a whole load of blog examples
              from a wide variety of different niches, all run on different
              blogging platforms like WordPress, Joomla! and Drupal.
            </p>
            <p>
              Since the beginning of the internet, millions and millions and
              millions of blogs have been created. Many have died due to lost
              interest or their owners giving up on the idea, while others have
              thrived and continue to grow, making money and earning their
              owners a steady income. It’s a constant evolution of content that
              keeps people coming back for more, especially if these blogs
              contact highly resourceful material that people find useful and
              interesting.
            </p>
            <p>
              Each example listed in this blog post are all different in some
              way and all bring something unique to their readers & subscribers.
              I want to show you what is possible and how you can take
              inspiration from them and create an awesome blog of your own.
            </p>
            <p>
              Some of these blogs make over $100k a month, others are just a
              hobby for their owners, but all have the same purpose at their
              core… the love of writing and sharing information. Some of these
              blogs make over $100k a month, others are just a hobby for their
              owners, but all have the same purpose at their core… the love of
              writing and
            </p>
            Some of these blogs make over $100k a month, others are just a hobby
            for their owners, but all have the same purpose at their core… the
            love of writing and sharing information. Some of these blogs make
            over $100k a month, others are just a hobby for their owners, but
            all have the same purpose at their core… the love of writing and
            sharing information.
            <div className={styles.writtenBy}>
              <Image
                src={props.post?.author?.avatar}
                alt="Avatar"
                width={56}
                height={56}
              />
              <div>
                <span>Written by</span>
                <span>{props.post?.author?.name}</span>
                <span>CEO Team App</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export const getServerSideProps = async(context: NextPageContext)=> {
  try {
    const postId = context.query.postId;
    const response = await axios.get(`${process.env.LOCALHOST_URL}/posts/${postId}`);
    const post = response.data.selectedPost;

    return {
      props: {post},
    };
  } catch (e) {
    return {
      props: {}
    }
  }
}
