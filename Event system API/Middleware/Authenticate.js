const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync('privart.key.txt', { encoding: 'utf8', flag: 'r' });

module.exports = (req, res, next) => {
    let token, decodedToken;
    try {
        token = req.get("Authorization").split(" ")[1];
        decodedToken = jwt.verify(token, privateKey);

        //authenticated
        req.role = decodedToken.role;
        next();
    } catch (err) {
        res.status(401);
        res.send({ message: "Not Authenticated" });
    }
}