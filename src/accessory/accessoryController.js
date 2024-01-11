var accessoryModel=require('./accessoryModel')


var accessoryControllerFun=async(req,res)=>{
    try{
 
accessoryModel.find().then((result)=>{
    res.status(200).send(result);
  
   
 })
 }
  catch(error){
        res.status(400).send(error);  
    }
}



module.exports={accessoryControllerFun};