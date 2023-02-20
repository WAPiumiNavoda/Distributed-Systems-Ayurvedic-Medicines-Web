const express = require('express');
const category = require('./data/data');//sample data
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB = require('./config/db');//connect the db
const userRouter = require('./routes/userRoutes');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

//create get request
app.get('/',(req,res)=>{
    res.send('API is running');
})

app.get('/api/category',(req,res)=>{
    res.json(category)
})

// create routes here
app.use('/api/users',userRouter);


const PORT = process.env.PORT || 8080

app.listen(PORT,console.log(`server started on PORT ${PORT} `));
