const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const e = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

const path = express("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.use(cors());
app.use(express.json());

// const port = 8000
// app.listen(port)

app.listen(process.env.PORT || 3001);

const uri = "mongodb+srv://zoha:fvelarisr@ngo.a4mmh2z.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect(success => {
  const db = client.db("NGOdatabase");

  app.get("/aboutus", (req, res) => {
    var abt = db.getCollection("About_us")
    db.About_us.find({"index":{$eq:"1"}}, {"Mission":1, "_id":0}, function(err, result) {
      if (err) {
        console.log([{"Mission":"hili"}]);
      } else {
        res.send([{"Mission":"hi"}]);
      }
    })
  });


  client.close();
});



