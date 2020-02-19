import React, { Component, Fragment } from 'react';
import './App.css';
import BadgeCard from './components/BadgeCard/index';
import Bootstrap from "./components/Bootstrap/index";
import Badges from "./Badges.json";
import footer from './components/Footer/index';
import { render } from 'react-dom';


class App extends Component {
  state = {
    Badges,
    clickedItems:[],
  };



  // if ()


  componentDidMount(){
 
   let newArr= this.state.Badges.sort(function (a, b) { return 0.5 - Math.random() })
   console.log("------")
   console.log(newArr)
   this.setState({
     Badges:newArr
   })
  }

  shuffleFun=()=>{
  
  let newArr= this.state.Badges.sort(function (a, b) { return 0.5 - Math.random() })
   console.log("------")
   console.log(newArr)
   this.setState({
     Badges:newArr
   })
 }


// set the state to event target

  clickedBadge = id => {
    const newArr = [];
    const Badges = this.state.Badges.forEach(event => Badges.id)
    newArr.push(Badges.id);
    for (let i = 0; i < Badges.length; i++) {
    if (newArr[i] == Badges.id)
    alert("Sorry you lost!")
    }
  }





render(){
  return (
    <React.Fragment>
      <Bootstrap />

    {this.state.Badges.map(c=>
      <BadgeCard
      image={c.image} key={c.id} onClick={this.shuffleFun}
    />
      )}
      <row>
      </row>
      <footer />
    </React.Fragment>
  );
}
}

export default App;
