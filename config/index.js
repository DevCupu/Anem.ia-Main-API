const multer = require("multer");

function configureMulter() {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "public/images");
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        },
    });

    return multer({ storage: storage });
}
function configureFirestore() {
  // Konfigurasi Firestore
}

module.exports = { configureMulter, configureFirestore};
