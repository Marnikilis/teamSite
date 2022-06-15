import Link from 'next/link';
import styles from './Header.module.scss';
import { MenuToggle } from './MenuToggle/MenuToggle';
import { Backdrop } from './Backdrop/Backdrop';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header({logoColor = "#1E2742", color = "#6D7D8B", greyBtn,}: any) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

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
    <div className={"mainContainer"}>
      <nav style={{color}}>
        <Link href={"/"}>
          <a className={"logo"} style={{color: logoColor}}>
            team <span>.</span>
          </a>
        </Link>
        <div className={cls.join(" ")}>
          <Link href={"/"}>
            <a className={ router.pathname=="/" ? styles.active : styles.link}>Home</a>
          </Link>
          <Link href={"/blog"}>
            <a className={ router.pathname=="/blog" ? styles.active : styles.link}>Blog</a>
          </Link>
          <Link href={"/"}>
            <button
              disabled={router.pathname=="/" && true}
              className={clsBtn.join(" ")}
            >Get Access</button>
          </Link>
        </div>
        <MenuToggle onToggle={toggleMenuHandler} isOpen={isOpen}/>
        {isOpen && <Backdrop onClick={menuCloseHandler}/>}
      </nav>
    </div>
  )
}