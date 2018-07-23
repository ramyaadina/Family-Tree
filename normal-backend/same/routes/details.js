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
    if(req.body.relationship == 'new')
    {
        var userData = new Detail({
            Name:req.body.Name,
            Gender:req.body.Gender,
            
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
router.put('/addperson/:user',(req,res,next)=>{
     if(req.body.relationship == 'parents')
    {
      Detail.findOneAndUpdate(req.params.user,req.body,{new:true},(err,parents)=>{
          if(err) return res.status(500).send(err)
          //return res.send(parents)
        console.log(parents)

        //Adding father in a new document
          var Papa = new Detail({
              Name:req.body.Parents.Father,
              Spouse:req.body.Parents.Mother,
              Children:req.params.user,
              Gender:"male"
          })
          Papa.save()
          .then(details=>{res.send(details)})
          .catch(err=>{console.log(err);
            res.status(400)
          })

        //Adding mother in a new document
          var Mama = new Detail({
            Name:req.body.Parents.Mother,
            Spouse:req.body.Parents.Father,
            Children:req.params.user,
            Gender:"female"
        })
        Mama.save()
        .then(details=>{res.send(details)})
        .catch(err=>{console.log(err);
          res.status(400).send("not saved!")
        })
      })
    }
    else if(req.body.relationship == 'spouse')
    {
        Detail.findOneAndUpdate(req.params.user,req.body,{new:true},(err,partner)=>{
            if(err) return res.status(500).send(err)
            console.log(partner)
            

            //Adding Spouse gender
            var spGender = (partner.Gender == "female") ? "male" : "female"


            //Adding partner as a new document

            var partner = new Detail({
                Name:req.body.Spouse,
                Spouse:req.params.user,
                Gender:spGender
                //Children:partner
            })
            partner.save()
            .then(details=>{res.send(details)})
            .catch(err=>{console.log(err);
              res.status(400).send("not saved!")
            })
        })
    }
    else if(req.body.relationship == 'children')
    {
        Detail.findOneAndUpdate(req.params.user,req.body,{new:true},(err,bacche)=>{
            if(err) return res.status(500).send(err)
            console.log(bacche)

            //Adding chidren as a new document

            var child = new Detail({
                Name:req.body.Children,
                Gender:req.body.gender,
                Parents:{Father:bacche.Spouse,
                         Mother:req.params.user}
            })
            child.save()
            .then(details=>{res.send(details)})
            .catch(err=>{console.log(err);
              res.status(400).send("not saved!")
            })
          })
        }

    else if(req.body.relationship == 'siblings')
    {
        Detail.findOneAndUpdate(req.params.user,req.body,{new:true},(err,baibehen)=>{
            if(err) return res.status(500).send(err)
            console.log(baibehen)

            //Adding sibling as a new document
            var sibling = new Detail({
                Name:req.body.Siblings,
                Gender:req.body.gender,
                Parents:{
                    Father:baibehen.Parents.Father,
                    Mother:baibehen.Parents.Mother
                },
                Siblings:req.params.user
            })
            sibling.save()
            .then(details=>{res.send(details)})
            .catch(err=>{console.log(err);
            res.status(400).send("not saved!")})
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

