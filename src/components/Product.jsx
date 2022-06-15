import styles from "./Product.module.css";

function Product(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={props.image} alt="item picture" />
      </div>
      <div className={styles.card__info}>
        <p className={styles.item__price}>{props.price}</p>
        <p className={styles.item__title}>{props.title}</p>
        <button className={styles.item__btn}>Купить</button>
      </div>
    </div>
  );
}

export default Product;