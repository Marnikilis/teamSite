import styles from "./Footer.module.scss";
import Link from "next/link";
import Instagram from "../../public/images/footer/instagram.svg";
import Facebook from "../../public/images/footer/facebook.svg";
import Twitter from "../../public/images/footer/twitter.svg";
import Arrow from "../../public/images/footer/arrow.svg";
import { FormEvent, useState } from "react";

import useToastContext from "../Toast/useToastContext";

export default function Footer() {
  const [email, setEmail] = useState(" ");
  const registrationHandler = useToastContext();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    registrationHandler({ email, setEmail });
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
                <div>instagram</div>
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
            <form onSubmit={onSubmitHandler} className={styles.inputContainer}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <button type="submit">
                <Arrow />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
