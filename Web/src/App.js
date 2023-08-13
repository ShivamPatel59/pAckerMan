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
          img="/download.png"
          link="http://packerman.vercel.app/operation"
        />
        <Frontcard
          name="HISTORY"
          des="The history of packages shipped!."
          img="/db.svg"
          link="http://packerman.vercel.app/history"
        />
      </div>
    </div>
  );
}
