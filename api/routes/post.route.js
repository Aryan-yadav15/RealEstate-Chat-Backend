import express from "express"

const router = express.Router()

router.get("/test",(req,res)=>{
    console.log("i am workinghere")
})
router.post("/test",(req,res)=>{
    console.log("i am workinghere")
})
router.put("/test",(req,res)=>{
    console.log("i am workinghere")
})
router.delete("/test",(req,res)=>{
    console.log("i am workinghere")
})

export default router