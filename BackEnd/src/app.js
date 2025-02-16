const express = require('express');//to create server
const aiRoutes = require('./routes/ai.route') 
const cors = require('cors')

const app = express() //creates a new instance of server created by express in app

app.use(cors())//express doesn't share its content with anyone not even with the frontend so should import & use  'cors'

//to not get re.body undefined , this is middleware
app.use(express.json())


//basic route creation
app.get('/',(req,res)=>{
    res.send('Hello World');
})


app.use('/ai' , aiRoutes)


module.exports = app;  //export app