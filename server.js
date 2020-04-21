const express = require("express")
const application = require("./application");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/FinalProject", { useNewUrlParser: true })
const port = 6969;



const server = application.listen(port, ()=>{
    console.log(`...Server running on localhost:${port}...`);
})