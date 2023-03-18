const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const { connectToDb, getDb } = require('./db');

const app = express();

// db connection
let db;
//call the connect to db function
//need to pass in a callback function
connectToDb((err)=>{
  // if the connection is sucessful then we want to start listening to requests
  // if sonnection is sucess then err will be null
  if (!err){
    //start listening for requests
    app.listen(3000, () => {console.log("app listening on port 3000")});
    db = getDb(); // this will return database connection object

  }
})

// app.get('/random', (req,res)=> {
//   let volunteers = []
//   db.collection('volunteer_details')
//     .find() //cursor toArray forEach
//     //returns a cursor, which points tp a set of documents outlined by our query
//     .sort({name:1})
//     .forEach(volunteer => {
//       volunteers.push(volunteer)
      
//     });
// })


app.get('/random', (req,res)=> {
  let volunteers = []
  db.collection('volunteer_details')
    .find() 
    .sort({name:1})
    .forEach(volunteer => volunteers.push(volunteer))
    .then(() => {
      res.status(200).json(volunteers);
    })
    .catch(() => {
      res.status(500).json({error:"could not fetch documents"})
    });
})

app.get('/random/:id', (req,res) => {
  if (ObjectId.isValid(req.params.id)){
    db.collection('volunteer_details')
    .findOne({_id: new ObjectId(req.params.id)})
    .then(doc => {res.status(200).json(doc)})
    .catch(() => {
      res.status(500).json({error:"could not fetch specific volunteer"})
    });

  }
  else{
    res.status(500).json({error:"could not find specific volunteer"})
  }
  
  

})