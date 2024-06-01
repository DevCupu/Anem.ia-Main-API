function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "Internal server error" });
}

function handleInvalidURL(req, res) {
    res.status(404).json({ message: "Halama Not Found!!!" });
}
    
module.exports = { errorHandler, handleInvalidURL };
