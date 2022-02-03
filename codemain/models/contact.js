const mongoose=require('mongoose');

const contactschema=new mongoose.Schema({
    //collection names...
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});


//document name=contact...
const contact=mongoose.model('contact',contactschema);

module.exports=contact;



