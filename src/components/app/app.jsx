import styles from "./app.module.css";
import { useEffect } from 'react';
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header"
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function App() {
  const root = document.getElementById('root');
  root.classList.add(styles.app);

  return (
    <div className={styles.page}>
      <AppHeader />
      <main>
        <ul className={styles.sections}>
          <BurgerIngredients className={styles.section} title="Соберите бургер" />
          <BurgerConstructor className={styles.section} />
        </ul>
      </main>
    </div>
  );
}

export default App;
