const { v4: uuidv4 } = require("uuid");
const { Firestore } = require("@google-cloud/firestore");

const db = new Firestore();

// Mendapatkan semua artikel
const getAllArticles = async (req, res) =>  {
  try {
    const articlesRef = db.collection("articles");
    const snapshot = await articlesRef.get();
    const articles = [];
    snapshot.forEach((doc) => {
        articles.push({ id: doc.id, ...doc.data() });
    });

    // Jika tidak ada artikel yang ditemukan
    if (articles.length === 0) {
      return res
        .status(404)
        .json({ message: "Data tidak ditemukan or kosong!" });
    }

    res.status(200).json(articles);
  } catch (error) {
    console.error("Error retrieving articles:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Mendapatkan artikel berdasarkan ID
const getArticleById = async (req, res) => {
  const articleId = req.params.id;
    try {
      const articleRef = db.collection("articles").doc(articleId);
      const doc = await articleRef.get();
      if (!doc.exists) {
      return res
        .status(404)
        .send({ message: "Data dengan ID ini tidak ditemukan!" });
    }
      res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
      console.error("Error retrieving article:", error);
      res.status(500).json({ message: "Internal server error" });
  }
}

// Menambahkan artikel
const addArticle = async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.content) {
    return res.status(400).json({
      success: false,
      message:
        "Mohon isi semua field. Title, description, dan content tidak boleh kosong!",
    });
  }
    const imageUrl = req.file ? `/images/${req.file.filename}` : null;
    const createdAt = new Date().toISOString();
    const article = {
      id: uuidv4(),
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      image: imageUrl,
      sourceUrl: req.body.sourceUrl,
      createdAt: createdAt,
  };

  try {
    await db.collection("articles").doc(article.id).set(article); // Gunakan metode .set() dengan UUID sebagai ID agar bisa tampil di firestore jika menggunkaan add() dia tidak akan tampil di firestore
    res.status(201).json({
      success: true,
      message: "Artikel berhasil ditambahkan",
      data: article,
    });
  } catch (error) {
    console.error("Error adding article:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

// Memperbarui artikel berdasarkan ID
const updateArticle = async (req, res) => {
  const articleId = req.params.id;
  const articleRef = db.collection("articles").doc(articleId);
  const articleToUpdate = {
    title: req.body.title,

    content: req.body.content,
  };

  try {
    await articleRef.set(articleToUpdate, { merge: true });
    res.status(200).json({
      success: true,
      message: "Artikel berhasil diperbarui",
      data: {
        id: articleId,
        ...articleToUpdate,
      },
    });
  } catch (error) {
    console.error("Error updating article:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

// Menghapus artikel berdasarkan ID
const deleteArticle = async (req, res) => {
  const articleId = req.params.id;

  try {
    const articleRef = db.collection("articles").doc(articleId);

    const doc = await articleRef.get();
    if (!doc.exists) {
      return res
        .status(404)
        .json({ success: false, message: "Data dengan ID tidak ditemukan!" });
    }

    console.log("Menghapus artikel dengan ID:", articleId);
    await articleRef.delete();
    console.log("Artikel berhasil dihapus:", articleId);
    res
      .status(200)
      .json({ success: true, message: "Artikel berhasil dihapus" });
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

module.exports = {
  getAllArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
};
