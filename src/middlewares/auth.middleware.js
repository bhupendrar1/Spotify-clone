const jwt = require("jsonwebtoken");



async function authArtist(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "artist") {
            return res.status(403).json({ message: "Forbidden: Only artists can access this route" });
        }

        req.user = decoded; // Attach the decoded user information to the request object
        
        next(); // Continue to the next middleware or route handler

    }catch (error) {
        console.error(error);
        res.status(401).json({ message: "Unauthorized" });
    }

}


async function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try{

   const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(decoded.role !== "user" ) {
        return res.status(403).json({ message: "Forbidden: Only users can access" });
    }

    req.user = decoded;
    next();

    }catch(err) {
        console.log(err);
        res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = {
    authUser,
    authArtist,
};