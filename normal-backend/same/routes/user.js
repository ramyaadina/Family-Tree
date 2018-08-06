var express=require('express');
var router=express.Router();
var passport=require('passport')



/// post /users/register params name and password

router.use ('/', (req, res, next) => {
    console.log("how e")
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Methods', '*')
    // res.header('Access-Control-Allow-Methods', 'POST')
    res.header('Access-Control-Allow-Headers', '*')
    next()

})


// router.get('/login',(req,res)=>
// {
//     res.render('login')

// })
// router.get('/register',(req,res)=>
// {
//     res.render('register')

// })

// router.get('/users',(req,res)=>
// {    console.log("how teststtt")

//     res.send({type:get})

// })

router.post('/users/register',passport.authenticate('local.register',{
    successRedirect:'/details/addperson',
    failureRedirect:'/register',
    failureFlash:true
}))
router.post('/login',passport.authenticate('local.login',{
    successRedirect:'/show',
    failureRedirect:'/login',
    failureFlash:true
}))
router.get('/show',isLoggedIn,(req,res)=>
{
    res.render('show')
})
router.get('/logout',(req,res)=>
{
    req.logout();
    res.redirect('/')
})
module.exports=router;

function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())
        {
            return next();

        }
        res.redirect('/login')

}