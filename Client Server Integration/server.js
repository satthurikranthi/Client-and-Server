const express = require("express");

const cors = require("cors");

let app  =  express();
app.use(cors());


app.get("/HerosNames",async(req,res)=>{

let actorsArr  = ["Nani","vijay","prabhas","allu arjun","charan"];


res.json(actorsArr)


})

 app.get("/dancersName",(req,res)=>{

 let dancersName = ["shekar","ganesh","chitti","kanna"];

 res.json(dancersName);

 })


app.listen(1586,()=>{
    console.log(`Listening to port 1586`);

})