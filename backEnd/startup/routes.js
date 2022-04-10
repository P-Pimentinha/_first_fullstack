//On this file all the routes will be complied on a single function so that index.js has a cleaner workspace.

const express = require('express');
const workouts = require('../routes/workouts');

module.exports = function(app){
app.use(express.json());
app.use('/api/workouts', workouts);
}