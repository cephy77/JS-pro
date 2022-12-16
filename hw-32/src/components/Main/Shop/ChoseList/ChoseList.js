import { useState } from "react";
import style from "./ChoseList.module.css";
import ChosedProduct from "./ChosedProduct";

function ChoseList(props) {
  const [opacity, setOpacity] = useState("1");
  return (
    <div className={style.choseList} style={{ height: props.height }}>
      <h2>Chosen products</h2>
      <button
        className={style.clear_btn}
        onClick={() => {
          setOpacity("0");
          setTimeout(() => {
            props.clear();
            setOpacity("1");
          }, 500);
        }}
      >
        Clear
      </button>
      <div className={style.collection} style={{ opacity: opacity }}>
        <div className={style.flex_scroll}>
          {props.prodArr.map((product) => (
            <ChosedProduct
              minimise={true}
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              ammount={product.ammount}
              change={props.changeProdAmmount}
              del={props.del}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChoseList;
