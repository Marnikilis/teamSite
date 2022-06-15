import styles from './Loader.module.scss';

export function Loader(){
  return(
    <div className={styles.loader}>
    <div className={styles.ldsEllipsis}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
    </div>
  )
}