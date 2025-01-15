import { createContext, Dispatch, SetStateAction, useState } from "react";
import { onlineOrders, products } from "../types";

// part 1 - declaring what is available in our context (our "storage").
interface cntxVals {
  personName: string;
  setpersonName: Dispatch<SetStateAction<string>>;

  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;

  theClickedOrder: onlineOrders;
  setTtheClickedOrder: Dispatch<SetStateAction<onlineOrders>>;

  theToken: string;
  setTheToken: Dispatch<SetStateAction<string>>;

  // password: string;
  // setPassword: Dispatch<SetStateAction<string>>;
}

// part2 - giving values to everything that ia availible in our context, for improper usage of the context (trying to use the context where we did not "allow" using it).

export const MyFirstContext = createContext<cntxVals>({
  personName: "",
  setpersonName: () => {},

  isLoggedIn: false,
  setIsLoggedIn: () => {},

  theClickedOrder: {
    id: 0,
    orderDate: new Date(),
    // ProductName: "",
    // price: 0,
    // description: "",
    // ImagePath: "",
  },
  setTtheClickedOrder: () => {},
  // password: "",
  // setPassword: () => {},
  theToken: "",
  setTheToken: () => {},
});

//part3 - code which will actually return the values of everything thats in "part 1". written using very specific rules.

export const MyFirstProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [theToken, setTheToken] = useState("NA");
  const [personName, setpersonName] = useState("NA"); // default as string
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theClickedOrder, setTtheClickedOrder] = useState<onlineOrders>({
    id: 2,
    orderDate: new Date(),
    // ProductName: "Null",
    // price: 0,
    // description: "Null",
    // ImagePath: "Null",
  }); //

  let theVals = {
    personName,
    setpersonName,
    isLoggedIn,
    setIsLoggedIn,
    theClickedOrder,
    setTtheClickedOrder,
    theToken,
    setTheToken,
  };

  return (
    <MyFirstContext.Provider value={theVals}>
      {children}
    </MyFirstContext.Provider>
  );
};
