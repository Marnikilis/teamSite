import styles from './MenuToggle.module.scss';

export const MenuToggle = (props: any) => {
  const cls = [styles.menuToggle];

  if (props.isOpen) {
    cls.push(styles.open)
    cls.push(styles.menuClose)
  } else {
    cls.push(styles.menuOpen)
  }

  return (
    <div
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  );
};
