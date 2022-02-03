const express=require("express");
const router = require("./routes/index");
const app=express();
const port=8000;


const db=require('./config/mongoose');
const expresslayouts=require('express-ejs-layouts');

app.use(express.static('./assests'));


app.use(expresslayouts);

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


