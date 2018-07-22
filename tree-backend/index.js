const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
var path=require('path');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Bookktree')


var b=require('./models/books')
var app=express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname +'/public')));
app.use(bodyParser.json());     
app.get('/',(req,res)=>
{
    res.render('home');

})
app.post('/insert',(req,res)=>
{
    var bb=new b({
        _id:req.body.id,
        child:req.body.child,
        parent:req.body.parent,
    })
    bb.save().then(bs=>
    {
        console.log("saved",bs)
    }).catch(err=>console.log("Not saved ",e))
    
    res.render("show")

})
app.get('/tree',(req,res)=>
{
   b.books.aggregate([
       {
           $graphLookup:{
               from:"books",
               startWith:"$parent",
               connectFromField:'parent',
               connectToField:'child',
               as:'parentHierarchy'
           }
       }
   ]).then(x).catch(e=>console.log())
   //console.log(x)
   res.send('Sucess')
})
app.listen(9000,()=>console.log("Server is running at 9000"))