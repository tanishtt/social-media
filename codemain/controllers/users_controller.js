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

