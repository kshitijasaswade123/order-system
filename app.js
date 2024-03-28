const express = require('express');
const mongoose = require("mongoose")
require('dotenv/config');
const orderRoute = require("./Route/Orde_Route")
const cors = require("cors");

const app =express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("HOME")
})
app.use('/api/orderdata',orderRoute);

app.listen(process.env.PORT);

async function dbconnection(){
    try {
        const res = await mongoose.connect(process.env.CONNECT);
        const data = await res.default;
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
dbconnection();

