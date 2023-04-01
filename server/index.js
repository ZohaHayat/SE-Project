const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
app.get('/directorPage/getambassadors', (req,res) => {
  let ambassArr = []
  db.collection('Ambassador')
  .find()
  .forEach(ele => ambassArr.push(ele))
  .then((result) => {
    console.log("hello0")
    let l = ambassArr.length
    let new_l = [];
    for (let i = 0; i < l; i++){
      if (ambassArr[i]['Status'] == 'Completed'){
        continue
      }
      else{
        new_l.push(ambassArr[i])
      }
    }
    // console.log("hello")
    res.status(200).json({msg:"success",list:new_l});
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

// Ayesha Masood
app.get('/ambassadorApplications', (req,res)=> {
  let appsArr = [] 
  db.collection('Ambassador_Applications')
    .find() 
    .forEach(elem => appsArr.push(elem))
    .then((result) => {
      res.status(200).json({msg:"success",list:appsArr});
    })
    .catch(() => {
      res.status(500).json({msg:"error",list:[]});
    });
})

app.put('/ambassadorApplications/:id', (req, res) => {
  const appId = req.params.id;
  const updatedStatus = req.body.Status;
  db.collection('Ambassador_Applications')
    .updateOne({Application_ID: appId}, {$set: {Status: updatedStatus}})
    .then(() => {
      res.status(200).json({msg: 'success'});
    })
    .catch(() => {
      res.status(500).json({msg: 'error'});
    });
});

app.post('/addAmbassador', async (req,res)=> {
  const insertResult = db.collection('Ambassador').insertMany([
    {
      "Name": req.body.Name,
      "Email": req.body.Email,
      "ContactNo": req.body.contactNo,
      "Address": "",
      "DOB": req.body.dob,
      "Status": "Active",
    }
  ]);
  res.status(200).json({result : insertResult});
})

// app.post('/careers', async (req,res)=> {
//   // query the database table 'Ambassador_Applications' to retrieve the max application IDs
//   const maxIdResult = await db.collection('Ambassador_Applications')
//     .find({}, { "Application ID": 1 })
//     .sort({ "Application ID": -1 })
//     .limit(1)
//     .toArray();
//   // unique Application_ID generation
//   const newId = maxIdResult.length === 0 ? 1 : maxIdResult[0]["Application ID"] + 1;
//   // insert into 'Ambassador_Applications' the new entry
//   const insertResult = db.collection('Ambassador_Applications').insertMany([
//     {
//       "Application ID": newId,
//       "Email": req.body.email,
//       "Name": req.body.name,
//       "Contact no": req.body.contact,
//       "DOB": req.body.age,
//       "Reason": req.body.why,
//       "Institution": req.body.inst,
//       "Status": req.body.status
//     }
//   ]);
//   res.status(200).json({result : insertResult});
// })

app.post('/careers', async (req,res)=> {
  try {
    // query the database table 'Ambassador_Applications' to retrieve the max application ID
    const maxIdResult = await db.collection('Ambassador_Applications')
      .find({}, { "Application_ID": 1 })
      .sort({ "Application_ID": -1 })
      .limit(1)
      .toArray();
    // unique Application_ID generation
    const newId = maxIdResult.length === 0 ? 1 : maxIdResult[0]["Application_ID"] + 1;
    // insert into 'Ambassador_Applications' the new entry
    const insertResult = await db.collection('Ambassador_Applications').insertOne({
        "Application_ID": newId,
        "Email": req.body.email,
        "Name": req.body.name,
        "Contact_no": req.body.contact,
        "DOB": req.body.dob,
        "Reason": req.body.why,
        "Institution": req.body.inst,
        "Status": req.body.status
    });
    res.status(200).json({result : insertResult.ops});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Error inserting document into database.'});
  }
})

app.get('/donors', (req,res)=> {
app.get('/directorPage/donors', (req,res)=> {
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
})

app.post('/directorPage/addMember', async (req,res)=> {
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

app.get('/directorPage/viewVolunteers', (req,res)=> {
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

app.get('/directorPage/viewSponsors', (req,res)=> {
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

app.get('/directorPage/viewbeneficiaries', (req,res)=> {
  let benefitarr = []
  db.collection('Beneficiaries')
    .find() 
    .forEach(elem => benefitarr.push(elem))
    .then((result) => {
      let len = benefitarr.length
      let newarr = []
      for (let i=0; i<len; i++)
      {
        if (benefitarr[i]['Status'] == "Removed/Completed")
        {
          continue
        }
        else
        {
          newarr.push(benefitarr[i])
        }
      }
      res.status(200).json({msg:"success",list:newarr});
    })
    .catch(() => {
      res.status(500).json({msg:"error",list:[]});
    });
})

app.get('/directorPage/members', (req,res)=> {
  let memberArr = [] //name,date,text
  db.collection('Members')
    .find() 
    .forEach(elem => {if(elem.status=='active') {memberArr.push(elem)}})
    .then((result) => {
      res.status(200).json({msg:"success",list:memberArr});
    })
    .catch(() => {
      res.status(500).json({msg:"error",list:[]});
    });
})

app.post('/directorPage/ambassremove',(req,res) =>{
  const name = req.body.name
  const email = req.body.email
  console.log("hello2")


  db.collection('Ambassador').findOne({Name:name, Email: email})
  .then((res) =>{
    if (res != null){
      if (res.Status == 'Active'){
        db.collection('Ambassador').updateOne(
          {Email:email, Name:name},
          {$set:{"Status":"Completed"}}
      )
      // res.send("Success")
      }
    }
  })
  .catch(err =>{
    console.log(err)
  })
})

app.post('/directorPage/members',(req,res)=>{
  const id=req.body.id;
  const memstatus=req.body.memstatus;
    
  db.collection('Members').updateOne(
    { _id: new ObjectId(`${id}`) },
    { $set: { status: memstatus } }
    )
    res.send("success")
    


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

app.post('/okay', (req,res)=> {
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

const stripe = require('stripe')('sk_test_51Mp7mTFJDc8oaStDTeaSLVZxTszm4hGy6lGCkCn14e9vcgGDiaEdrYV4dux1S422XalmLpKytqJPpBPC7ekqTaW500zcIyztTu');

app.post('/donate', async (req,res)=> {
  const email = req.body.email;
  const name = req.body.name;
  const bank = req.body.bank;
  const amt = req.body.amt;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'pkr',
          product_data: {
            name: 'Donation',
          },
          unit_amount: amt*100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    metadata: {'bank_name': bank},
    success_url: `http://localhost:3001/success?name=${name}&email=${email}&bank=${bank}&amt=${amt}`,
    cancel_url: 'http://localhost:3001/failure',
    customer_email: email,
    client_reference_id: name
  });

  console.log(session)

  console.log(email,name,bank,amt)
  res.send(session)
})

// app.post('/donate2', async (req,res)=> {
//   const email = req.body.email;
//   const name = req.body.name;
//   const bank = req.body.bank;
//   const amt = req.body.amt;

//   const session = await stripe.subscriptions.create({
//     items: [{price: amt}],
//     billing_cycle_anchor: 'year',
//     currency: 'pkr',
//     payment_behavior: 'default_incomplete',
//     expand: ['latest_invoice.payment_intent'],
//     // success_url: `http://localhost:3001/success2?name=${name}&email=${email}&bank=${bank}&amt=${amt}`,
//     // cancel_url: 'http://localhost:3001/failure',
//   });
  

//   // const session = await stripe.plans.create({
//   //   payment_method_types: ['card'],
//   //   line_items: [
//   //     {
//   //       price_data: {
//   //         currency: 'pkr',
//   //         product_data: {
//   //           name: 'Monthly Donation',
//   //         },
//   //         unit_amount: amt*100,
//   //       },
//   //       quantity: 1,
//   //     },
//   //   ],
//   //   mode: 'subscription',
//   //   metadata: {'bank_name': bank},
//   //   success_url: `http://localhost:3001/success2?name=${name}&email=${email}&bank=${bank}&amt=${amt}`,
//   //   cancel_url: 'http://localhost:3001/failure',
//   //   customer_email: email,
//   //   client_reference_id: name,
//   //   interval: 'month',
//   //   interval_count: 1,
//   // });

//   console.log(session)

//   console.log(email,name,bank,amt)
//   res.send(session)
// })

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

app.post('/storeSub', (req,res) =>{
  const email = req.body.subscriberEmail;
  const subscriber = {
    Email: email
  }
  
  db.collection('Newsletter').findOne({Email:email}).then((result) => {
    if (result != null){
      res.send("Already Subscribed")
    }
    else {
      db.collection('Newsletter').insertOne(subscriber).then((f) => {
        res.send("Successfully Subscribed")
      })


    }
  })  
})

app.post('/change', (req,res)=> {
  const old = req.body.old;
  const newp = req.body.newp;
  const email = req.body.email;

  console.log(newp,email)

  // db.collection('Users').updateOne(
  //   { Email: email }, // specify the user to update by their username
  //   { $set: { Password: newp } } // set the new password
  // );

  db.collection('Directors').updateOne(
    { Email: email, Password: old }, // specify the user to update by their username
    { $set: { Password: newp } } // set the new password
  ).then((response) => {
    if (response.acknowledged)
    {
      res.send("Success")
    }
    else
    {
      res.send("Failure")
    }
  });

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

app.post('/directorPage/addbeneficiary', (req,res)=> {
  const name = req.body.name;
  const contact = req.body.contact;
  const reason = req.body.reason;
  const cnic = req.body.cnic;

  console.log(name,contact, reason)

  const newDoc = {
    CNIC: cnic,
    Reason: reason,
    Name: name,
    Contact: contact, 
    Status: "In progress"
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

app.post('/directorPage/removebeneficiary', (req,res)=> {
  const cnic = req.body.cnic;

  db.collection('Beneficiaries').findOne({CNIC: cnic}).then((resul) => {
    // console.log(resul)
    if (resul != null)
    {
      if (resul.Status == "In progress")
      {
        db.collection('Beneficiaries').updateOne(
          { CNIC: cnic },
          { $set: { "Status": "Removed/Completed" } }
      )
      res.send("Success")
      }
    }
  })
})


app.get('/getmemberapps', (req,res)=> {
  let memberArr = [] //name,date,text
  db.collection('Employee_Applications')
    .find() 
    .forEach(elem => {if(elem.status=='pending') {memberArr.push(elem)}})
    .then((result) => {
      res.status(200).json({msg:"success",list:memberArr});
    })
    .catch(() => {
      res.status(500).json({msg:"error",list:[]});
    });
})

app.get('/aboutus', (req,res)=> {
  let abt_arr = [] //name,date,text
  db.collection('About_us')
    .find() 
    .forEach(elem => abt_arr.push(elem))
    .then((result) => {
      res.status(200).json({msg:"success",list:abt_arr});
    })
    .catch(() => {
      res.status(500).json({msg:"error",list:[]});
    });
})

app.post('/deleteStory', (req,res)=> {
  // console.log(req);

  
  db.collection('Stories').deleteOne({ "Name": req.body.name,"Date":req.body.date,"Text":req.body.text}).then((result) => {
    console.log("Story deleted successfully");
      res.send("Success")
  })
  .catch((err)=>{res.send("Fail")})
 
})

app.post('/addstory', (req,res)=> {
  console.log("add story called");
  db.collection('Stories').findOne({ "Name": req.body.name}).then((result) => {
    console.log(result)
    if (result!==null){
      console.log("This name already exists")
      res.send("Duplicate")
    }
    else{
      db.collection('Stories').insertOne({ "Name": req.body.name, "Date":req.body.date, "Text":req.body.text}).then((result) => {
        console.log("Story added successfully");
        res.send("Success")
      })
      .catch((err)=>{res.send("Fail")})
    }
    
  })
  .catch((err)=>{res.send("Fail")})

  

  
  
 
})

app.post('/accept_members', (req,res)=> {
  const Name = req.body.Name;
  const DOB = req.body.DOB;
  const Email =req.body.Email;
  const CNIC =req.body.CNIC;
  const ContactNo = req.body.ContactNo;
  const Position = req.body.Position;
  const JoiningMsg = req.body.JoiningMsg;
  const status = req.body.status;

  // console.log(name,contact, reason)

  const newDoc = {
    Name : Name,
    DOB : DOB,
    Email :Email,
    CNIC :CNIC,
    ContactNo : ContactNo,
    Position : Position,
    JoiningMsg : JoiningMsg,
    status : status
  };

  db.collection('Members').insertOne(newDoc).then((x) => {
  db.collection('Employee_Applications').updateOne(
    { CNIC: CNIC },
    { $set: { status: status} }
    
    )
    res.send("Success")
  })
})

app.post('/reject_members', (req,res)=> {
  
  const status= req.body.status
  const CNIC= req.body.cnic;
  db.collection('Employee_Applications').updateOne(
    { CNIC: CNIC },
    { $set: { status: status} }
    
    )
    res.send("Success")
  })


app.post('/forgotpass', (req,res)=> {

  const email= req.body.email
  const pass= req.body.password;
  db.collection('Directors').updateOne(
    { Email: email },
    { $set: { Password: pass} }
    
    )
    res.send("Success")
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


