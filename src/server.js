"use strict";
const express = require('express');
const app = express();
const cors = require('cors');
const { start } = require('repl');
require('dotenv').config();

app.get('/', (req, res) => {
    res.status(200).send("Welcome in Home page.");
})

function start(port){
    app.listen(port, () => {
        console.log(`running on port ${port}`);
    })
}


module.exports = {
    app: app,
    start: start
}