import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Frontcard from "./components/Frontcard";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Frontcard
          name="ADD ITEMS"
          img="/add.png"
          link="http://localhost:3000/operation"
        />
        <Frontcard
          name="HISTORY"
          img="/database.png"
          link="http://localhost:3000/history"
        />
      </div>
    </div>
  );
}
