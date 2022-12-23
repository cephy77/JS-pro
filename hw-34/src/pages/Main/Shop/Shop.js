import ProductList from "./ProductList/ProductList";
import style from "./Shop.module.css";

function Shop() {
  return (
    <div className={style.shop} id="Shop">
      <div>
        <h2>Buy our products</h2>
        <ProductList />
      </div>
    </div>
  );
}

export default Shop;
