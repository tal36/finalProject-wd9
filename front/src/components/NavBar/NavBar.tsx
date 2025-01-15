import { Link } from "react-router-dom";
import { NavItem } from "../../types";
import "./NavBar.css";

export const NavBar = (props: { theArr: NavItem[] }) => {
  return (
    <div className="NavBar">
      {props.theArr.map((curr) => {
        return (
          <div>
            <Link to={curr.hrefStr}>{curr.displayStr}</Link>
          </div>
        );
      })}
    </div>
  );
};
