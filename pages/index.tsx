import styles from "../styles/Home.module.scss";
import MainLayout from "../components/MainLayout/MainLayout";
import Description from "../components/Description/Description";
import Comments from "../components/Comments/Comments";
import { CommentsType } from "../interfaces/Interfaces";
import { FormEvent, useState } from "react";
import useToastContext from "../components/Toast/useToastContext";
import axios from "axios";

export default function Home(props: CommentsType) {
  const [email, setEmail] = useState(" ");
  const registrationHandler = useToastContext();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    registrationHandler({ email, setEmail });
  };

  return (
    <div className={styles.background}>
      <MainLayout color={"#FFFFFF"} logoColor={"#FFFFFF"} greyBtn>
        <div className={"mainContainer"}>
          <div className={styles.firstContainer}>
            <div className={styles.textContent}>
              Instant collaborations for remote teams
              <span>
                All in one for your remote team chats, collaboration and track
                projects
              </span>
            </div>
            <form
              onSubmit={(e) => onSubmitHandler(e)}
              className={styles.accessForm}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <button type="submit">Get early access</button>
            </form>
          </div>
        </div>
        <Description />
        <Comments comments={props.comments} />
      </MainLayout>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(`${process.env.LOCALHOST_URL}api/comments`);
  const comments = response.data.comments;

  return {
    props: {
      comments,
    },
  };
}
