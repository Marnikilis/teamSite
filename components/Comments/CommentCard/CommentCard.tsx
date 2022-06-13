import Stars from "../../../public/images/comments/stars.svg";
import styles from "./CommentCard.module.scss";
import { CommentType } from "../../../interfaces/Interfaces";
import Image from 'next/image';

export default function CommentCard({ text, avatar, author }: CommentType) {

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <Stars />
        <div className={styles.text}>{text}</div>
        <div className={styles.author}>
          <Image
            src={`/${avatar}`}
            alt="Picture of the author"
            width={56}
            height={56}
          />
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
}
