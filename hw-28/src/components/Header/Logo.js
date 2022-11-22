import style from "./Logo.module.css";
import gear from "../../gear.png";

function Logo() {
  return (
    <a className={style.logo} href="/">
      <img className={style.img} src={gear} alt="useless" />
      <span className={style.txt}>Dev</span>
    </a>
  );
}

export default Logo;
