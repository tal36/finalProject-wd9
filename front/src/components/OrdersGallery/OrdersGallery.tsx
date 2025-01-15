import { useContext, useEffect, useState } from "react";
import "./OrdersGallery.css";
import { onlineOrders, products } from "../../types";
import { backBaseUrl } from "../../envData";
import { SpecificOrder } from "./SpecificOrder/SpecificOrder";
import { Order } from "./Order/Order";
import { NewOrder } from "./NewOrder/NewOrder";
import { MyFirstContext } from "../../state/MyContext";

export const OrdersGallery = () => {
  const [ordersArr, setOrdersArr] = useState<onlineOrders[]>(); // an array that will contain all the online orders per customer
  const [userId, setUserId] = useState("");
  const [error, setError] = useState(false);
  const { theToken, setTheToken } = useContext(MyFirstContext);

  const seeCustomerOnlineOrders = () => {
    fetch(`${backBaseUrl}/customers/onlineOrders/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        theToken: theToken,
      }),
    })
      .then((dataFromApi) => {
        console.log("dataFromApi.status:", dataFromApi.status);

        return dataFromApi.json(); // return a JSON object so we can use the data from the api
      })
      .then((dataAsObj) => {
        console.log("Data from API:", dataAsObj);
        if (dataAsObj.recordsets[0].length === 0) {
          setError(true);
        } else {
          setOrdersArr(dataAsObj.recordsets[0]);
          setError(false);
          console.log(dataAsObj.recordsets);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(true);
      });
  };

  //props: { order: products }) => {
  // setTtheClickedOrder(props.order);

  return (
    <div className="whichOrder">
      <div className="newOrders">
        <NewOrder />
      </div>
      <div className="currentOrders">
        <h2>Update Current Orders</h2>
        <input
          type="text"
          placeholder="click your userId to update current orders"
          onInput={(e) => {
            setUserId((e.target as HTMLInputElement).value);
          }}
        />
        <input type="button" value="login" onClick={seeCustomerOnlineOrders} />
        {error && (
          <p className="error-message">
            No current orders found for this user ID.
          </p>
        )}
        {ordersArr?.map((curr) => {
          return <Order order={curr} />;
        })}
      </div>
    </div>
  );
};
