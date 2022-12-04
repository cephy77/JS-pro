import { useEffect, useState } from "react";
import style from "./ChosedProduct.module.css";

function ChosedProduct(props) {
  const { img, name, id, ammount, change, del } = props;
  const [opacity, setOpacity] = useState("0");
  useEffect(() => {
    setOpacity("1");
  }, []);
  return (
    <div className={style.product} style={{ opacity: opacity }}>
      <button
        className={style.del_btn}
        onClick={() => {
          setOpacity("0");
          setTimeout(() => del(id), 500);
        }}
      >
        <span>&#215;</span>
      </button>
      <img className={style.image} src={img} alt={name} />
      <div className={style.name}>{name.split(" ")[0]}</div>
      <div className={style.ammount}>
        <button
          disabled={ammount === 1 ? true : false}
          onClick={() => {
            change(id, "-");
          }}
        >
          -
        </button>
        <span> {ammount}</span>
        <button
          onClick={() => {
            change(id, "+");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ChosedProduct;
