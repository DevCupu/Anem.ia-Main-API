const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require("./routes/articleRoutes");
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
app.use("/articles", articleRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Middleware untuk menangani kesalahan
app.use(errorHandler);
app.all("*", handleInvalidURL);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
