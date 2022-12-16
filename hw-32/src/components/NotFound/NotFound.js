import { Link } from "react-router-dom";
import pickle from "../../pickle.png";
import style from "./NotFound.module.css";

function NotFound(params) {
  return (
    <div className={style.notfound}>
      <div className={style.wrapper}>
        <h1>404</h1>
        <p>It turned itself in to a pickle</p>
        <Link to="/" onClick={params.resetTimer()}>
          <button className={style.go_back}>Go back</button>
        </Link>
        <img className={style.image} src={pickle} alt="pickle" />
      </div>
    </div>
  );
}
export default NotFound;
