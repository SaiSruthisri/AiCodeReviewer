require('dotenv').config()
const app = require('./src/app')  //imported app by providing its path



//app.listen means start the server
//callback here is to handle anything req when server starts
app.listen(3000 , ()=>{
         console.log('server is running on http://localhost:3000')
})