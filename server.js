  

const express = require('express');
const {connectDB} =require('./db');
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
// const bcrypt = require('bcrypt');



  const mongoose = require('mongoose');

 const bodyparser=require('body-parser');

const app = express();

const PORT = process.env.PORT||2000;
 const cors = require('cors');
 app.use(cors());
 app.use(bodyparser.json())
 
connectDB()


app.get("/api/get", async (req, res) => {
  
    try {
      const userId =req.query.userId
      console.log(userId);
        const post = await Post.find({author:userId})
        console.log(post);
         
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
  });





app.post('/users/register',async (req,res)=>{
  try{
    const {username,email,password}=req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username,email, password,role : "USER" });
    console.log(user)
     await user.save();
    res.json(user)
  }catch{
    res.status(500).json({ error: 'Could not fetch user' });
  }
});
app.post('/api/login',async (req,res)=>{
  const{username,password}=req.body;
  console.log(username,password);
  const user = await User.findOne({username,password});
  console.log(user);
  if(user){
    res.status(200).json(user);
  }else{
    res.status(401).json({error:'Invalid username or password'});
  }
});
app.post('/api/posts', async (req, res) => {
  try {
   
    const { title,description,author} = req.body;
    
    const newPost = new Post({ title, description,author}); 
    await newPost.save();
    const user =await User.findById(author);
    if(user){
      user.posts.push(newPost.username);
      await user.save();
    }

    res.status(201).json({ message: 'Post saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to save post' });
  }
});

  app.listen(PORT,() => console.log(`Server running on port ${PORT}`))