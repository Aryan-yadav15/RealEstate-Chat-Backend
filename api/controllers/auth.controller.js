import bcrypt from "bcrypt"

export const register = async(req,res)=>{
    const {name,email,pass} = req.body;

    // hash the pass
    const hashedPass = await bcrypt.hash(pass, 10)
    //create a user
    //save to db
    // For this we need bcrypt
    console.log(req.body)
}
export const login = (req,res)=>{
    //db operations here 
}
export const logout = (req,res)=>{
    //db operations here 
}
