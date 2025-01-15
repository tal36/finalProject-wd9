import { branches } from "../../../types";
import "./Branches.css";

export const Branches = (props: { theBranch: branches }) => {
  return (
    <div>
      <div>
        <div className="branches">
          {/* <h2>{branche.id}</h2> */}
          <h3>{props.theBranch.brancheName}</h3>
          <h4>Address: {props.theBranch.Address}</h4>
          <h4>Open Hours: {props.theBranch.OpenHours}</h4>
        </div>
      </div>
    </div>
  );
};
