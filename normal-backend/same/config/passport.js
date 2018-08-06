var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
 
var User=require('../models/user');

passport.serializeUser((user,done)=>
{
    done(null,user.id);

})
passport.deserializeUser((id,done)=>
{
    User.findById(id,(err,user)=>
    {
        done(err,user);
    })
})

passport.use('local.register',new LocalStrategy({
    usernameField:'name',
    passwordField:'password',
    passReqToCallback:true
},(req,name,password,done)=>{
    User.findOne({name:name},(err,user)=>
    {
       console.log("in pp")
        if(err)
        {
            return done(err)
        }
        if(user)
            {
                return done(null,false)
            }
            var s= new User();
            console.log("from Passport",req.body)
            s.name=req.body.name;
            s.password=s.encryptPassword(req.body.password)
            s.save((err)=>
            {
              
            
                if(err){
                //console.log(err)
                return done(err)
            }
            return done(null,s)

        })
})

}))


passport.use('local.login',new LocalStrategy({
    usernameField:'name',
    passwordField:'password',
    passReqToCallback:true
},(req,name,password,done)=>{
    User.findOne({name:name},(err,user)=>
    {
       console.log(user.password)
        if(err)
        {
            console.log("@@@@@@@@@@@@@@@@@@@@@",err)
            return done(err)
        } 
        if(!user.validPassword(req.body.password,user))
        {
            req.flash('login error',"username is nit found")
            console.log("&&&&&&&&&&&&&&&&&&&&&&&&&")
            return done(null, false);
        }
        if(!user)
        {
            console.log("!!!!!!!!!!!!!!!!!!!!!")
            return done(null,false)
        }
        return done(null,user);
    })

}))