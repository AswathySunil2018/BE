var categoryModel=require('./categoryModel')


var categoryControllerFun=async(req,res)=>{
    try{
 
 categoryModel.find().then((result)=>{
    res.status(200).send(result);
  
   
 })
 }
  catch(error){
        res.status(400).send(error);  
    }
}



module.exports={categoryControllerFun};