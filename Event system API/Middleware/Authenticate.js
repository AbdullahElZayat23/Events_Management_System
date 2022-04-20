const jwt = require("jsonwebtoken");
const privateKey = fs.readFileSync('privart.key.txt', { encoding: 'utf8', flag: 'r' });

module.exports = (req, res, next) => {
    let token, decodedToken;
    try {
        token = request.get("Authorization").split(" ")[1];
        decodedToken = jwt.verify(token, privateKey);

    } catch (error) {
        next(new Error("Not Authenticated"));
    }

    //authenticated
    request.role = decodedToken.role;
    next();
}