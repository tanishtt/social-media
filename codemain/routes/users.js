const express=require("express");
const router=express.Router();
const passport=require('passport');

const usercontroller=require('../controllers/users_controller');
router.get("/profile",usercontroller.profile);
//localhost:8000/users/profile



//localhost:8000/users/profile/likes
//then router.use("/likes",require(...));
 
/////////////////////get/post(x, x<--middleware, x);


router.get("/login",passport.checkauthentication(),usercontroller.login);

router.get("/signin",usercontroller.signin);


router.post('/create',usercontroller.create);
//we are sending data from form to /user/create...

//use passport as a middleware(passport.authenticate) to authenticate...
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/login'}
), usercontroller.createsession)

module.exports=router;
