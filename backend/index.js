const express = require('express')
const app = express()
var MongoClient = require('mongodb').MongoClient;
const port = 3000
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config()
var host = process.env.DB_HOST
var user = process.env.DB_USER
var password = process.env.DB_PASSWORD
var clusterurl =  process.env.DB_URL
const url = "mongodb+srv://"+user+":"+password+"@"+clusterurl+"/test?retryWrites=true&w=majority";

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/expresspanel.html');
})

app.post('/addffile', function (req, res) {
	var name = req.body.name;
	res.send('Claim Submitted Successfully!');
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("test");
  		var myobj = {name: name};
 		dbo.collection("fanfiles").insertOne(myobj, function(err, res) {
    			if (err) throw err;
    			console.log("1 document inserted");
   			db.close();
  		});
	}); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} url=${url}`)
})
