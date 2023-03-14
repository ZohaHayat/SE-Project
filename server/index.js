const express = require("express");
const mysql = require("mysql");
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