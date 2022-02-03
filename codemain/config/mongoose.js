const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/codemain_development');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error in connecting to mongodb"));

db.once('open',function()
{
console.log("connected to database...");
});


module.exports=db;
