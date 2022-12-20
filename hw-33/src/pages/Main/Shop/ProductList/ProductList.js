import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  sort,
} from "../../../../features/productList/productListSlice";
import style from "./ProductList.module.css";
import Product from "./Product";
import Loader from "../../../../helpers/Loader";

function ProductList(props) {
  const products = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (products.loading) {
    return <Loader />;
  } else if (products.error) {
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
          dispatch(sort());
        }}
      >
        {!products.sorted ? <>A to Z sort</> : <>ID sort</>}
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
