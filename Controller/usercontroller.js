const express = require('express');

const router = express.Router();
const app = express();
const User = require('../models/User');
const Bodyparser = require('body-parser');

 app.use(Bodyparser.json());

var urlencodedParser = Bodyparser.text();

router.post('/register',urlencodedParser, async (req, res) => {
  const data=JSON.parse(req.body)
  console.log( (req.body));
  const user = new User({
    userId: data.userId,
    username: data.username,
    email: data.email,
    password: data.password,
  });
  try {
    const usersaved = await user.save();
    res.send(usersaved._id);
  } catch (err) {
    res.send("False");
  }
});

router.post('/login', urlencodedParser, async (req, res) => {
  const data=JSON.parse(req.body);
  try{
  const usertoreturn = await User.findOne(
    { userId: data.userId },
    { userId: 1, password: 1 }
  );
  if(usertoreturn.password!=data.password)
  {
    res.send("Fasle");
  }
  else{

  res.send(usertoreturn._id);
  }
  }
  catch(err){
    res.send("False");
  }
  
});

router.get('/', async (req, res) => {
  const user = await User.find({},{password:0});
  res.json(user);
});

module.exports = router;
