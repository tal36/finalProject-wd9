import { useContext } from "react";
import "./SpecificOrder.css";
import { MyFirstContext } from "../../../state/MyContext";
import { product, products } from "../../../types";

export const SpecificOrder = (props: { product: product }) => {
  // const { theClickedOrder } = useContext(MyFirstContext);

  return (
    <div className="productsPerOrder">
      <h3>products: {props.product.ProductName}</h3>
      <h3>product Price: {props.product["product price"]}</h3>
    </div>
  );
};
