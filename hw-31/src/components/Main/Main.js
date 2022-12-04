import About from "./About/About";
import style from "./Main.module.css";
import Shop from "./Shop/Shop";

function Main() {
  return (
    <main className={style.main}>
      <About />
      <Shop />
    </main>
  );
}

export default Main;
