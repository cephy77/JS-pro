import style from "./ProductList.module.css";
import Product from "./Product";

function ProductList(props) {
  let products = [];
  for (let i = 0; i < 5; i++) {
    products.push(
      <Product
        name="Product"
        price="100$"
        img="https://picsum.photos/250/250"
      />
    );
  }
  return <div className={style.list}>{products}</div>;
}

export default ProductList;
