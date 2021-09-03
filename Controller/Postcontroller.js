let multer = require('multer');
let express = require('express');
let app = express();
let upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();
const Post=require("../models/Post");


router.post('/single', upload.single('video'),async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    userId: req.body.id,
    Video: req.file.buffer,
    video_name: req.file.originalname
  });
  try{
    await post.save();
    res.send(post.userId)
  }
  catch(err)
  {
res.send("False");
  }
  
});

router.post("/",(req,res)=>{
    console.log(req.body);
    res.send("he");
})

router.get('/video/:vidid', async (req, res) => {
  const vid=req.params["vidid"]
  try{
  const data=await Post.findById(vid);
  res.send(data.Video);
  }
  catch{
res.send('False');
  }
});

router.get("/allposts",async (req,res)=>{
  const post=await Post.find({},{Video:0})
  res.json(post);
})
module.exports = router;