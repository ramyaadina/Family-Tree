var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require("body-parser");

//connect db
mongoose.connect('mongodb://localhost:27017/FamilyTree')
mongoose.Promise = global.Promise;

app.use(bodyParser.json())
app.use('/details',require('./routes/details'))

//error handling

app.use(function(err,req,res,next){
    //console.log(err)
    res.status(422).send({error:err.message})
})


app.listen(3001,function(){
console.log('connected');

})
