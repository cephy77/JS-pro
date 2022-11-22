import React, { Component } from "react";
import style from "./ProductList.module.css";
import Product from "./Product";
import Loader from "../common/Loader";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      error: false,
    };
  }
  // Solution bellow for fetching from node
  componentDidMount() {
    setTimeout(() => {
      fetch("http://localhost:4000/users")
        .then((resp) => resp.json())
        .then((rawData) => rawData.results)
        .then((data) => {
          this.setState({
            products: data,
          });
        })
        .catch((e) => {
          console.log(e);
          this.setState({
            error: true,
          });
        })
        .finally(() => {
          this.setState({
            loading: false,
          });
        });
    }, 2000);
  }
  // Solution bellow for direct fetch from API
  // componentDidMount() {
  //   setTimeout(() => {
  //     fetch("https://rickandmortyapi.com/api/character")
  //       .then((resp) => resp.json())
  //       .then((rawData) => rawData.results)
  //       .then((data) => {
  //         this.setState({
  //           products: data,
  //         });
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //         this.setState({
  //           error: true,
  //         });
  //       })
  //       .finally(() => {
  //         this.setState({
  //           loading: false,
  //         });
  //       });
  //   }, 2000);
  // }
  render() {
    if (this.state.loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    } else if (this.state.error) {
      return (
        <div className={style.error}>
          <p>Something wrong I can feel it!</p>
        </div>
      );
    }
    return (
      <div>
        <div className={style.list}>
          {this.state.products.map((product) => {
            return (
              <Product
                name={product.name}
                img={product.image}
                key={product.id}
                status={product.status}
                price={product.id * 100}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default ProductList;
