const express = require("express")
const mongoose = require("mongoose");


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bharath:bharath@cluster0.rmjym.mongodb.net/biowebsite?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// const url = "mongodb+srv://bharath:<password>@cluster0.rmjym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const url ="mongodb://localhost:27017/registration"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected.....!"))
    .catch(err => console.log(err));


module.exports;