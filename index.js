// require('./Connetion');
const express = require('express');
const cors = require('cors');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config({path:'./.env'})
mongoose.connect(process.env.MONGOURI).then(()=>console.log("MongoDB Connected")).catch((err)=>console.log(err));

const Schema = require('./Schema/Schema');
  

const app = express();

app.use(cors());    

app.use(express.json());
  

app.post('/register',async(req,res)=>{
     
    const data =await Schema.create(req.body);
    res.send("Suceessfully Registered");
    
     
});
app.post('/search',async(req,res)=>{

    //   console.log(req.body);
    //    console.log(req.query);
    const data =await Schema.find(req.body);
      if(!data)
        {
            res.send("Not Found");
        }
        res.status(200).send(data);
})
 



app.listen(process.env.PORT,()=>{
    console.log(`this is running port ${process.env.PORT}`);
})
