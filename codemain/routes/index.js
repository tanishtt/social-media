const express=require("express");
const router=express.Router();
console.log('router loaded successfully...');

const homecontroller=require("../controllers/home_controller");


router.get("/",homecontroller.home);



module.exports=router;
