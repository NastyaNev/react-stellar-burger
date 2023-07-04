import styles from "./app.module.css";
import { useEffect } from 'react';
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header"
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function App() {
  useEffect(() => {
    document.title = 'Stellar Burgers';
  }, []);

  return (
      <body className={styles.app}>
        <div className={styles.page}>
          <AppHeader />
          <main>
            <ul className={styles.sections}>
              <li>
                <BurgerIngredients title="Соберите бургер" />
              </li>
              <li>
                <BurgerConstructor />
              </li>
            </ul>
          </main>
        </div>
      </body >
  );
}

export default App;
