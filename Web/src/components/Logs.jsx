import React from "react";
import Log from "./Log";
import "../styles/logs.css";
import LoadingPage from "./LoadingPage";

const Logs = () => {
  const [data, setData] = React.useState([]);
  const getData = () => {
    fetch("http://localhost:5000/getbox", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.data.filter(
          (item) => item.containerNum !== ""
        );
        setData(filteredData);
      });
  };
  React.useEffect(() => {
    getData();
  }, []);
  let obj = {};
  data.forEach((item) => {
    if (obj[item.containerNum]) {
      obj[item.containerNum].push(item);
    } else {
      obj[item.containerNum] = [item];
    }
  });

  return (
    <div className="history-container">
      <h1 className="Logs-title">History</h1>
      {data.length === 0 ? (
        <LoadingPage />
      ) : (
        <div className="Logs-container">
          {Object.keys(obj).map((containerNum, index) => (
            <div
              className="Logs-card"
              key={index}
              // onClick={() => handleContainerClick(containerNum)}
            >
              <h4 className="Container-title">Container ID - {containerNum}</h4>

              {obj[containerNum].map((item, index) => (
                <>
                  <li key={index} className="Log-item">
                    <Log containerNum={item} />
                  </li>
                  {/* <li key={index} className="Log-item">
                    <Log containerNum={item} />
                  </li> */}
                </>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Logs;
