import React from "react";
import "./AllBank.css";

function SingleBank({ input }) {
  return (
    <div className="single-bank flex">
      <table className="single-tbl">
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
          {input.map((e, i) => {
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
}

export default SingleBank;
