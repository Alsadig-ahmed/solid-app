import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal } from "solid-js";

function App() {
  const [gh, ghSet] = createSignal(0);
  setInterval(() => {
    ghSet( gh() + 1)
  }, 1000);
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>hello world {gh()}</h1>
        <button onClick={() => ghSet(8)}>change</button>
      </header>
    </div>
  );
}

export default App;
