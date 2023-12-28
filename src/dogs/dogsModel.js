var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var dogsSchema=new Schema({
  name:{
    type:String,
    required:true
  },
 image:{
    type:String,
    required:true
  },
  coat:{
    type:String,
    required:true
  },
 origin:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
 hypoallergenic:{
    type:String,
    required:true
  },
  color:{
    type:String,
    required:true
  },
 food:{
    type:String,
    required:true
  },
  temperament:{
    type:String,
    required:true
  },
 life:{
    type:String,
    required:true
  },
  weight:{
    type:String,
    required:true
  },
 desc:{
    type:String,
    required:true
  },

});

module.exports=mongoose.model('dogs',dogsSchema);