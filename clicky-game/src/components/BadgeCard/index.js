import React, { Component } from "react";



// class BadgeCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Badges: this.shuffleBadges(this.props.image)
//         }
//     }

//     shuffleBadges(Badges) {
//         console.log("inside shuffleBadge-------------------")
//         var i = Badges.length - 1;
//         for (; i > 0; i--) {
//             var j = Math.floor(Math.random() * (i + 1));
//             var temp = Badges[i];
//             Badges[i] = Badges[j];
//             Badges[j] = temp
//         }
//         return Badges;
//     }
//     render() {
//         return (
//             <div>
//             {this.state.Badges.map((Badges, id) => {
//                     return (
//                         <main className="imgContainer">
//                             <div className="card" onClick={(event) => this.props.clickedBadge(props.id)}>
//                                 <img src={Badges.image} className="card-img-top" alt="Pokemon Badge" id={this.props.id}>
//                                 </img>
//                             </div>
//                         </main>
//                 )
//             })
//         )
        
//     }
//     </div>
//     }
// }
// BadgeCard.propTypes = {
//     Badges: React.propTypes.Badges,
// }
// export default BadgeCard;





function BadgeCard(props) {
    return (
<React.Fragment>
<main className="imgContainer">
  <div className="card" onClick={console.log("you clicked me")}>
<img src={props.image} className="card-img-top" alt="Pokemon Badge" id={props.id}>
    </img>
    </div>
    </main>
    </React.Fragment>
    );
}

export default BadgeCard;