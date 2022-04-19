module.exports = function(req, res, next) {
    res.status(404).send({
        error: 'Not found',
        status: 404
    });
};