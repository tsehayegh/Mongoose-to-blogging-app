
'use strict';

const bodyParser = require('body-parser');
const express = require('express');


//Mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//import config.js
const {PORT, DATABASE_URL} = require('./config');
const {blogPost} = require('./models');

const app = express();
app.use(bodyParser.json());


let server;
//run server
function runServer(databaseUrl, port = PORT){
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
};

//close server
function closeServer(){
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.clse(err => {
        if(err){
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if(require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};








