import Product from "./Product";
import styles from "./Products.module.css"
import PropTypes from "prop-types"

// import images
import photoMac from "../img/macbook.jpg";
import photoGalaxy from "../img/galaxy.jpg";
import photoScooter from "../img/scooter.jpg";
import photoMonitor from "../img/monitor.jpg";
import photoMask from "../img/mask.jpg";
import photoWashingmachine from "../img/wmachine.jpg";

Products.propTypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.number.isRequired
}

const goods = [
  {
    image: photoMac,
    price: "97000р",
    title: "MacBook",
  },
  {
    image: photoGalaxy,
    price: "35999р",
    title: "Samsung Galaxy",
  },
  {
    image: photoScooter,
    price: "58950р",
    title: "Scooter",
  },
  {
    image: photoMonitor,
    price: "12000р",
    title: "Monitor",
  },
  {
    image: photoMask,
    price: "3000р",
    title: "Mask",
  },
  {
    image: photoWashingmachine,
    price: "47000р",
    title: "Washing machine",
  },
];

function Products() {
  return (
    <div className={styles.cards}>
      {goods.map((item) => (
        <Product title={item.title} price={item.price} image={item.image} />
      ))}
    </div>
  );
}

export default Products;
