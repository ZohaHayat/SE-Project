const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const e = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// var app = require('express')();
var bodyParser = require('body-parser');

const { connectToDb, getDb } = require('./db'); //importing functions from db.js

const app = express();
app.use(cors())
app.use(bodyParser.json());

const path = express("path");

let db;
connectToDb((err)=>{
  if (!err){
    //start listening for requests
    app.listen(3000, () => {console.log("app listening on port 3000")});
    db = getDb(); // this will return database connection object

  }
})

app.get('/stories', (req,res)=> {
  let storiesArr = [] //name,date,text
  db.collection('Stories')
    .find() 
    .forEach(elem => storiesArr.push(elem))
    .then((result) => {
      res.status(200).json({msg:"success",list:storiesArr});
    })
    .catch(() => {
      res.status(500).json({msg:"error",list:[]});
    });
})

app.post('/signup', (req,res)=> {
  const email = req.body.email;
  const pass = req.body.password;
  const fname = req.body.fname;
  const lname = req.body.lname;

  console.log(email,pass,fname,lname)

  const newDoc = {
    Email: email,
    Password: pass,
    Name: fname + " " + lname
  };

    db.collection('Users').findOne({Email: email, Password: pass, Name: fname + " " + lname}, (err, succ) => {
    console.log(succ,err)
    if (succ){
      res.send("User already exists")
    }
})

  db.collection('Users').insertOne(newDoc, (err, succ) => {
    if (err) 
    {
      console.log('Error inserting document: ', err);
      res.send("Error")
    } 
    else 
    {
      console.log('Document inserted successfully: ', result.ops[0]);
      res.send("Success")
    }
  })
})

app.post('/login', (req,res)=> {
  const email = req.body.email;
  const pass = req.body.password;

  console.log(email,pass)

  db.collection('Users').findOne({Email: email, Password: pass}, (err, succ) => {
    if (succ){
      res.send("Found user")
    }
    else {
      db.collection('Directors').findOne({Email: email, Password: pass}, (err, succ) => {
        if (succ){
          res.send("Found director")
        }
        else {
          res.send("User not found")
        }
      })
    }
  })
})

app.post('/change', (req,res)=> {
  const old = req.body.old;
  const newp = req.body.newp;
  const email = req.body.email;

  console.log(newp,email)

  db.collection('Users').updateOne(
    { Email: email }, // specify the user to update by their username
    { $set: { Password: newp } } // set the new password
  );

  db.collection('Directors').updateOne(
    { Email: email }, // specify the user to update by their username
    { $set: { Password: newp } } // set the new password
  );

  res.send("Success")
})

app.post('/del', (req,res)=> {
  const pass = req.body.old;
  const email = req.body.email;

  console.log(email)

  db.collection('Users').deleteOne({ Email: email }, function(err, result) {
      console.log("Document deleted successfully");
      res.send("Success")
  });
})

// app.get('/aboutus', (req,res)=> {
//   let temp = []
//   db.collection('About_us')
//     .find() 
//     .forEach(elem => temp.push(elem.Mission))
//     .then((result) => {
//       res.status(200).json({msg:"found it!",list:temp});
      
//     })
//     .catch(() => {
//       res.status(500).json({error:"could not fetch documents"})
//     });
// })


