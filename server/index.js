const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
// const cors = require("cors");
// const e = require("express");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

const { connectToDb, getDb } = require('./db'); //importing functions from db.js

const app = express();

const path = express("path");

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));
//   app.get("*", (req, res) => {
//     req.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }

// app.use(cors());
// app.use(express.json());

// const port = 8000
// app.listen(port)

// app.listen(process.env.PORT || 3001);

// const uri = "mongodb+srv://zoha:fvelarisr@ngo.a4mmh2z.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// client.connect(success => {
//   const db = client.db("NGOdatabase");

//   app.get("/aboutus", (req, res) => {
//     var abt = db.getCollection("About_us")
//     db.About_us.find({"index":{$eq:"1"}}, {"Mission":1, "_id":0}, function(err, result) {
//       if (err) {
//         console.log([{"Mission":"hili"}]);
//       } else {
//         res.send([{"Mission":"hi"}]);
//       }
//     })
//   });


//   client.close();
// });

let db;
connectToDb((err)=>{
  if (!err){
    //start listening for requests
    app.listen(3000, () => {console.log("app listening on port 3000")});
    db = getDb(); // this will return database connection object

  }
})

app.get('/', (req,res)=> {
  res.status(200).json({msg:"hello"});
    
})

app.get('/aboutus', (req,res)=> {
  let temp = []
  db.collection('About_us')
    .find() 
    .forEach(elem => temp.push(elem.Mission))
    .then((result) => {
      res.status(200).json({msg:"found it!",list:temp});
      
    })
    .catch(() => {
      res.status(500).json({error:"could not fetch documents"})
    });
})




