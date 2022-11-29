import About from "./About";
import style from "./Main.module.css";
import Shop from "./Shop";

function Main() {
  return (
    <main className={style.main}>
      <About />
      <Shop />
    </main>
  );
}

export default Main;
