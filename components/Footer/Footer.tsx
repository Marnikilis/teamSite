import styles from "./Footer.module.scss";
import Link from "next/link";
import Instagram from "../../public/images/footer/instagram.svg";
import Facebook from "../../public/images/footer/facebook.svg";
import Twitter from "../../public/images/footer/twitter.svg";
import Arrow from "../../public/images/footer/arrow.svg";
import useToastContext from "../Toast/useToastContext";
import { useForm } from 'react-hook-form';

export default function Footer() {
  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const registrationHandler = useToastContext();

  const onSubmitHandler = (data:any) => {
    // @ts-ignore
    registrationHandler(data.email);
    reset();
  };

  return (
    <footer className={styles.footer}>
      <div className={"mainContainer"}>
        <div className={styles.footerNav}>
          <div className={styles.social}>
            <Link href={"/"}>
              <a className={"logo"}>
                team <span>.</span>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <Instagram className={styles.icon}/>
                <div>Instagram</div>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <div className={styles.icon}>
                  <Facebook />
                </div>
                <span>Facebook</span>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <div className={styles.icon}>
                  <Twitter />
                </div>
                <span>Twitter</span>
              </a>
            </Link>
          </div>
          <div className={styles.social}>
            <div className={styles.caption}>Use Cases</div>
            <Link href={"/"}>
              <a>UI Design</a>
            </Link>
            <Link href={"/"}>
              <a>UX Design</a>
            </Link>
            <Link href={"/"}>
              <a>Prototyping</a>
            </Link>
          </div>
          <div className={styles.social}>
            <div className={styles.caption}>Explore</div>
            <Link href={"/"}>
              <a>Figma</a>
            </Link>
            <Link href={"/"}>
              <a>Customers</a>
            </Link>
            <Link href={"/"}>
              <a>Why I Love Figma</a>
            </Link>
          </div>
          <div className={styles.social}>
            <div className={styles.caption}>Resources</div>
            <Link href={"/"}>
              <a>Community Resources Hub</a>
            </Link>
            <Link href={"/"}>
              <a>Support</a>
            </Link>
            <Link href={"/"}>
              <a>Education</a>
            </Link>
          </div>
          <div className={styles.newsletter}>
            <span>Subscribe to our newsletter</span>
            <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.inputContainer}>
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
              <button type="submit">
                <Arrow />
              </button>
            </form>
            {errors.email && <div className={styles.errMessage}>{errors.email.message}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}
