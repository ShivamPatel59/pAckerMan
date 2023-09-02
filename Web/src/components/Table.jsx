import React from "react";
import "../styles/table.css"
const Table = ({ data }) => {
    // console.log(data[0]);
    let ind = 1;
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Price</th>
              <th>Weight</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {data.map((it) => (
              <tr key={it._id}>
                {/* {console.log(it)} */}
                <td>{ind++}</td>
                <td>{it.price}</td>
                <td>{it.weight}</td>
                <td>{it.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Table;
