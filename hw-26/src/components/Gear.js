import gear from "../gear.svg";
import style from "./Gear.module.css";
function Gear() {
  return <img src={gear} className={style.gear} alt="logo" />;
}
export default Gear;
