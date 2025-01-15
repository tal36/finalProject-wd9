import { useContext, useState } from "react";
import "./Login.css";
import { MyFirstContext } from "../../state/MyContext";
import { OrdersGallery } from "../OrdersGallery/OrdersGallery";
import { backBaseUrl } from "../../envData";

export const Login = () => {
  const {
    personName,
    setpersonName,
    isLoggedIn,
    setIsLoggedIn,
    theToken,
    setTheToken,
  } = useContext(MyFirstContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkLoginDetails = () => {
    fetch(`${backBaseUrl}/customers/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: username,
        password: password,
      }),
      // credentials: "include", // Make sure to include cookies
    })
      .then((theData) => {
        return theData.json();
      })

      .then((dataAsObjFromApi) => {
        const { user, token } = dataAsObjFromApi;
        const dataAsObj = user;
        console.log("dataAsObj:", dataAsObjFromApi);
        if (token !== undefined) {
          setTheToken(token);
        }

        if (dataAsObj.recordset && dataAsObj.recordset.length > 0) {
          console.log("Server response:", dataAsObj);
          setpersonName(dataAsObj.recordset[0].username); // Assuming dataAsObj includes personName
          setIsLoggedIn(true);
          // setPassword(dataAsObj.salutation); // Assuming optional salutation
        } else {
          console.error("Invalid login credentials");
          // setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching login data:", error);
      });
  };

  return (
    <div>
      <h3>
        {isLoggedIn
          ? `Hello  ${personName}, please start your order`
          : "Please Login"}
      </h3>
      {!isLoggedIn && (
        <div>
          <input
            type="text"
            placeholder="username"
            onInput={(e) => {
              setUsername((e.target as HTMLInputElement).value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            onInput={(e) => {
              setPassword((e.target as HTMLInputElement).value);
            }}
          />
          <input type="button" value="login" onClick={checkLoginDetails} />
        </div>
      )}
      {isLoggedIn && <OrdersGallery />}
    </div>
  );
};

//   // const [theMessage, setTheMessage] = useState("");
//   // const userClickedBtn = () => {
//   //   let theLoginData = {
//   //     email: "",
//   //     password: "",
//   //   };
//   //   theLoginData.email = (
//   //     document.querySelector("#uname") as HTMLInputElement
//   //   ).value;
//   //   theLoginData.password = (
//   //     document.querySelector("#pass") as HTMLInputElement
//   //   ).value;
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     fetch("http://localhost:3001/login", {
//       method: "POST",
//       body: JSON.stringify(theLoginData),
//       headers: myHeaders,
//     })
//       .then((data) => {
//         return data.json();
//       })
//       .then((dataAsObj) => {
//         setTheMessage(dataAsObj.isLoginDetailsCorrect);
//       });
//   };
//   return (
//     <div>
//       <h2>Login</h2>
//       <input id="uname" type="text" placeholder="username" />
//       <input id="pass" type="text" placeholder="password" />
//       <input type="submit" value={"send"} onClick={userClickedBtn} />
//       <h3>{theMessage}</h3>
// //     </div>
//   );
