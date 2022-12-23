import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton, Button } from "@mui/material";
import {
  getUsers,
  sort,
} from "../../../../features/productList/productListSlice";
import style from "./ProductList.module.css";
import Product from "./Product";

function ProductList() {
  const products = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function showContent() {
    if (products.loading) {
      let arr = [];
      for (let i = 0; i < 20; i++) {
        arr = arr.concat(
          <Skeleton
            variant="rectangular"
            width={250}
            height={376}
            sx={{ margin: "0 20px 30px 20px" }}
            key={"i" + i}
          />
        );
      }
      return arr;
    } else {
      return products.products.map((product) => (
        <Product
          name={product.name}
          img={product.image}
          key={product.id}
          status={product.status}
          price={product.id * 10}
          id={product.id}
        />
      ));
    }
  }
  if (products.error) {
    return (
      <div className={style.error}>
        <p>Something wrong I can feel it!</p>
      </div>
    );
  }
  return (
    <div className={style.list}>
      <div className={style.sort_btn}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ borderRadius: "0 10px 10px 0" }}
          onClick={() => dispatch(sort())}
        >
          {!products.sorted ? <>A to Z sort</> : <>ID sort</>}
        </Button>
      </div>

      {showContent()}
    </div>
  );
}
export default ProductList;
