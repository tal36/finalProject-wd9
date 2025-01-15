import { backBaseUrl } from "../../envData";
import { products } from "../../types";
import "./Products.css";
export const Products = (props: { product: products }) => {
  return (
    <div className="productArr">
      <h3>{props.product.ProductName}</h3>
      {/* <h2>{props.product.id}</h2> */}
      <img
        src={`${backBaseUrl}${props.product.ImagePath}`}
        alt={props.product.ProductName}
        className="productImage"
      />

      <p>{props.product.description}</p>
      <p>{props.product.price}$ per Kilo</p>
    </div>
  );
};
