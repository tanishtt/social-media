const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    //collection names...
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
});


//document name=contact...
const user=mongoose.model('user',userschema);

module.exports=user;



