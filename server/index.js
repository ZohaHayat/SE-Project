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
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});