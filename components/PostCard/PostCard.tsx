import styles from "../../styles/Blog.module.scss";
import { PostI } from "../../interfaces/Interfaces";
import Image from 'next/image';

export default function PostCard({ post }: PostI) {
  return (
    <>
        <div
        className={styles.postPhoto}
        style={{ backgroundImage: `url(${post.postPhoto})` }}
      />
      <div className={styles.info}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.text}>{post.text}</div>
      </div>
      <div className={styles.authorInfo}>
        <Image
          src={post.author!.avatar}
          alt="Avatar"
          width={45}
          height={45}
        />
        <div>
          <span>{post.author?.name}</span>
          <span className={styles.line}>|</span>
          <span>2nd January,2022</span>
        </div>
      </div>
    </>
  );
}
