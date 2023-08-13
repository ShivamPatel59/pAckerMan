import React from "react";
import "../styles/result.css";
import SkeletonComponent from "./Skeleton";
import { v4 } from "uuid";
import { Route } from "react-router";
const Result = () => {
  const [containerNum, setContainerNum] = React.useState("");
  const [result, setResult] = React.useState([]);
  const getData = () => {
    fetch("https://packerman-backend.onrender.com/getresult", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data.data);
      });
  };
  React.useEffect(() => {
    setContainerNum(v4().slice(0, 12))
    getData();
  }, []);

  const updateData = (id, containerNum) => {
    fetch(`https://packerman-backend.onrender.com/updatebox/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        containerNum: containerNum,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };

  console.log(containerNum);
  function handleClick(obj) {
    obj.forEach((element) => {
      updateData(element._id, containerNum);
    });
    alert("Successfully Shipped");
    window.location="/history"
  }
  
  return (
    <div className="result-container">
      to be shipped using container {containerNum}
      <div className="result-title">
        <h1>Choose your scheme</h1>
      </div>
      <div className="scheme-card-container">
        <div className="scheme-card">
          {result.length == 0 ? (
            <SkeletonComponent />
          ) : (
            <>
              <h3>Scheme 1</h3>
              <h5>Optimised by Packing Efficiency</h5>
              <p>Total Profit: {result.result[0].totPrice}</p>
              <p>Total Volume occupied: {result.result[0].totPrice}</p>
              <p>Total containter weight: {result.result[0].totPrice} kg</p>
            </>
          )}
          {/* <p>Packing Efficienty: 98%</p> */}

          <button
            onClick={() => {
              handleClick(result.packedEfficiency);
            }}
          >
            Ship container
          </button>
        </div>
        <div className="scheme-card">
          {result.length == 0 ? (
            <SkeletonComponent />
          ) : (
            <>
              <h3>Scheme 2</h3>
              <h5>Optimised by Price</h5>
              <p>Total Profit: {result.result[1].totPrice}</p>
              <p>Total Volume occupied: {result.result[1].totPrice}</p>
              <p>Total containter weight: {result.result[1].totPrice} kg</p>
            </>
          )}
          <button
            onClick={() => {
              handleClick(result.maxProfit);
            }}
          >
            Ship container
          </button>
        </div>
        <div className="scheme-card">
          {result.length == 0 ? (
            <SkeletonComponent />
          ) : (
            <>
              <h3>Scheme 3</h3>
              <h5>Optimised by Maximum Weight</h5>
              <p>Total Profit: {result.result[2].totPrice}</p>
              <p>Total Volume occupied: {result.result[2].totPrice}</p>
              <p>Total containter weight: {result.result[2].totPrice} kg</p>
            </>
          )}

          <button
            onClick={() => {
              handleClick(result.maxWeightPacking);
            }}
          >
            Ship container
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
