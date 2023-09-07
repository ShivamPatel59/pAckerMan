import React from "react";
import "./styles/op.css";
import Table from "./components/Table";
import LoadingPage from "./components/LoadingPage";
const Op = () => {
  const [state, setstate] = React.useState({});
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const [loading, setloading] = React.useState(true);
  const sendData = () => {
    fetch("http://localhost:5000/addbox", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => {
        getData();
        // console.log(data);
      });
  };
  const [data, setData] = React.useState([]);
  const getData = () => {
    fetch("http://localhost:5000/getbox", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.data.filter(
          (item) => item.containerNum === ""
        );
        setData(filteredData);
        setloading(false);
      });
  };
  // Delete box from database
  const deleteData = (id) => {
    fetch(`http://localhost:5000/deletebox/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Deleted");
        // console.log(data);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);
  // console.log(data);
  return (
    <div className="container ">
      <div className="ipBar">
        <div className="radio-container">
          <p className="box">Box Type :</p>
          <input
            type="radio"
            name="type"
            value={"small"}
            id="small"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="small">Small</label>
          <input
            type="radio"
            name="type"
            id="medium"
            value={"medium"}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="medium">Medium</label>
          <input
            type="radio"
            name="type"
            value={"large"}
            id="large"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="large">Large</label>
        </div>
        <div className="num-container">
          <label htmlFor="weightip"> Weight (in Kg)</label>
          <input
            type="number"
            id="weightip"
            name="weight"
            value={state.weight}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="priceip">Price</label>
          <input
            type="number"
            id="priceip"
            name="price"
            value={state.price}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <p className="warning">*Maximum weight of the container is 600 Kg.</p>
        <p className="warning">
          *Maximum volume of the container is 500 cubic metres
        </p>
      </div>
      <div className="center-container">
        <button
          type="button"
          id="addbtn"
          className="btn"
          onClick={() => {
            // console.log(state);
            if (data.length >= 35) {
              alert("Inventory is full");
            } else if (state.type && state.weight && state.price) {
              sendData();
              //state.weight = "";  // dont flush the data states
              //state.price = "";
            } else {
              alert("Please fill all the fields");
            }
          }}
        >
          Add
        </button>
        <a href="/result">
          <button type="button" id="submitbtn" className="btn">
            Submit
          </button>
        </a>
      </div>
      {loading ? (
        <LoadingPage />
      ) : (
        <Table data={data} deleteData={deleteData} />
      )}

      {/* <div className="center-container">
        
      </div> */}
    </div>
  );
};

export default Op;
