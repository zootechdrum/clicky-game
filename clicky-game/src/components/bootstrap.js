import React from "react";

function bootstrap() {
return (
<div className = "container">
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Pokemon Badge Guesser
  </a>
  </a>
</nav>
</div>
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Gym Badge Clicker</h1>
    <p className="lead">Click on a Kanto region badge to earn points, but don't click the same badge twice!</p>
  </div>
</div>
);
}

export default bootstrap;