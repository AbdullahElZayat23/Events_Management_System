module.exports = (req, res, next) => {
    try {
        res.status(401);
        res.json({ message: "Not Authorized" });
    } catch (err) {
        next(err);
    }
}