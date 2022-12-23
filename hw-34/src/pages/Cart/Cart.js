import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import style from "./Cart.module.css";

function Cart() {
  const products = useSelector((state) => state.cart.cartList);

  function showContent() {
    return products.map((item) => <CartItem key={item.id} id={item.id} />);
  }

  return (
    <div className={style.cart}>
      <h2>Cart</h2>
      <div className={style.items}>{showContent()}</div>
    </div>
  );
}

export default Cart;
