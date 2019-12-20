import React from "react";

export default function CharacterCard(props) {
  return <div className="card-container">
            <h1>{props.name}</h1>
            <img src={props.image}/>
        </div>
}

 