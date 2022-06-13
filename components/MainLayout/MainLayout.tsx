import Head from "next/head";
import styles from "./MainLayout.module.scss";
import Link from "next/link";
import { useState } from "react";
import { MenuToggle } from "./MenuToggle/MenuToggle";
import { Backdrop } from "./Backdrop/Backdrop";
import Footer from "../Footer/Footer";

export default function MainLayout({
  children,
  logoColor = "#1E2742",
  color = "#6D7D8B",
  greyBtn,
}: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  const menuCloseHandler = () => {
    setIsOpen(false);
  };

  const clsBtn = [styles.accessBtn];
  if (greyBtn) {
    clsBtn.push(styles.grey);
  }
  const cls = [styles.nav];
  if (!isOpen) {
    cls.push(styles.close);
  }

  return (
    <div className={"App"}>
      <Head>
        <title>team.</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={"mainContainer"}>
        <nav style={{ color }}>
          <Link href={"/"}>
            <a className={"logo"} style={{ color: logoColor }}>
              team <span>.</span>
            </a>
          </Link>
          <div className={cls.join(" ")}>
            <Link href={"/"}>
              <a className={styles.link}>Home</a>
            </Link>
            <Link href={"/blog"}>
              <a className={styles.link}>Blog</a>
            </Link>
            <Link href={"/"}>
              <a className={clsBtn.join(" ")}>Get Access</a>
            </Link>
          </div>
          <MenuToggle onToggle={toggleMenuHandler} isOpen={isOpen} />
          {isOpen && <Backdrop onClick={menuCloseHandler} />}
        </nav>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}