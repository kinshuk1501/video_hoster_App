const express = require('express');
const app = express();
const CORS=require("cors")
const port = 3001;
const mongoose = require('mongoose');
const userrouter=require("./Controller/usercontroller")
const postrouter=require("./Controller/Postcontroller")
const Bodyparser = require('body-parser');

app.use(Bodyparser.json());

app.use(CORS());


app.use("/user",userrouter)

app.use("/post",postrouter)


mongoose.connect(
  'mongodb+srv://abc:abc@videodb.vjztp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true},
  () => console.log('Connected')
);
app.listen(port, () => console.log(`Connect Port No:- ` + port));
