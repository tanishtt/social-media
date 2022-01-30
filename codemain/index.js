const express=require("express");
const router = require("./routes/index");
const app=express();
const port=8000;

//use express ROUTERS...
app.use("/",require("./routes/index"));


app.listen(port,function(err)
{
    if(err)
    {
        console.log(`error in running the server : ${err}`);
    }

    console.log(`server is running on port number : ${port}`);
});


