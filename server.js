const express = require('express');
const XLSX = require("xlsx");

const http = require('http');
var bodyParser = require('body-parser')

//reading excel file
const workbook = XLSX.readFile('userLog.xlsx');
const sheet_name_list = workbook.SheetNames;
console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));
const messages = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

const app = express();
const port = 8000;

//connecting the html with the express server
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//make an request to read and show in backend => front end
app.get(`/messages`, (req, res) => {
    res.send( XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))
})
//make an request to frontend => back end and 
app.post(`/messages`, (req, res) => {
    res.send( XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))
})

app.listen(port, () => {
  console.log(`Node server listening on port ${port}!`)
  console.log(`go to http://localhost:8000/`)
});