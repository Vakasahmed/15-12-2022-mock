import React from "react";
import data from "../Data";
import "./AllBank.css";

const AllBank = () => {
  return (
    <div className="all-bank flex">
      <table>
        <thead>
          <tr>
            <th>Bank</th>
            <th>IFSC</th>
            <th>Branch</th>
            <th>BankId</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.Bank}</td>
                <td>{e.IFSC}</td>
                <td>{e.Branch}</td>
                <td>{e.BankId}</td>
                <td>{e.Address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default AllBank;
