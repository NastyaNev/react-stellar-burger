import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header"

function App() {
  return (
    <>
      {/* <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stellar Burgers</title>
      </head> */}
      <body className={styles.app}>
        <div className={styles.page}>
          <AppHeader />
        </div>
      </body>
    </>
  );
}

export default App;
