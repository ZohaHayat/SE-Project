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
app.use(express.json());

const path = express("path");

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));
//   app.get("*", (req, res) => {
//     req.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }



let db;
connectToDb((err)=>{
  if (!err){
    //start listening for requests
    // app.listen(process.env.PORT || 3001);
    // console.log("app listening on port 3000")
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

app.post('/signup', (req,res)=> {
  const email = req.body.email;
  const pass = req.body.password;
  const fname = req.body.fname;
  const lname = req.body.lname;

  const name = fname + " " + lname;

  console.log(email,pass,fname,lname)

  const newDoc = {
    Email: email,
    Password: pass,
    Name: name
  };

    db.collection('Users').findOne({Email: email, Password: pass, Name: name}).then((resul) => {
      console.log(resul)
      if (resul != null)
      {
        console.log("hello")
        res.send("User already exists")
      }
      else 
      {
        db.collection('Users').insertOne(newDoc).then((x) => {
          console.log(x.acknowledged)
          res.send("Success")
          // if (result.acknowledged === true)
          // {
          //   res.send("Success")
          // }
          // else
          // {
          //   res.send("Error")
          // }
        })
      }
    })
})

app.post('/login', (req,res)=> {
  const email = req.body.email;
  const pass = req.body.password;

  console.log(email,pass)

  db.collection('Users').findOne({Email: email, Password: pass}).then((result) => {
    if (result != null)
    {
      res.send("Found user")
    }
    else
    {
      db.collection('Directors').findOne({Email: email, Password: pass}).then((result) => {
        if (result != null)
        {
          res.send("Found director")
        }
        else
        {
          res.send("User not found")
        }
      })
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

  db.collection('Users').deleteOne({ Email: email }).then((result) => {
    console.log("Document deleted successfully");
      res.send("Success")
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


