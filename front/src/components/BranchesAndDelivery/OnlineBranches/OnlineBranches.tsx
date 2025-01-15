import { useEffect, useState } from "react";
import "./OnlineBranches.css";
import { deliveryArea } from "../../../types";
import { backBaseUrl } from "../../../envData";

export const OnlineBranches = () => {
  const [deliveryAreaArr, setdeliveryAreaArr] = useState<deliveryArea[]>(); // an array that will contain all the deliveryArea

  useEffect(() => {
    fetch(`${backBaseUrl}/products/deliveryArea`)
      .then((dataFromApi) => {
        return dataFromApi.json(); // return a JSON object so we can use the data from the api
      })
      .then((dataAsObj) => {
        console.log("Data from API:", dataAsObj); // Log data here
        // now we get the sata as an object and we can use the data
        setdeliveryAreaArr(dataAsObj.recordsets[0]);
        console.log(dataAsObj.recordsets);
      });
  }, []);

  return (
    <div>
      <h2>Our Online Branches</h2>
      {deliveryAreaArr?.map((curr) => {
        return (
          <div className="divAroundDeliveryCard">
            <h4>Branch Name: {curr.CityName}</h4>
            <p>Delivery price: {curr.deliveryPrice}</p>
          </div>
        );
      })}
    </div>
  );
};
