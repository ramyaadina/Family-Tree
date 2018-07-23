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
          //return res.send(parents)
        console.log(parents)
          var newData = new Detail({
              Name:req.body.Parents.Father,
              Spouse:req.body.Parents.Mother
          })
          newData.save()
          .then(details=>{res.send(details)})
          .catch(err=>{console.log(err);
            res.status(400).send("not saved!")
          })
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
// })\

module.exports = router

