const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

const app = express()
var cors = require('cors');

const hostname = '127.0.0.1';
const port = 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*',cors());


mongoose.connect('mongodb+srv://prashanna:Prashanna11@cluster1.6qhu0jn.mongodb.net/?retryWrites=true&w=majority')
.then(res => {
    console.log("connected to db successfully");
}).catch(err => {
    console.log(err);
});
// rgRYTUUesEWTweVs

app.use('/api/users',authRoute);
app.use('/api/users',userRoute);


app.listen(port, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});