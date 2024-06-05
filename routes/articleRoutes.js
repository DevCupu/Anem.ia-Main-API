const express = require("express");
const router = express.Router();
const { getAllArticles, getArticleById, addArticle, updateArticle, deleteArticle } = require("../controllers/articleHandler");
const { configureMulter } = require("../config");

const upload = configureMulter();

router.get("/", getAllArticles);
router.get("/:id", getArticleById);
// Middleware untuk post
router.post("/", upload.single("image"), addArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
