const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
var router = express.Router();
// var mongoose = require('mongoose')
//connecting the html with the express server
const app = express();
// app.use(express.json());
app.use(express.static(__dirname))
app.use("/", router);
var cursor;
// Connection URL
const uri = "mongodb+srv://calculator_db:JQ!k3sAbjDxeZPK@cluster0.rgskf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Use connect method to connect to the Server
MongoClient.connect(uri, function(err, client) {
 
  // client.connect(err => { 
  //   const collection = client.db("userInput").collection("log");
  //   // perform actions on the collection object testing data
  //   collection.insertOne({ "User" : "input",
  //     input : "50+ 15 = 65",
  //     })
     
  console.log('connected')
// });

//reading from database
const db = client.db("userInput");
cursor = db.collection('log').find({});
function iterateFunc(doc) {
  console.log(JSON.stringify(doc, null, 4));
  
}

function errorFunc(error) {
  console.log(error);
}
//get requet
app.get('/cursor', function(req, res) {
  res.send(cursor);
});

cursor.forEach(iterateFunc, errorFunc);
//writing to the file
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: String,
    
});

var userInput = mongoose.model('log', UserSchema);
app.post('/new', (req, res) => {
  MongoClient.connect(uri, function(err, db) {
      new userInput({
        eval:res.body.eval
      }).save(function(err,doc){
        if (err) res.json(error)
        else res.send("Success posting data")
      })
  });
});

client.close();
});

