import React from "react";
import Log from "./Log";
import "../styles/logs.css";

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
  const [expandedContainers, setExpandedContainers] = React.useState({});

  const handleContainerClick = (containerNum) => {
    setExpandedContainers((prevExpanded) => ({
      ...prevExpanded,
      [containerNum]: !prevExpanded[containerNum],
    }));
  };
  return (
    <div className="history-container">
      <h1 className="Logs-title">History</h1>
      <div className="Logs-container">
        {Object.keys(obj).map((containerNum, index) => (
          <div
            className="Logs-card"
            key={index}
            onClick={() => handleContainerClick(containerNum)}
          >
            <h4 className="Container-title">Container {containerNum}</h4>
            <ul
              className={`Logs-list ${
                expandedContainers[containerNum] ? "expanded" : ""
              }`}
            >
              {obj[containerNum].map((item, index) => (
                <li key={index} className="Log-item">
                  <Log containerNum={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logs;
