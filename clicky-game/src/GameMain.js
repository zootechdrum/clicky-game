import React, { Component } from "react";


class GameMain extends Component {
  state = {
    cards: [],
    winCount: false,
    score: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
   
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state

    
  };

  loadNextDog = () => {
 
  };

  render() {
    return (
      <div>
   <h1>Hello Wolrd</h1>
      </div>
    );
  }
}

export default GameMain;
