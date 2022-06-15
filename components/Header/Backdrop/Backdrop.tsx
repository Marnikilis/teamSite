import styles from './Backdrop.module.scss';

export const Backdrop =(props :any) => <div className={styles.backdrop} onClick={props.onClick}/>
