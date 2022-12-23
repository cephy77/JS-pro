import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../features/cart/cartSlice";
import { deleteItem, changeQuantity } from "../../features/cart/cartSlice";
import { IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./CartItem.module.css";

function CartItem(props) {
  const cart = useSelector(selectCart);
  const item = cart.find((item) => item.id === props.id);
  const dispatch = useDispatch();
  return (
    <div className={style.product}>
      <img src={item.img} alt={item.name} className={style.product_img} />
      <div className={style.product_controls}>
        <div className={style.header}>
          <div className={style.product_name}>{item.name}</div>
          <div className={style.del_product}>
            <IconButton
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(deleteItem(item.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <div className={style.product_price}>{item.price * item.ammount}$</div>
        <div className={style.product_adjust}>
          <div className={style.adjust_btn}>
            <Button
              variant="contained"
              sx={{ borderRadius: 0 }}
              disabled={item.ammount === 1 ? true : false}
              onClick={() => {
                dispatch(changeQuantity({ id: item.id, ammount: -1 }));
              }}
            >
              -
            </Button>
          </div>
          <input
            className={style.adjust_input}
            type="number"
            min="1"
            value={item.ammount}
            onChange={() => {}}
          />
          <div className={style.adjust_btn}>
            <Button
              variant="contained"
              sx={{ borderRadius: 0 }}
              onClick={() => {
                dispatch(changeQuantity({ id: item.id, ammount: 1 }));
              }}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
