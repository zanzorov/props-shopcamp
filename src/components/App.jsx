import styles from "./App.module.css";
import Nav from "./Nav";
import Products from "./Products";


function App() {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <Products />
    </div>
  );
}

export default App;
