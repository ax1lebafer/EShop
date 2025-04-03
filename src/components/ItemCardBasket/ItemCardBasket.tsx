import styles from './ItemCartBasket.module.scss';

export const ItemCardBasket = () => {
  return (
    <div className={styles.cartItem}>
      <button className={styles.deleteBtn}>
        <img src="/icons/delete.svg" alt="Delete icon" />
      </button>
      <p>Lorem ipsum dolor.</p>
    </div>
  );
};
