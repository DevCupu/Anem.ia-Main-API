const express = require("express");
const bodyParser = require("body-parser");
const routeApi = require("./routes/RoutesApi");
const { configureMulter, configureFirestore } = require("./config");
const {
    errorHandler,
    handleInvalidURL,
} = require("./middlewares/errorHandler");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfigurasi multer dan Firestore
configureMulter();
configureFirestore();

// Middleware untuk static file
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Rute untuk artikel
app.use("/articles", routeApi);

// Middleware untuk menangani kesalahan
app.use(errorHandler);
app.all("*", handleInvalidURL);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
