const express = require('express')
const app = express();
const bcrypt = require('bcrypt');
var MongoClient = require('mongodb').MongoClient;
const port = 3000
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const passport = require('passport')

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

app.post('/login', function (req, res) {
	var email = req.body.email;
	var password = req.body.password;
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("test");
 		dbo.collection("fanfiles").findOne({email:email}, function(err, result) {
			if (err) throw err;
			//console.log(result.password);
			bcrypt.compare(password, result.password, function(err, result) {
				if(err) { throw (err); }
				if(result == true)
					res.send('Logged in successfully');
				else
					res.send('Wrong password');
				//console.log(result);
			});
			db.close();
		});
	}); 
});

app.post('/addffile', function (req, res) {
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const email = req.body.email;
	const sport = req.body.sport;
	const position = req.body.position;
	const association = req.body.position;
	const team = req.body.team;
	const birth_year = req.body.birth_year;
	const class_of = req.body.class_of;
	const password = req.body.password;
	res.send('Registered successfully.');
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		const dbo = db.db("test");
		bcrypt.genSalt(saltRounds)
			.then(salt =>  bcrypt.hash(password, salt))
			.then(hashedPassword => dbo.collection("fanfiles").insertOne({
				firstname,
				lastname,
				email,
				password: hashedPassword,
				sport,
				position,
				association,
				team,
				birth_year,
				class_of
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

app.get('/pullffile', function (req, res) {
	var idfind = req.query.id;
	//console.log(idfind);
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("test");
		var ObjectId = require('mongodb').ObjectId;
 		dbo.collection("fanfiles").find( {"_id": ObjectId(idfind)} ).toArray(function(err, result) {
    			if (err) throw err;
			res.json(result);
   			db.close();
  		});
	}); 
});

app.post('/editffile', function (req, res) {
	const srcemail = req.body.srcemail;
	const firstname = req.body.editfname;
	const lastname = req.body.editlname;
	const email = req.body.editemail;
	const sport = req.body.editsport;
	const position = req.body.editposition;
	const association = req.body.editposition;
	const team = req.body.editteam;
	const birth_year = req.body.editbirth_year;
	const class_of = req.body.editclass_of;
	const country = req.body.editcountry;
	const state = req.body.editstate;
	const street = req.body.editstreet;
	const password = req.body.editpassword;
	res.send('Edited successfully.');
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		const dbo = db.db("test");
  		if(password)
			bcrypt.genSalt(saltRounds)
				.then(salt =>  bcrypt.hash(password, salt))
				.then(hashedPassword => dbo.collection("fanfiles").replaceOne({"email": srcemail},
					{
							firstname: firstname,
							lastname: lastname,
							email: email,
							password: hashedPassword,
							sport: sport,
							position: position,
							association: association,
							team: team,
							birth_year: birth_year,
							class_of: class_of,
							country: country,
							state: state,
							street: street
				}))
				.catch(error => {
					console.error('OMG Why', error);
				})
				.finally(() => {
					db.close();
				});
		else {
			console.log("Street="+street);
			dbo.collection("fanfiles").replaceOne({"email": srcemail},
					{
							firstname: firstname,
							lastname: lastname,
							email: email,
							sport: sport,
							position: position,
							association: association,
							team: team,
							birth_year: birth_year,
							class_of: class_of,
							country: country,
							state: state,
							street: street
				})
		}
	});
});

app.post('/getid', function (req, res) {
	var emailfind = req.body.emailfind;
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
  		var dbo = db.db("test");
 		dbo.collection("fanfiles").find({email:emailfind}).toArray(function(err, result) {
    			if (err) throw err;
			console.log(JSON.stringify(result[0]._id));
			res.send(result[0]._id);
   			db.close();
  		});
	}); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})