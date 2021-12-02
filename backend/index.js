const express = require('express')
const app = express();
const bcrypt = require('bcrypt');
var MongoClient = require('mongodb').MongoClient;
const cookieParser = require("cookie-parser");
var session = require('express-session')
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

app.use(cookieParser());

var session;
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
	secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
	saveUninitialized:true,
	cookie: { maxAge: oneDay },
	resave: false 
}));

app.get('/', (req, res) => {
	session=req.session;
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
			var userid=JSON.stringify(result._id);
			//console.log(result.password);
			bcrypt.compare(password, result.password, function(err, result) {
				if(err) { throw (err); }
				if(result == true){
					session=req.session;
					session.userid=userid;
					session.email=email;
					//res.send('Logged in successfully');
				}
				else
					res.send('Wrong password');
				//console.log(result);
			});
			db.close();
		});
	}); 
});

app.post('/signout', function (req, res) {
	session = null;
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
	//res.send('Registered successfully.');
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
			session=req.session;
			session.userid=userid;
			session.email=email;
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
	if(session.userid) {
		var idfind = session.userid.replace(/['"]+/g, '');
		//var idfind = req.query.id;
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
	}
});

app.get('/getffile', function (req, res) {
	//var idfind = session.userid.replace(/['"]+/g, '');
	if(req.query.id !== "undefined") {
		var idfind = req.query.id;
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
	}
});

app.post('/editffile', function (req, res) {
	const srcemail = req.body.srcemail;
	const name = req.body.editname;
	const height = req.body.height;
	const weight = req.body.weight;
	const email = req.body.editemail;
	const sport = req.body.editsport;
	const position = req.body.editposition;
	const phone1 = req.body.phone1;
	const phone2 = req.body.phone2;
	const biography = req.body.biography;
	const team1 = req.body.teamname;
	const teamposition1 = req.body.position1;
	const teamyears1 = req.body.years1;
	const team2 = req.body.teamname2;
	const teamposition2 = req.body.position2;
	const teamyears2 = req.body.years2;
	const team3 = req.body.teamname3;
	const teamposition3 = req.body.position3;
	const teamyears3 = req.body.years3;
	const achiev1 = req.body.achievement1;
	const achiev2 = req.body.achievement2;
	const achiev3 = req.body.achievement3;
	const endorsment1 = req.body.endorsement1;
	const endorsment2 = req.body.endorsement2;
	const endorsment3 = req.body.endorsement3;




	const birthyear = req.body.editbirth_year;
	const password = req.body.editpassword;


	const video1 = req.body.video1;
	const video2 = req.body.video2;
	const video3 = req.body.video3;
	const video4 = req.body.video4;
	
	if(video1) var vidID1 = req.body.video1.split('=');
	if(video2) var vidID2 = req.body.video2.split('=');
	if(video3) var vidID3 = req.body.video3.split('=');
	if(video4) var vidID4 = req.body.video4.split('=');

	const instagram = req.body.instagram
	const twitter = req.body.twitter;
	const tiktok = req.body.tiktok;
	const snapchat = req.body.snapchat;

	const newblogtitle=req.body.newblogtitle;
	const newblog=req.body.newblog;

	//res.send('Edited successfully.');

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		const dbo = db.db("test");
		if(password)
			bcrypt.genSalt(saltRounds)
		.then(salt =>  bcrypt.hash(password, salt))
		.then(hashedPassword => dbo.collection("fanfiles").updateOne({"email": session.email},
		{
			$set: {
				name,
				height,
				weight,
				phone1,
				phone2,
				biography,
				team1,
				teamposition1,
				teamyears1,
				team2,
				teamposition2,
				teamyears2,
				team3,
				teamposition3,
				teamyears3,
				achiev1,
				achiev2,
				achiev3,
				endorsment1,
				endorsment2,
				endorsment3,
				email,
				password: hashedPassword,
				sport,
				position,
				birthyear,
				video1,
				video2,
				video3,
				video4,
				vidID1,
				vidID2,
				vidID3,
				vidID4,
				instagram,
				twitter,
				tiktok,
				snapchat,
				newblogtitle,
				newblog
			}

		}, { ignoreUndefined: true }))
		.catch(error => {
			resMessage = 'Error during write to db';
			console.error('OMG Why', error);
		})
		.finally(() => {
			db.close();
		});
		else {
			dbo.collection("fanfiles").updateOne({"email": session.email},
			{
				$set: {
					name,
					height,
					weight,
					phone1,
					phone2,
					biography,
					team1,
					teamposition1,
					teamyears1,
					team2,
					teamposition2,
					teamyears2,
					team3,
					teamposition3,
					teamyears3,
					achiev1,
					achiev2,
					achiev3,
					endorsment1,
					endorsment2,
					endorsment3,
					email,
					sport,
					position,
					birthyear,
					video1,
					video2,
					video3,
					video4,
					vidID1,
					vidID2,
					vidID3,
					vidID4,
					instagram,
					twitter,
					tiktok,
					snapchat,
					newblogtitle,
					newblog
				}

			}, { ignoreUndefined: true })
			.catch(error => {
				resMessage = 'Error during write to db';
				console.error('OMG Why', error);
			})
			.finally(() => {
				db.close();
			});
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
			//console.log(JSON.stringify(result[0]._id));
			res.send(result[0]._id);
			db.close();
		});
	}); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
