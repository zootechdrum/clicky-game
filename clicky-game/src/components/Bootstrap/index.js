import React, { Component, Fragment } from 'react';


function Bootstrap() {
return (

<Fragment>
<div className = "container">
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Pokemon Badge Picker
  </a>
</nav>
</div>

<div className="jumbotron jumbotron-fluid">
   <div className="container">
    <h1 className="display-4">Gym Badge Clicker</h1>
   <p className="lead">Click on a Kanto region badge to earn points, but don't click the same badge twice!
    </p>
</div>
</div>

<div className="card" >
  <img src="#" class="card-img-top" alt="Pokemon badge">
    </img>
</div> 
</Fragment>
);
}

export default Bootstrap;