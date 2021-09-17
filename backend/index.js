const express = require('express')
const bcrypt = require("bcrypt");
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
	var email = req.body.email;
	var sport = req.body.sport;
	var password = req.body.password;
	res.send('Claim Submitted Successfully!');
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("test");
  		var myobj = {name: name, email: email, sport: sport, password: password};
 		dbo.collection("fanfiles").insertOne(myobj, function(err, res) {
    			if (err) throw err;
    			console.log("1 document inserted");
   			db.close();
  		});
	}); 
});

app.post('/pullffile', function (req, res) {
	var emailfind = req.body.emailfind;
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("test");
 		dbo.collection("fanfiles").find({email:emailfind}).toArray(function(err, result) {
    			if (err) throw err;
			res.json(result);
   			db.close();
  		});
	}); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} url=${url}`)
})
