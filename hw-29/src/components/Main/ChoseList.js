import style from "./ChoseList.module.css";
import Product from "./Product";

function ChoseList(props) {
  return (
    <div className={style.choseList} style={{ height: props.height }}>
      <h2>Chosen products</h2>
      <button
        className={style.sort_btn}
        onClick={() => {
          props.clear();
        }}
      >
        Clear
      </button>
      <div className={style.collection}>
        {props.prodArr.map((product) => {
          return (
            <Product
              minimise={true}
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              ammount={product.ammount}
              change={props.changeProdAmmount}
              del={props.del}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChoseList;
