import { Component } from "react";
import style from "./ProductList.module.css";
import Product from "./Product";
import Loader from "../common/Loader";
import getUsers from "../helpers/getUsers";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      error: false,
      sorted: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      getUsers()
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
  sortProducts = () => {
    this.setState({ sorted: !this.state.sorted });
    if (!this.state.sorted) {
      const sortedProd = this.state.products.map((elm) => elm);
      sortedProd.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.setState({
        products: sortedProd,
        unsortedProd: this.state.products,
      });
    } else {
      this.setState({ products: this.state.unsortedProd, unsortedProd: null });
    }
  };
  render() {
    if (this.state.loading) {
      return <Loader />;
    } else if (this.state.error) {
      return (
        <div className={style.error}>
          <p>Something wrong I can feel it!</p>
        </div>
      );
    }
    return (
      <div className={style.list}>
        <button
          className={style.sort_btn}
          onClick={() => {
            this.sortProducts();
          }}
        >
          {!this.state.sorted ? <>A to Z sort</> : <>ID sort</>}
        </button>
        {this.state.products.map((product) => (
          <Product
            name={product.name}
            img={product.image}
            key={product.id}
            status={product.status}
            price={product.id * 100}
            id={product.id}
            onClick={this.props.choseUser}
          />
        ))}
      </div>
    );
  }
}
export default ProductList;
