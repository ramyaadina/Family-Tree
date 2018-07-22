var express = require('express')
var router = express.Router()

var Detail = require('../models/userData')

router.get('/data',(req,res,next)=>{
    res.send({type:'GET'})
    })
    

router.post('/addperson',(req,res,next)=>{
    // Detail.create(req.body).then(function(dat){
    //     console.log(dat)
    //     res.send(dat)
    // }).catch(next)
    console.log(req.body.relationship)
    if(req.body.relationship=='new')
    {
        var userData = new Detail({
            Name:req.body.Name,
            Gender:req.body.Gender
        })
        userData.save()
        .then(details=>{
            res.send(details) 
        })
        .catch(err=>{
           console.log(err);
           res.status(400).send("not saved!");
        })
    }
    
})
router.put('/addperson/:id',(req,res,next)=>{
     if(req.body.relationship=='parents')
    {
      Detail.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,parents)=>{
          if(err) return res.status(500).send(err)
          return res.send(parents)
      })
    }
})

// router.get('/further/:user',(req,res,next)=>{
//     console.log(req.params.user)

//  //var userData = new Detail({
//     //Name = Detail.findParent(req.params.user)
//  //})
//  //var name = Detail.findParent()
//  console.log('inside function');
 
//  //console.log(Detail.findParent(req.params.user))
//  //res.send(Detail.findParent(req.params.user))
//  var name = Detail.findParent(req.params.user)
//  console.log(name);
 
//  res.send(name)
// })


router.post('/further/:user',(req,res,next)=>{

    Detail.findOne({'Name':req.params.user},(err,others)=>{
        if(err) throw err
        else
        {
       console.log(others.Parents.Father)
       //res.send(others.Parents.Father)
        var userData = new Detail({
            Name: others.Parents.Father,
            Gender:req.body.Gender,
            Parents:req.body.Parents,
            Children:[req.params.user,others.Gender],
            Spouse:others.Parents.Mother
        })
         userData.save()
         .then(details=>{
             res.send(details)
         })
         .catch(err=>{
            console.log(err);
            res.status(400).send("not saved!");
         })
        }
    })
    // var userData = new Detail({

    // })
})

module.exports = router

