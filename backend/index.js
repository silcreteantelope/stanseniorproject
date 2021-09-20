const express = require('express')
const app = express();
const bcrypt = require('bcrypt');
var MongoClient = require('mongodb').MongoClient;
const port = 3000
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config()
const host = process.env.DB_HOST
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const clusterurl =  process.env.DB_URL
const url = "mongodb+srv://"+user+":"+password+"@"+clusterurl+"/test?retryWrites=true&w=majority";
const saltRounds= 10;

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/expresspanel.html');
})

app.post('/addffile', function (req, res) {
	const name = req.body.name;
	const email = req.body.email;
	const sport = req.body.sport;
	const password = req.body.password;
	res.send('Claim Submitted Successfully!');
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		const dbo = db.db("test");
		bcrypt.genSalt(saltRounds)
			.then(salt =>  bcrypt.hash(password, salt))
			.then(hashedPassword => dbo.collection("fanfiles").insertOne({
				name,
				email,
				password: hashedPassword,
				sport
			}))
			.catch(error => {
				console.error('OMG Why', error);
			})
			.finally(() => {
				db.close();
			});


  		// var myobj = {name: name, email: email, sport: sport, password: password};
 		// dbo.collection("fanfiles").insertOne(myobj, function(err, res) {
    	// 		if (err) throw err;
    	// 		console.log("1 document inserted");
   		// 	db.close();
  		// });
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
