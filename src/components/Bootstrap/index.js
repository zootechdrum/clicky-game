import React, { Component, Fragment } from 'react';
import "./index.css"



function Bootstrap(props) {
return (

<Fragment>
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