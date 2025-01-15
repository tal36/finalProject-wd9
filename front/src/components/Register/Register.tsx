import { useState } from "react";
import "./Register.css";
import { backBaseUrl } from "../../envData";

export const Register = () => {
  const [myFormData, setmyFormData] = useState({
    customerName: "",
    phoneNo: "",
    address: "",
    email: "",
    username: "",
    password: "",
  });

  const userTypesSomthing = (
    e: React.FormEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    let newFromData = {
      ...myFormData,
      [fieldName]: (e.target as HTMLInputElement).value,
    };
    setmyFormData(newFromData);
  };

  const submitForm = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch(`${backBaseUrl}/products/Register`, {
      method: "POST",
      body: JSON.stringify(myFormData),
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((dataAsObj) => {
        console.log(dataAsObj);
        alert("Customer added successfully!");
      })
      .catch((err) => {
        console.error("Error while submitting form:", err);
      });
  };

  return (
    <div>
      <form>
        <h2>Register</h2>
        <p>Please fill in the form to create an account</p>
        <input
          type="text"
          onInput={(e) => userTypesSomthing(e, "customerName")}
          placeholder="customer Name"
        />
        <input
          type="text"
          onInput={(e) => userTypesSomthing(e, "phoneNo")}
          placeholder="phoneNo"
        />
        <input
          type="text"
          onInput={(e) => userTypesSomthing(e, "address")}
          placeholder="address"
        />
        <input
          type="text"
          onInput={(e) => userTypesSomthing(e, "email")}
          placeholder="email"
        />
        <input
          type="text"
          onInput={(e) => userTypesSomthing(e, "username")}
          placeholder="username"
        />
        <input
          type="password"
          onInput={(e) => userTypesSomthing(e, "password")}
          placeholder="password"
        />
        <input type="button" value="Submit" onClick={submitForm} />
      </form>
    </div>
  );
};
