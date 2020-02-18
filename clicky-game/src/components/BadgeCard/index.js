import React, { Component } from "react";
import Badges from "./Badges.json"


// class BadgeCard extends Component {
//     constructor(){
//         super(props);
//         this.state = {
//             Badges: this.shuffleBadges(this.props.image)
//         }
//     }
// }



function BadgeCard(props) {
    return (
<React.Fragment>
<main className="imgContainer">
  <div className="card">
<img src={props.image} className="card-img-top" alt="Pokemon Badge" id={props.id}>
    </img>
    </div>
    </main>
    </React.Fragment>
    );
}

export default BadgeCard;