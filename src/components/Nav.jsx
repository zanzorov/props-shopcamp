import styles from "./Nav.module.css"

function Nav() {
  return(
    <>
      <nav className={styles.nav}>
        <h3>Intocode Coding Shopcamp</h3>
        <ul>
          <li>Гаджеты и аксессуары</li><hr />
          <li>Бытовая техника</li><hr />
          <li>Прочее</li><hr />
        </ul>
      </nav>
    </>
  );
  
}

export default Nav