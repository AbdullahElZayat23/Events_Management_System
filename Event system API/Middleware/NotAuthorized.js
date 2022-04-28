module.exports = (req, res, next) => {
    res.sataus(401);
    res.send({ message: "Not Authorized" });
}