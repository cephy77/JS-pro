import { Component } from "react";
import ChooseList from "./ChooseList";
import ProductList from "./ProductList";
import style from "./Shop.module.css";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosedProducts: [],
    };
  }
  clearProducts = () => {
    this.setState({ choosedProducts: [] });
  };
  delChoosedProd = (id) => {
    const result = this.state.choosedProducts.filter((prod) => prod.id !== id);
    this.setState({ choosedProducts: result });
  };
  changeProdAmmount = (id, sign) => {
    const result = this.state.choosedProducts.map((prod) => {
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
      choosedProducts: result,
    });
  };
  chooseUser = (id, img, name) => {
    const product = { id: id, img: img, name: name, ammount: 1 };
    let result = this.state.choosedProducts;
    if (!this.state.choosedProducts.length) {
      result = [product];
    } else if (
      !this.state.choosedProducts.find((prod) => prod.id === product.id)
    ) {
      result = [...this.state.choosedProducts, product];
    } else {
      this.changeProdAmmount(product.id, "+");
    }
    this.setState({
      choosedProducts: result,
    });
  };
  render() {
    return (
      <div className={style.shop}>
        {this.state.choosedProducts.length !== 0 ? (
          <ChooseList
            prodArr={this.state.choosedProducts}
            changeProdAmmount={this.changeProdAmmount}
            del={this.delChoosedProd}
            clear={this.clearProducts}
          />
        ) : (
          <></>
        )}
        <div>
          <h2>Buy our products</h2>
          <ProductList chooseUser={this.chooseUser} />
        </div>
      </div>
    );
  }
}

export default Shop;
