import style from "./Product.module.css";

function Product(props) {
  return (
    <div className={style.product}>
      <img src={props.img} alt={props.name} />
      <div className={style.name}>
        <h3>{props.name}</h3>
      </div>
      <div className={style.about}>Three words about this product</div>
      <div className={style.purchase}>
        <p>{props.price}</p>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default Product;
