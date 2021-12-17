const express = require("express");
router = express.Router();

usersRoute = require("../controllers/userController")


router.get("/",usersRoute.userController); ///adress to proxy


module.exports = router;