export type NavItem = {
  displayStr: string;
  hrefStr: string;
};

export const arrForNav = [
  {
    hrefStr: "/",
    displayStr: "Home",
  },
  {
    hrefStr: "/Branches",
    displayStr: "Branches",
  },
  {
    hrefStr: "/about us",
    displayStr: "about us",
  },
  {
    hrefStr: "/contact",
    displayStr: "Contact Us",
  },
  {
    hrefStr: "/Login and Online Orders",
    displayStr: "Login and Online Orders",
  },
  {
    hrefStr: "/Register",
    displayStr: "Register",
  },
];

export type products = {
  id: number;
  ProductName: string;
  price: number;
  description: string;
  ImagePath: string;
};

export type branches = {
  id: number;
  brancheName: string;
  Address: number;
  OpenHours: string;
};

export type onlineOrders = {
  id: number;
  orderDate: Date;
};

export type product = {
  ProductName: string;
  "product price": number;
};

export type deliveryArea = {
  CityName: string;
  deliveryPrice: number;
};
