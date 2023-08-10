import React from "react"

export default function Frontcard(props) {
    return (
        <a href={props.link}>

        <div className="Front-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                {/* <img src="./images/phone-icon.png" /> */}
                <p>{props.des}</p>
            </div>
            <div className="info-group">
                <p>{props.email}</p>
            </div>
        </div>
        </a>
    )
}