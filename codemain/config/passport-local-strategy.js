const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;


const User=require('../models/user');

//authentication using passport
passport.use(new LocalStrategy({
    //as per schema
    usernameField:'email'
    },//done is an inbuilt callback function which is connecting to passport.js
    function(eemail,ppassword,done)
    {
        User.findOne({email:eemail},function(err,user)
        {
            if(err)
            {
                console.log('err in finding user-->passport');
                return done(err);
            }
            

            //if user is not found or passport is not correct...
            if(!user||user.password!=ppassword)
            {
                console.log('Invalid password/username');
                return done(null,false);
                //null means no error
                //false means authentication fails
            }

            return done(null,user);
            //null means no error
            //sending user as authentication is true(passed).
        })
    }
));




//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    //it automatically serialize it... 
    done(null,user.id);
});



//deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    //it automatically deserialize it and convert into id...

    User.findById(id,function(err,user){
        if(err)
        {
            console.log('error in finding user-->passport');
            return done(err);
        }


        return done(null,user);
    });
});

//check if user is authenticated
passport.checkauthentication=function(req,res,next){

    //check if the user is logged in, then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }

    //if the user is not signed in
    return res.redirect('/users/login');
}



passport.setauthenticateduser=function(req,res,next){
    if(req.isAuthenticated())
    {
        //if user contains the current logged in user from the session cookie and we are just sending this to the locals for the views.
        res.locals.user=req.user;
        
    }
    next();
}
module.exports=passport;