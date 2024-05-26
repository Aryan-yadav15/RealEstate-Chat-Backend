import jwt from "jsonwebtoken"

export const shouldBeLoggedIn = async (req, res) => {
    console.log(req.userId)
    res.status(200).json({ message: "You are authentiocated" })
}



export const shouldBeAdmin = async (req, res) => {
    const token = req.cookies.token
    if (!token) return res.status(401).json({ message: "You need to be logged in" })

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payLoad) => {
        if (err) return res.status(403).json({ message: "Token is not valid" })
        if (!payLoad.isAdmin) return res.status(403).json({ message: "You are not an admin" })
        // req.payLoad = user
        // next()
    })

    res.status(200).json({ message: "You are authentiocated" })
}