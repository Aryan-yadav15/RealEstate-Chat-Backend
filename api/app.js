import express from "express"
import postRroute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"

const app = express()

console.log("test1")
console.log("test2")

app.use(express.json())

app.use("/api/post", postRroute)
app.use("/api/auth", authRoute)


// app.use('/api/test',(req,res)=>{
//     res.send("Hello World")
// })
// app.use('/api/auth/register',(req,res)=>{
//     res.send("Hello World")
// })
// app.use('/api/auth/login',(req,res)=>{
//     res.send("Hello World")
// })
// app.use('/api/auth/logout',(req,res)=>{
//     res.send("Hello World")
// })

// //this will be a post req for post 
// app.use('/api/posts/',(req,res)=>{
//     res.send("Hello World")
// })
// //this will be a get request for post 
// app.use('/api/posts/',(req,res)=>{
//     res.send("Hello World")
// })

// app.use('/api/posts/12121',(req,res)=>{
//     res.send("Hello World")
// })

app.listen(8800,()=>[
    console.log("Server is running on port 8800")
])