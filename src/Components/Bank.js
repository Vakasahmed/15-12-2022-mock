import React, { useState } from "react";
import data from "../Data";
import AllBank from "./AllBank";
import SingleBank from "./SingleBank";

function Bank() {
  const [input, setInput] = useState("");
  const change = (e) => {
    e.target.value === ""
      ? setInput("")
      : setInput([JSON.parse(e.target.value)]);
  };

  return (
    <div className="bank">
      <div className="header flex">
        <h2>All Banks</h2>
        <div className="dropdown">
          <select onChange={(e) => change(e)}>
            <option value={""}>Select Option</option>
            {data.map((e, i) => {
              return (
                <option value={JSON.stringify(e)} key={i}>
                  {e.Bank}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <div className="table-parent">
        {input === "" ? <AllBank /> : <SingleBank input={input} />}
      </div>
    </div>
  );
}

export default Bank;
