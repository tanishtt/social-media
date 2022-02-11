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
    saveUninitialized:false,
    resave:false,
    //if you logged in for for than specified time then cookie experies..session-cookie expires
    cookie:{
        maxAge:(1000*60*60),//time for which cookie session is there
    }
}));

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


