import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal } from "solid-js";

function App() {
  const [gh, ghSet] = createSignal(0);
  setInterval(() => {
    ghSet(gh() + 1);
  }, 1000);
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1 class="w-[10rem]  h-[10rem] text-center  rounded-[50%] mb-4 p-8 bg-slate-400 ">hello world {gh()}</h1>
        <button class="bg-slate-600 px-2 rounded-lg hover:bg-slate-200 hover:text-emerald-300 active:bg-zinc-600" onClick={() => ghSet(8)}>
          change
        </button>
      </header>
    </div>
  );
}

export default App;
