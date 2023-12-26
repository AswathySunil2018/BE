var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var categorySchema=new Schema({
  Cat_name:{
    type:String,
    required:true
  }
 
});

module.exports=mongoose.model('categories',categorySchema);