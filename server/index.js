const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const e = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const { connectToDb, getDb } = require('./db'); //importing functions from db.js

const app = express();

const path = express("path");

let db;
connectToDb((err)=>{
  if (!err){
    //start listening for requests
    app.listen(3000, () => {console.log("app listening on port 3000")});
    db = getDb(); // this will return database connection object

  }
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




