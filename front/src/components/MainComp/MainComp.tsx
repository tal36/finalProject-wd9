import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./MainComp.css";
import { NavBar } from "../NavBar/NavBar";
import { arrForNav } from "../../types";
import { Home } from "../Home/Home";
import { BranchesAndDelivery } from "../BranchesAndDelivery/BranchesAndDelivery";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { MyFirstProvider } from "../../state/MyContext";

export const MainComp = () => {
  return (
    <div>
      <BrowserRouter>
        <MyFirstProvider>
          <NavBar theArr={arrForNav} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Branches" element={<BranchesAndDelivery />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login and Online Orders" element={<Login />} />

            {/* <Route path="/Register" element={<Register />} /> */}
          </Routes>
        </MyFirstProvider>
      </BrowserRouter>
    </div>
  );
};
