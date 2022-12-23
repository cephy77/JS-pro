import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../features/cart/cartSlice";
import { clearCart } from "../../features/cart/cartSlice";
import { Button } from "@mui/material";
import CartItem from "./CartItem";
import style from "./Cart.module.css";

function Cart() {
  const products = useSelector(selectCart);
  const dispatch = useDispatch();
  function showContent() {
    if (products.length) {
      return products.map((item) => <CartItem key={item.id} id={item.id} />);
    } else {
      return <div className={style.empty}>The cart is em_ty</div>;
    }
  }

  return (
    <div className={style.cart}>
      <h2>Cart</h2>
      <div className={style.clear}>
        <Button
          variant="contained"
          color="secondary"
          disabled={products.length ? false : true}
          sx={{ borderRadius: "0 10px 10px 0" }}
          onClick={() => dispatch(clearCart())}
        >
          Clear
        </Button>
      </div>
      <div className={style.items}>{showContent()}</div>
    </div>
  );
}

export default Cart;
