const express=require("express")
const router=express.Router()

/**
 * @swagger
 * /:
 *   get:
 *     summary: get all no loggedin person
 *     description: you need to provide token for this api to work
*/
/**
 * @swagger
 * /:
 *   post:
 *     summary: create a new no loggedin person sending name,email,phone,password
 *     description: after success you will creating new 
*/
/**
 * @swagger
 * /:
 *   patch:
 *     summary: udpate no loggedin person by id here
 *     description: any no loggedin person attributes like name,email,phone,password
*/
/**
 * @swagger
 * /:
 *   delete:
 *     summary: test get request here
 *     description: get request goes here
*/


router.get("/",(req,res,next)=>{
    res.send("library api get working")
})
router.post("/",(req,res,next)=>{
    res.send("library api post working")
})
router.patch("/",(req,res,next)=>{
    res.send("library api patch working")
})
router.delete("/",(req,res,next)=>{
    res.send("library api delete working")
})


module.exports=router