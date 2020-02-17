import React from "react";

function badgeCard(props) {
    return (
        <div className="card-group">
  <div className="card">
    <img src={props.image} className="card-img-top" alt="Pokemon Badge" id={props.id}>
    </img>
    </div>
    </div>
    );
}

export default badgeCard;