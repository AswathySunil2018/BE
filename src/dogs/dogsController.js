var dogsModel=require('./dogsModel')


var dogsControllerFun=async(req,res)=>{
    try{
 
dogsModel.find().then((result)=>{
    res.status(200).send(result);
  
   
 })
 }
  catch(error){
        res.status(400).send(error);  
    }
}



module.exports={dogsControllerFun};