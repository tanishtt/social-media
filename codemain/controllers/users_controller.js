const User=require('../models/user');

//***WE ARE ACCESSING THE SCHEMA***

module.exports.profile=function(req,res)
{
    res.render('user_profile',
    {
       title:"hiiii..." 
    });
    //res.end("<h1>profile....</h1>");
};

module.exports.login=function(req,res)
{
    res.render('user_login',{
        title:"code|login"
    });
}

module.exports.signin=function(req,res)
{
    res.render('user_signin',{
        title:"code|signin"
    });
}




//get the sign up data...
module.exports.create=function(req,res)
{

    //in req.body, we have {
        //name
        //email
        //password
        //c_password
    //} 
    if(req.body.password!=req.body.c_password)
    {
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user)
    {
        if(err)
        {
            console.log('error in finding user in signing up');
            return;
        }
     //if user is not found
     if(!user)
     {
         // if user is not there, then create it...
         User.create(req.body,function(err,user)
         {
            if(err)
            {
                console.log('error in creating user in signing up',err);
                return;
            }
            //after creating user . redirect it to login page...
            //
            return res.redirect('/users/login');
         });
     }
     else
     {
         //if user is already there, then... redirect it to sigin/up page...
         return res.redirect('back');

     }   

    })
}





module.exports.createsession=function(req,res)
{
        return res.redirect('/users/profile');
}

