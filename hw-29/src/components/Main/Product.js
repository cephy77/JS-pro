import style from "./Product.module.css";

function Product(props) {
  const {
    img,
    name,
    status,
    price,
    id,
    ammount,
    onClick,
    minimise,
    change,
    del,
  } = props;
  if (minimise) {
    return (
      <div className={style.mini}>
        <button
          className={style.del_btn}
          onClick={() => {
            del(id);
          }}
        >
          &#215;
        </button>
        <img className={style.image_min} src={img} alt={name} />
        <div className={style.name_min}>{name.split(" ")[0]}</div>
        <div className={style.ammount}>
          <button
            disabled={ammount === 1 ? true : false}
            onClick={() => {
              change(id, "-");
            }}
          >
            -
          </button>
          {ammount}
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
  return (
    <div
      className={style.product}
      onClick={() => {
        onClick(id, img, name, price);
      }}
    >
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
