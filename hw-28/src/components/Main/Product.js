import style from "./Product.module.css";

function Product(props) {
  const { img, name, status, price } = props;
  return (
    <div className={style.product}>
      <img className={style.image} src={img} alt={name} />
      <div className={style.name}>{name}</div>
      <div className={style.about}>Status: {status}</div>
      <div className={style.purchase}>
        <p>{price}</p>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default Product;
