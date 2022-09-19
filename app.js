const express =  require("express")
const app =  express()

const mongoose = require('mongoose');
const db = "mongodb://mymongo:27017/chatApp"

mongoose.connect(db).then(() => {
    console.log("DB is Connected..");
}).catch(()=>{
    console.log("Error while connecting a db...");
});


app.get("/login",(req,res) => {
    console.log("login routes")
    res.status(200).json({
        "msg":"login routes"
    });
})

app.listen(3000,() => {
    console.log(`app is running on ${3000}`)
})