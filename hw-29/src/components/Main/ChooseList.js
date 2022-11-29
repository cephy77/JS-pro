import style from "./ChooseList.module.css";
import Product from "./Product";

function ChooseList(props) {
  return (
    <div className={style.chooseList}>
      <h2>Choosen products</h2>
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

export default ChooseList;
