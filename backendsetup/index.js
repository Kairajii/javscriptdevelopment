const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/routes')

const app = express();
require('dotenv').config();

const PORT = process.env.PORT ||  5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());


mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('Connected to MongoDB'))
.catch((error)=>console.log(error.message));

app.use(router)
app.listen(PORT,()=>{
    console.log(`Server is running on the PORT ${PORT}`)
})