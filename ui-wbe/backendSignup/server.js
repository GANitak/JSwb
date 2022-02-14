const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesURLS = require('./routes/routes');
const cors = require('cors');

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("DB connected"))

//Test the BACKEND


//MIDDLEWARE 
app.use(express.json())
app.use(cors())

// '/API' is a BASE_PATH (you can call it what ever you want ex:: www.ganitak.com/API/signup)
app.use('/API', routesURLS)
app.listen(3002, () =>console.log("server 3..2 is running"))

