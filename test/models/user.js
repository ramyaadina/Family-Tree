var mongoose=require('mongoose');
var bcrypt=require('bcrypt-nodejs')

var userSchema= mongoose.Schema({
    name:String,
    password:String,

});
userSchema.methods.encryptPassowrd=(password)=>


{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null)

}

module.exports=mongoose.model('user',userSchema);