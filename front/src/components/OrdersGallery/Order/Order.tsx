import { useContext, useState } from "react";
import { onlineOrders, product, products } from "../../../types";
import "./Order.css";
import { MyFirstContext } from "../../../state/MyContext";
import { backBaseUrl } from "../../../envData";
import { SpecificOrder } from "../SpecificOrder/SpecificOrder";

export const Order = (props: { order: onlineOrders }) => {
  const [isLoading, setIsLoading] = useState(false); // Loading state - to make sure the error message will not be displayed
  const [productsPerOrderArr, setProductsPerOrderArr] = useState<product[]>([]); // an array that will contain all the product per order
  const [orderClicked, setOrderClicked] = useState(false); // Track if the order was clicked
  const [isThereAProduct, setIsThereAProduct] = useState(false); // Tracks if products exist

  const theOrderWasClicked = () => {
    setOrderClicked(true); // Mark the order as clicked
    setIsLoading(true); // Start loading state
    console.log("The order was clicked");

    fetch(`${backBaseUrl}/customers/productsPerOrder/${props.order.id}`)
      .then((dataFromApi) => dataFromApi.json())
      .then((dataAsObj) => {
        console.log("Data from API:", dataAsObj);
        // Check if products are empty
        console.log(dataAsObj.recordset[0].ProductName);
        if (dataAsObj.recordsets[0][0]?.ProductName === null) {
          setIsThereAProduct(false);
          setProductsPerOrderArr([]); // Clear the array
        } else {
          setProductsPerOrderArr(dataAsObj.recordsets[0]); // Update products array
          setIsThereAProduct(true); // Products found
          console.log(dataAsObj.recordsets);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setIsThereAProduct(false); // Assume no products on error
        setProductsPerOrderArr([]); // Clear the array
      })
      .finally(() => {
        setIsLoading(false); // Stop loading state
      });
  };

  return (
    <div className="divAroundAllCurrentOrders">
      <div className="divOrder" onClick={theOrderWasClicked}>
        <h3>
          Id of the order
          <br />
          {props.order.id}
        </h3>
        <h3>
          Date of the order
          <br />
          {new Date(props.order.orderDate).toLocaleDateString()}
        </h3>
      </div>

      {/* Display loading spinner or message while fetching */}
      {isLoading && <p>Loading...</p>}

      {/* Show error message if there are no products and not loading */}
      {orderClicked && !isLoading && !isThereAProduct && (
        <p className="errormessage">
          No current product found for this order, please upload products.
        </p>
      )}
      {/* Render products only if they exist and not loading */}
      {orderClicked && !isLoading && isThereAProduct && (
        <div className="divAroundordersPerCustomer">
          {productsPerOrderArr.map((curr) => (
            <SpecificOrder product={curr} />
          ))}
        </div>
      )}
    </div>
  );
};
