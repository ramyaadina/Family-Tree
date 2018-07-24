var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/FamilyTree')

const gendertype = ["male","female","transgender"]

var detailsSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Gender: {
        type: String,
        enum: gendertype
    },
    Parents:{
        Father:String,
        Mother:String
    },
    Children:[],
    Spouse:String,
    Siblings:[]
})
 

// detailsSchema.methods.getParents = function(user)
// {
//     this.findOne({'Name':user},function(err,others){
//         // console.log('inside method')
//         // console.log(others.Parents.Father)
//         // console.log(others.Parents)
//         return others.Parents.Father
//     })
// }



const Detail = mongoose.model('detail',detailsSchema)
module.exports = Detail

module.exports.findParent = function(user){
Detail.findOne({'Name':user},(err,others)=>{
    if(err) throw err
    else
    console.log('inside exports')
    console.log(others.Parents.Father);
    
    return others.Parents.Father
})
}
