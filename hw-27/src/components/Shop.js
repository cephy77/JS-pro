import ProductList from "./ProductList";
import style from "./Shop.module.css";

function Shop() {
  return (
    <div className={style.shop}>
      <h2>Buy our product</h2>
      <ProductList />
    </div>
  );
}

export default Shop;
