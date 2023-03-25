const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const e = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const { connectToDb, getDb } = require('./db'); //importing functions from db.js

const app = express();
app.use(cors())

const path = express("path");

let vol_counter = 1;



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

app.get('/viewVolunteers', (req,res)=> {
  let volunteersArr = [] //name,date,text
  db.collection('Volunteer_Details')
    .find() 
    .forEach(elem => volunteersArr.push(elem))
    .then((result) => {
      res.status(200).json({msg:"success",list:volunteersArr});
    })
    .catch(() => {
      res.status(500).json({msg:"error",list:[]});
    });
})

app.post('/login', (req,res)=> {
  const email = req.body.email;
  const pass = req.body.password;

  console.log(email,pass)

  const collection = db.collection('Users');
  collection.findOne({ $and: [
    { Email: email },
    { Password: pass }
  ]},
  { projection: { Email: 1, Password: 1 } }, function(err, success) {
    if (err) throw err;
    console.log(success)
    if (success) {
      console.log("Found user");
      res.send("Found user")
    } else {
      console.log("User not found");
      res.send("User not found")
    }
})
})

app.post('/login', (req,res)=> {
  const email = req.body.email;
  const pass = req.body.password;

  console.log(email,pass)

  const collection = db.collection('Users');
  collection.findOne({ $and: [
    { Email: email },
    { Password: pass }
  ]},
  { projection: { Email: 1, Password: 1 } }, function(err, success) {
    if (err) throw err;
    console.log(success)
    if (success) {
      console.log("Found user");
      res.send("Found user")
    } else {
      console.log("User not found");
      res.send("User not found")
    }
})
})

app.post("/volunteersubmit",(req, res) =>{
  const {event_name, name, age,vol_email, cnic, contact_num, vol_id = vol_counter++} = req.body
  const voluns = db.collection('Volunteer_Details');
  console.log("hello")
  // const events = db.collection('Events');
  voluns.findOne({Email:vol_email}, (err, user) =>{
    if (user){
      res.send({message: "Volunteer request already submitted"})

    } else {
      const user = new voluns({
        age,
        cnic,
        contact_num,
        vol_email,
        event_name,
        name,
        vol_id
      })
      user.save(err => {
        if (err){
          res.send(err)
        } else {
          res.send({message:"Volunteer Request Submitted"})
        }
      })
    }
  })

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


