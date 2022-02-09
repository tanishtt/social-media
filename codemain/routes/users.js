const express=require("express");
const router=express.Router();

const usercontroller=require('../controllers/users_controller');
router.get("/profile",usercontroller.profile);
//localhost:8000/users/profile



//localhost:8000/users/profile/likes
//then router.use("/likes",require(...));
 

router.get("/login",usercontroller.login);

router.get("/signin",usercontroller.signin);


module.exports=router;
