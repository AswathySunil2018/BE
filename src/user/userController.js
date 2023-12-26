var userModel=require('./userModel')

var signinUserControllerFun=async(req,res)=>
{
    try{
        const body=req.body
        const userModelData=new userModel()
        userModelData.name=body.name
        userModelData.email=body.email
        userModelData.password=body.password
        await userModelData.save();

        res.status(200).send({
            "status":true,"message":"user created successfully"
        });
    }
    catch(error){
       res.status(400).send(error);
    }
}
var loginUserControllerFun=async(req,res)=>{
    try{
 const body=req.body
 userModel.find(req.params.email).then((result)=>{
    res.status(200).send(result);
  
   
 })

       
    }
 
    
    catch(error){
        res.status(400).send(error);  
    }
}



module.exports={signinUserControllerFun,loginUserControllerFun};