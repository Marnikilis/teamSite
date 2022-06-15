import styles from "../styles/Home.module.scss";
import MainLayout from "../components/MainLayout/MainLayout";
import Description from "../components/Description/Description";
import Comments from "../components/Comments/Comments";
import { CommentsType } from "../interfaces/Interfaces";
import useToastContext from "../components/Toast/useToastContext";
import axios from "axios";
import Header from '../components/Header/Header';
import { useForm } from 'react-hook-form';

export default function Home(props: CommentsType) {
  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const registrationHandler = useToastContext();

  const onSubmitHandler = (data:any) => {
    // @ts-ignore
    registrationHandler(data.email);
      reset();
    };

  return (
    <MainLayout>
      <div className={styles.background}>
        <Header color={"#FFFFFF"} logoColor={"#FFFFFF"} greyBtn/>
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
              onSubmit={handleSubmit(onSubmitHandler)}
              className={styles.accessForm}
            >
              <input
                type="email"
                {...register("email", {
                  required:{value: true, message:"Required field"},
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid format"
                  }
                })
                }
                placeholder="Email"
              />
              <button type="submit">Get early access</button>
            </form>
            {errors.email && <div className={styles.errMessage}>{errors.email.message}</div>}
          </div>
        </div>
      </div>
      <Description/>
      <Comments comments={props.comments}/>
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(`${process.env.LOCALHOST_URL}/comments`);
    const comments = await response.data.comments;

    return {
      props: {
        comments,
      },
    };
  } catch (e) {
    return {
      props: {}
    }
  }
}
