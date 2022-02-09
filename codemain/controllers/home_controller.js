module.exports.home=function(req,res)
{
    //console.log(req.cookies);
    return res.render('homee',
    {
        title:"social media"
    });

    //return res.end("<h1>express</h1>");
};



//module.exports.actionname=function(req,res)
//{};
