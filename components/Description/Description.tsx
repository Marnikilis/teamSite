import styles from "./Description.module.scss";
import Arrow from "../../public/images/description/arrow.svg";

export default function Description() {
  return (
    <div className={styles.container}>
      <div className={"mainContainer"}>
        <div className={styles.teamContainer}>
          <div className={styles.teamBg}>
            <div className={`heading ${styles.mb}`}>Your Hub for teamwork</div>
            <div className={styles.text}>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <button className={styles.btn}>
              <span>Learn more</span>
              <Arrow />
            </button>
          </div>
        </div>
        <div className={styles.taskContainer}>
          <div className={styles.taskBg}>
            <div className={`heading ${styles.mb}`}>Simple task management</div>
            <div className={styles.text}>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <button className={styles.btn}>
              <span>Learn more</span>
              <Arrow />
            </button>
          </div>
        </div>
        <div className={styles.scheduleContainer}>
          <div className={styles.teamBg}>
            <div className={`heading ${styles.mb}`}>
              Scheduling that actually works
            </div>
            <div className={styles.text}>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <button className={styles.btn}>
              <span>Learn more</span>
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
