const express = require('express')

const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/matt"
)

app.listen(
    PORT, function () {
        console.log("Listening on " + PORT)
    }
);