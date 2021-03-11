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
const port = 8000;
message = {"User" : "User Input",
input : "180 + 5 = 185",}
// Connection URL
const uri = "mongodb+srv://calculator_db:JQ!k3sAbjDxeZPK@cluster0.rgskf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Use connect method to connect to the Server
MongoClient.connect(uri, function(err, client) {
  // perform actions on the collection object testing data
//   client.connect(err => { 
//     const collection = client.db("userInput").collection("log");
//     collection.insertOne({message})
     
// });
console.log('connected to the database')
//reading from database
const db = client.db("userInput");
cursor = db.collection('log').find({});
function iterateFunc(doc) {
  // console.log(doc)

console.log(JSON.stringify(doc, null, 4));
//get request
app.get('/doc', function(req, res) {
  res.send(doc);
});
}

function errorFunc(error) {
  console.log(error);
}

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

app.listen(port, () => {
  console.log(`Node server listening on port ${port}!`)
  console.log(`go to http://localhost:8000/`)
});
// client.close();
});

