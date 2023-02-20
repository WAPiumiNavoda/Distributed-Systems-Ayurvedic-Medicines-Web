const express = require('express');
const notes = require('./data/data');//sample data
const dotenv = require('dotenv');

const app = express();
dotenv.config();

//create get request
app.get('/',(req,res)=>{
    res.send('API is running');
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})

const PORT = process.env.PORT || 8080

app.listen(PORT,console.log(`server started on PORT ${PORT} `));
