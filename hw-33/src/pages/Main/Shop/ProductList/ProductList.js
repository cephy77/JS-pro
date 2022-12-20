import { useEffect, useState } from "react";
import style from "./ProductList.module.css";
import Product from "./Product";
import Loader from "../../../../helpers/Loader";
import getUsers from "./getUsers";

function ProductList(props) {
  const [products, setProducts] = useState({ products: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      getUsers()
        .then((data) => setProducts({ products: data }))
        .catch((error) => {
          console.log(error);
          setError(true);
        })
        .finally(() => setLoading(false));
    }, 2000);
  }, []);
  function sortProducts() {
    setSorted(!sorted);
    if (!sorted) {
      const sortedProd = products.products.map((elm) => elm);
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
      setProducts({ products: sortedProd, unsortedProd: products.products });
    } else {
      setProducts({ products: products.unsortedProd });
    }
  }

  if (loading) {
    return <Loader />;
  } else if (error) {
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
          sortProducts();
        }}
      >
        {!sorted ? <>A to Z sort</> : <>ID sort</>}
      </button>
      {products.products.map((product) => (
        <Product
          name={product.name}
          img={product.image}
          key={product.id}
          status={product.status}
          price={product.id * 100}
          id={product.id}
          onClick={props.choseUser}
        />
      ))}
    </div>
  );
}
export default ProductList;
