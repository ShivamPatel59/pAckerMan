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
          des="Add Items to new Container!"
          img="/add.png"
          link="http://packerman.vercel.app/operation"
        />
        <Frontcard
          name="HISTORY"
          des="Check Logs!"
          img="/database.png"
          link="http://packerman.vercel.app/history"
        />
      </div>
    </div>
  );
}
