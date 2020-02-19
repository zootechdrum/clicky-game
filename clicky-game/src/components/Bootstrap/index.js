import React, { Component, Fragment } from 'react';
import "./index.css"



function Bootstrap() {
return (

<Fragment>
<div className = "navcontainer">
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
   Gotta click 'em all!
  </a>
  <p className="yourScore">
Current Score:
</p>
<p>
</p>
</nav>
</div>

<div className="jumbotron jumbotron-fluid">
    <div className="container">
    <h1 className="display-4">Gym Badge Clicker</h1>
   <p className="lead">Click on a Kanto region badge to earn points, but don't click the same badge twice!
    </p>
</div>
</div>


</Fragment>
);
}

export default Bootstrap;