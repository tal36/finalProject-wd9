import { useEffect, useState } from "react";
import "./Home.css";
import { products } from "../../types";
import { Products } from "../Products/Products";
import { backBaseUrl } from "../../envData";

export const Home = () => {
  const [productsArr, setProductsArr] = useState<products[]>(); // an array that will contain all the products

  // const [theMessage, setTheMessage] = useState("");

  // useEffect(() => {
  //   fetch("${backBaseUrl}/hello")
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((dataAsObj) => {
  //       setTheMessage(dataAsObj.msg);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`${backBaseUrl}/products`)
      .then((dataFromApi) => {
        return dataFromApi.json(); // return a JSON object so we can use the data from the api
      })
      .then((dataAsObj) => {
        console.log("Data from API:", dataAsObj); // Log data here
        // now we get the sata as an object and we can use the data
        setProductsArr(dataAsObj.recordsets[0]);
        console.log(dataAsObj.recordsets);
      });
  }, []);

  return (
    <div className="container">
      <div className="background-cover">
        <h2>Straight from the field</h2>
        <p className="openPeragraph">
          A wide variety of fresh, wonderful, healthy, crunchy, and juicy
          vegetables, with fast delivery straight to your doorstep. All our
          vegetables are grown in green gardens here in Israel, blue and white,
          by the best farmers with the highest quality produce available!
        </p>
      </div>
      {/* <img src={"fruit and veg pic.jpeg"} alt="" /> */}
      {/* <h1>Our Products</h1> */}
      <div className="divAroundCards">
        {productsArr?.map((product) => {
          console.log(productsArr);
          return <Products product={product} />;
        })}
      </div>
      {/* <h2>{theMessage}</h2> */}
    </div>
  );
};
