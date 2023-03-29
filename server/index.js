const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const e = require("express");
const nodemailer = require("nodemailer");
// const bcrypt = require("bcrypt");
const saltRounds = 10;
// var app = require('express')();
var bodyParser = require('body-parser');

const { connectToDb, getDb } = require('./db'); //importing functions from db.js

const app = express();
app.use(cors())
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.json());

const path = express("path");

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));
//   app.get("*", (req, res) => {
//     req.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }

let vol_counter = 1;

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

app.get('/events/get', (req,res) => {
  let eventArr = []
  // console.log("hello0")
  db.collection('Events')
  .find()
  .forEach(ele => eventArr.push(ele))
  .then((resu) => {
    // console.log("hello")
    res.status(200).json({msg:"success",list:eventArr});
  })
  .catch(() => {
    // console.log("hello2")
    res.status(500).json({msg:"error",list:[]});
  })
})
app.get('/getambassadors', (req,res) => {
  let ambassArr = []
  // console.log("hello0")
  db.collection('Ambassador')
  .find()
  .forEach(ele => ambassArr.push(ele))
  .then((resu) => {
    // console.log("hello")
    res.status(200).json({msg:"success",list:ambassArr});
  })
  .catch(() => {
    // console.log("hello2")
    res.status(500).json({msg:"error",list:[]});
  })
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

app.get('/donors', (req,res)=> {
  let donorsArr = [] //name,date,text
  db.collection('Donors')
    .find() 
    .forEach(elem => donorsArr.push(elem))
    .then((result) => {
      res.status(200).json({msg:"success",list:donorsArr});
    })
    .catch(() => {
      res.status(500).json({msg:"error",list:[]});
    });
})

app.post('/addMember', async (req,res)=> {
  const insertResult = db.collection('Members').insertMany([
    {
      "Name": req.body.name,
      "DOB": req.body.dob,
      "Email": req.body.email,
      "CNIC": req.body.cnic,
      "ContactNo": req.body.contactNo,
      "Position": req.body.position,
      "JoiningMsg": req.body.joiningMsg
    }
  ]);
  res.status(200).json({result : insertResult});
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

app.get('/viewSponsors', (req,res)=> {
  let sponsorArr = [] //name,date,text
  db.collection('Sponsorships')
    .find() 
    .forEach(elem => sponsorArr.push(elem))
    .then((result) => {
      res.status(200).json({msg:"success",list:sponsorArr});
    })
    .catch(() => {
      res.status(500).json({msg:"error",list:[]});
    });
})

app.get('/viewbeneficiaries', (req,res)=> {
  let benefitarr = []
  db.collection('Beneficiaries')
    .find() 
    .forEach(elem => benefitarr.push(elem))
    .then((result) => {
      res.status(200).json({msg:"success",list:benefitarr});
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

app.post('/donate', (req,res)=> {
  const email = req.body.email;
  const name = req.body.name;
  const bank = req.body.bank;
  const amt = req.body.amt;

  console.log(email,name,bank,amt)

  db.collection('Donations').insertOne({Email: email, Bank: bank, Name: name, Amount: amt }).then((result) => {
    if (result.acknowledged == true)
    {
      db.collection('Donors').findOne({Email: email}).then((result) => {
        if (result != null)
        {
          let vari = String(parseInt(result.DonationAmount) + amt)
          db.collection('Donors').updateOne(
            { Email: email },
            { $set: { "DonationAmount": vari } }
        )
        res.send("Success")
        }
        else
        {
          db.collection('Donors').insertOne({Email: email, Name: name, DonationAmount: amt}).then((result) => {
            res.send("Success")
          })
        }
      })
    }
  })
})

app.post("/volunteersubmit",(req, res) =>{
  // const {event_name, name, age,vol_email, cnic, contact_num, vol_id = vol_counter++} = req.body
  const event_name = req.body.event_name;
  const name = req.body.name;
  const age = req.body.age;
  const vol_email = req.body.vol_email;
  const cnic = req.body.cnic;
  const contact_num = req.body.contact_num;
  const vol_id = vol_counter++;

  // const voluns = db.collection('Volunteer_Details');
  console.log("hello")
  const volun = {
    Event: event_name,
    Name: name,
    Age: age,
    Vol_email: vol_email,
    Cnic: cnic,
    Contact: contact_num,
    Vol_id: vol_id
  };
  // const events = db.collection('Events');
  db.collection('Volunteer_Details').findOne({Email:vol_email}).then((result) => {
    if (result != null){
      res.send("Volunteer request already submitted")
    }
    else {
      db.collection('Volunteer_Details').insertOne(volun).then((f) => {
        console.log(f.acknowledged)
        res.send("Volunteer Request Submitted")
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

app.post('/addbeneficiary', (req,res)=> {
  const name = req.body.name;
  const contact = req.body.contact;
  const reason = req.body.reason;
  const cnic = req.body.cnic;

  console.log(name,contact, reason)

  const newDoc = {
    CNIC: cnic,
    Reason: reason,
    Name: name,
    Contact: contact
  };

  db.collection('Beneficiaries').findOne({cnic: cnic}).then((resul) => {
    console.log(resul)
    if (resul != null)
    {
      console.log("hello")
      res.send("Already exists")
    }
    else 
    {
      db.collection('Beneficiaries').insertOne(newDoc).then((x) => {
        res.send("Success")
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


