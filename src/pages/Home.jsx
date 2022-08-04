import styles from "./Home.module.css";
import { createSignal } from "solid-js";

function Home() {
  const [gh, ghSet] = createSignal(0);
  setInterval(() => {
    ghSet(gh() + 1);
  }, 1000);
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1 class="w-[10rem]  h-[10rem] text-center  rounded-[50%] mb-4 p-8 bg-slate-400 ">
          hello world {gh()}
        </h1>
        <button class="btn" onClick={() => ghSet(8)}>
          change
        </button>
      </header>
    </div>
  );
}

export default Home;
