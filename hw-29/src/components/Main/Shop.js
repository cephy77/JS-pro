import { Component } from "react";
import ChoseList from "./ChoseList";
import ProductList from "./ProductList";
import style from "./Shop.module.css";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosedProducts: [],
    };
  }
  clearProducts = () => {
    this.setState({ chosedProducts: [] });
  };
  delChosedProd = (id) => {
    const result = this.state.chosedProducts.filter((prod) => prod.id !== id);
    this.setState({ chosedProducts: result });
  };
  changeProdAmmount = (id, sign) => {
    const result = this.state.chosedProducts.map((prod) => {
      if (prod.id === id) {
        if (sign === "+") {
          prod.ammount += 1;
        } else {
          prod.ammount -= 1;
        }
      }
      return prod;
    });
    this.setState({
      chosedProducts: result,
    });
  };
  choseUser = (id, img, name) => {
    const product = { id: id, img: img, name: name, ammount: 1 };
    let result = this.state.chosedProducts;
    if (!this.state.chosedProducts.length) {
      result = [product];
    } else if (
      !this.state.chosedProducts.find((prod) => prod.id === product.id)
    ) {
      result = [...this.state.chosedProducts, product];
    } else {
      this.changeProdAmmount(product.id, "+");
    }
    this.setState({
      chosedProducts: result,
    });
  };
  render() {
    return (
      <div className={style.shop}>
        <ChoseList
          height={this.state.chosedProducts.length !== 0 ? "250px" : "0px"}
          prodArr={this.state.chosedProducts}
          changeProdAmmount={this.changeProdAmmount}
          del={this.delChosedProd}
          clear={this.clearProducts}
        />
        <div>
          <h2>Buy our products</h2>
          <ProductList choseUser={this.choseUser} />
        </div>
      </div>
    );
  }
}

export default Shop;
