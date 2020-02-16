const express = require('express');

const path = require('path');

const mongoose = require('mongoose');

const routes = require('./routes/htmlroutes');

const app = express();

const PORT = 8080;
//Array of objects with each object containing a url and unique identifier
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('assets'))

require("./routes/htmlroutes")(app);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/matt"
)

app.listen(
    PORT, function () {
        console.log("Listening on " + PORT)
    }
);