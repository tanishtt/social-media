const express=require("express");
const cookieparser=require("cookie-parser");

const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');


const router = require("./routes/index");
const app=express();
const port=8000;


const db=require('./config/mongoose');
const Contact=require('./models/user');







app.use(express.urlencoded());

app.use(cookieparser());


const expresslayouts=require('express-ejs-layouts');


app.use(express.static('./assests'));


app.use(expresslayouts);



app.use(session({
    //{name:value}//object//{key:value}
    name:'codemain_userid',
    secret:'encryption_key',
    //it is key used to encrypt(you can write anything).

    saveUninitialized:false,//if login data is not there, then we donot need to store the data. so false 
    resave:false,//if user information is not changed,then i should not resave it again and again.


    //if you logged in for for than specified time then cookie experies..session-cookie expires
    cookie:{
        maxAge:(1000*60*100),//time for which cookie session is there
    }
}));



app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setauthenticateduser);

//use express ROUTERS...
app.use("/",require("./routes/index"));

//tell app that our view engine will be ejs...
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err)
{
    if(err)
    {
        console.log(`error in running the server : ${err}`);
    }

    console.log(`server is running on port number : ${port}`);
});


