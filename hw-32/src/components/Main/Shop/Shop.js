import { useState } from "react";
import ChoseList from "./ChoseList/ChoseList";
import ProductList from "./ProductList/ProductList";
import style from "./Shop.module.css";

function Shop() {
  const [chosedProducts, setChosedProducts] = useState([]);
  function clearProducts() {
    setChosedProducts([]);
  }
  function delChosedProd(id) {
    const result = chosedProducts.filter((prod) => prod.id !== id);
    setChosedProducts(result);
  }
  function changeProdAmmount(id, sign) {
    const result = chosedProducts.map((prod) => {
      if (prod.id === id) {
        if (sign === "+") {
          prod.ammount += 1;
        } else {
          prod.ammount -= 1;
        }
      }
      return prod;
    });
    setChosedProducts(result);
  }
  function choseUser(id, img, name) {
    const product = { id: id, img: img, name: name, ammount: 1 };
    let result = chosedProducts;
    if (!chosedProducts.length) {
      result = [product];
    } else if (!chosedProducts.find((prod) => prod.id === product.id)) {
      result = [...chosedProducts, product];
    } else {
      changeProdAmmount(product.id, "+");
    }
    setChosedProducts([...result]);
  }

  return (
    <div className={style.shop}>
      <ChoseList
        height={chosedProducts.length !== 0 ? "250px" : "0px"}
        prodArr={chosedProducts}
        changeProdAmmount={changeProdAmmount}
        del={delChosedProd}
        clear={clearProducts}
      />
      <div>
        <h2>Buy our products</h2>
        <ProductList choseUser={choseUser} />
      </div>
    </div>
  );
}

export default Shop;
