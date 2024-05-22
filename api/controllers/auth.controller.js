import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import 'dotenv/config'


export const register = async (req, res) => {
    const { username, email, password } = req.body;

    // Check for missing data
    if (!password) {
        return res.status(400).send({ message: 'Missing password' }); // Bad request (missing data)
    }

    try {
        // Hash the password
        const hashedPass = await bcrypt.hash(password, 10);
        console.log(hashedPass)

        // Create a user (replace with your actual user creation logic)
        // ... (user creation logic using hashedPass)
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPass
            }
        })
        console.log(newUser)
        // Save user to database (replace with your database interaction)
        // ... (database save logic)

        // Success response to client
        return res.status(201).json({ message: "user created" }); // Created
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating user' }); // Internal server error
    }
};

export const login = async (req, res) => {
    //db operations here 
    const { username, password } = req.body

    try {
        // Check if user exists in the database

        const user = await prisma.user.findUnique({
            where: { username }
        })

        if (!user)
            return res.status(401).json({ message: "Invalid User" })


        const isPassValid = await bcrypt.compare(password, user.password)
        if (!isPassValid)
            return res.status(401).json({ message: "Invalid Password" })

        //genrate a cookie token  and send to user 
        // res.setHeader("Set-Cookie", "test="+"myValue").json("susscess")
        const age = 1000 * 60 * 60 * 24 * 7

        const token = jwt.sign({
            id: user.id,
        }, process.env.JWT_SECRET_KEY,
            {
                expiresIn: age
            }
        )
        //we are sending this token to the user becasues if the user tries to delete a post we can chack the id by decoding the token 

        res.cookie("token", token, {
            httpOnly: true,
            // secure:true,
            maxAge: age
        }).status(200).json({ message: "Login sucess" })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error loging in a user' });
    }

    // //Check for pass conrrecteness
    // if (!password) {
    //     return res.status(400).send({ message: 'Missing password' }); // Bad request (missing data)
    // }



}
export const logout = (req, res) => {
    //db operations here 
    res.clearCookie("token").status(200).json({ message: "Logged out" })
}

