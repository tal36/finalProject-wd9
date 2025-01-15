import { useEffect, useState } from "react";
import { branches } from "../../types";
import "./BranchesAndDelivery.css";
import { Branches } from "./Branches/Branches";
import { backBaseUrl } from "../../envData";
import { OnlineBranches } from "./OnlineBranches/OnlineBranches";

export const BranchesAndDelivery = () => {
  const [branchesArr, setbranchesArr] = useState<branches[]>(); // an array that will contain all the branches

  useEffect(() => {
    fetch(`${backBaseUrl}/products/branches`)
      .then((dataFromApi) => {
        return dataFromApi.json(); // return a JSON object so we can use the data from the api
      })
      .then((dataAsObj) => {
        console.log("Data from API:", dataAsObj); // Log data here
        // now we get the sata as an object and we can use the data
        setbranchesArr(dataAsObj.recordsets[0]);
        console.log(dataAsObj.recordsets);
      });
  }, []);

  return (
    <div className="divAroundAllPage">
      {/* <h1>BranchesAndDelivery</h1> */}
      <div className="divAroundElements">
        <div className="divLeftSide">
          <h2>Our Branches</h2>
          <div className="divAroundBranchesCards">
            {branchesArr?.map((curr) => {
              console.log(branchesArr);
              return (
                <Branches theBranch={curr} />
                // <div>
                //   <div className="branches">
                //     {/* <h2>{branche.id}</h2> */}
                //     <h2>{branche.brancheName}</h2>
                //     <h3>{branche.Address}</h3>
                //     <h3>{branche.OpenHours}</h3>
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="divAroundOnlineBranches">
        <OnlineBranches />
      </div>
    </div>
  );
};
