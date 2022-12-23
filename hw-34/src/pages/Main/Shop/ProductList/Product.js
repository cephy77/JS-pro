import { useDispatch } from "react-redux";
import { addItem } from "../../../../features/cart/cartSlice";
import { Button } from "@mui/material";
import style from "./Product.module.css";

function Product(props) {
  const dispatch = useDispatch();
  function handleBuyBtn(id, name, img, price) {
    const item = { id: id, name: name, img: img, price: price };
    dispatch(addItem(item));
  }

  const { img, name, status, price, id } = props;
  return (
    <div className={style.product}>
      <img className={style.image} src={img} alt={name} />
      <div className={style.name}>{name}</div>
      <div className={style.about}>Status: {status}</div>
      <div className={style.purchase}>
        <p>{price}$</p>
        <Button
          sx={{ borderRadius: "0" }}
          onClick={() => {
            handleBuyBtn(id, name, img, price);
          }}
        >
          Buy
        </Button>
      </div>
    </div>
  );
}

export default Product;
