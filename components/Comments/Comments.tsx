import styles from "./Comments.module.scss";
import CommentCard from "./CommentCard/CommentCard";
import Arrow from "../../public/images/comments/arrow.svg";
import { useCarousel } from "../../hooks/useCarousel";
import { TouchEventHandler, useRef } from "react";
import { CommentsType } from "../../interfaces/Interfaces";

export default function Comments({ comments }: CommentsType) {
  const cardsRef = useRef(null);
  const carouselRef = useRef(null);

  const {
    nextCardHandler,
    prevCardHandler,
    onTouchEndHandler,
    onTouchStartHandler,
    nextDisabled,
    prevDisabled,
  } = useCarousel({ items: comments, ref: cardsRef, slider: carouselRef });

  return (
    <div className={"mainContainer"}>
      <div className={`heading ${styles.heading}`}>
        What people say about us
      </div>
      <div ref={carouselRef} className={styles.carouselContainer}>
        <div
          ref={cardsRef}
          onTouchStart={(e: any) => onTouchStartHandler(e)}
          onTouchEnd={(e: any) => onTouchEndHandler(e)}
          className={styles.slider}
        >
          {comments.map((comment, i) => {
            return (
              <CommentCard
                key={i}
                text={comment.text}
                avatar={comment.avatar}
                author={comment.author}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.buttons}>
        <button disabled={prevDisabled} onClick={prevCardHandler}>
          <Arrow className={styles.arrowBtn} />
        </button>
        <button disabled={nextDisabled} onClick={nextCardHandler}>
          <Arrow className={styles.arrowBtn} />
        </button>
      </div>
    </div>
  );
}
