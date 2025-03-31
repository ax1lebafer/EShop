import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>QPICK</p>
      <div className={styles.iconsContainer}>
        <img className={styles.icon} src="/icons/heart.svg" alt="Heart icon" />
        <img className={styles.icon} src="/icons/cart.svg" alt="Cart icon" />
      </div>
    </header>
  );
};
