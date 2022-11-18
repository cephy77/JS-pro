import style from "./Logo.module.css";
import gear from "../gear.png";

function Logo() {
  return (
    <div className={style.logo}>
      <img src={gear} alt="useless" />
      <h1>Development</h1>
    </div>
  );
}

export default Logo;
