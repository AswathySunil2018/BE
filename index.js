const express = require('express'); 
const app = express();
const mongoose = require('mongoose'); 
const cors = require('cors');
var routes=require('./routes/route');

app.use(cors(
   {
     origin: "http://localhost:4200"
   }
  
 ));
 
app.listen(3000,function check(err){
   if(err)
   console.log("error"); 
   else
   console.log("Started");
});
mongoose.connect("mongodb://localhost:27017/petsviewDB")
.then((success)=>{app.listen(3001);
console.log("successfully connected to DB");})
.catch((err)=>console.log(err.message));


app.use(express.json());
app.use(routes);