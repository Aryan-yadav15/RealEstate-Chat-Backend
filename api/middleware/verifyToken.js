import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token
    if(!token) return res.status(401).json({ message: "You need to be logged in" })

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payLoad) => {
        if (err) return res.status(403).json({ message: "Token is not valid" })
        req.userId = payLoad.id
        next()
    })

}