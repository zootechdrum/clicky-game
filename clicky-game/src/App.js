import React, { Component, Fragment } from 'react';
import './App.css';
import BadgeCard from './components/BadgeCard/index';
import Bootstrap from "./components/Bootstrap/index";
import Badges from "./Badges.json";
// import footer from './components/Footer/index';


// class Testing extends Component {
//   state = {
//     Badges
//   }


//   shuffleBadges = () => {
//     console.log("hello")
//   //   var shuffledArr;
//   //  shuffledArr =  Badges.shuffle(Badges)
//   }

//   // clickedBadge = (this.shuffleBadges) => {
//   //   shuffleBadges()
//   // }





// }



function App() {
  return (
    <React.Fragment>
 <Bootstrap />
 <row>
 <BadgeCard
 image={Badges[0].image} key = {Badges[0].id}
 />
 <BadgeCard
 image={Badges[1].image} key = {Badges[1].id}           
 />
 <BadgeCard
 image={Badges[2].image} key = {Badges[2].id}
 />
 <BadgeCard
 image={Badges[3].image} key = {Badges[3].id}
 />
 </row>
 <row>
 <BadgeCard
 image={Badges[4].image} key = {Badges[4].id}
 />
 <BadgeCard
 image={Badges[5].image} key = {Badges[5].id}
 />
 <BadgeCard
 image={Badges[6].image} key = {Badges[6].id}
 />
 <BadgeCard
 image={Badges[7].image} key = {Badges[7].id}
 />
 </row>
 <footer />
 </React.Fragment>
  );
}

export default App;
