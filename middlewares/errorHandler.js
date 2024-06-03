function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ status: false, message: "Internal server error" });
}

function handleInvalidURL(req, res) {
    res.status(404).json({ message: "Halaman     Not Found!!!" });
}
    
module.exports = { errorHandler, handleInvalidURL };
