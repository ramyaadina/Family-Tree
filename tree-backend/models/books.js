var mongo=require('mongo')
var mongoose=require('mongoose')
var bookschema=  mongoose.Schema({
   _id:String,
   child:String,
   parent:String,
   
})
module.exports= mongoose.model('book',bookschema);
