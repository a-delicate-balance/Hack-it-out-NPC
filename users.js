
const express = require("express");
const {handlesignup, handlelogin}= require("../user")

const router = express.Router();


router.post("/",handlesingup)
router.post("/login",handlelogin)



module.exports = router;