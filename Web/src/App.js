import React from "react"
import Navbar from "./components/Navbar"
import "./App.css"
import Frontcard from "./components/Frontcard"

export default function App() {
    return (
      <div className="App">
        <div className="card">
          <Frontcard
            name="ADD ITEMS"
            des="Add Items to new Container!"
            img="/download.png"
            link="http://localhost:3000/operation"
          />
          <Frontcard
            name="HISTORY"
            des="The history of packages shipped!."
            img="/download_2.png"
            link=""
          />
        </div>
      </div>
    );
}
