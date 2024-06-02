# Spesifikasi API - Operasi CRUD untuk Artikel

## 1. Mendapatkan semua artikel

- *URL:* /articles
- *Method:* GET
- *Response:*
  - *Success:* 200 OK
    - Body:
      json
      [
        {
          "id": "article_id",
          "title": "Judul Artikel",
          "description": "Deskripsi Artikel",
          "content": "Konten Artikel",
          "imageUrl": "URL_Gambar_Jika_Ada",
          "sourceUrl": "URL_Sumber_Jika_Ada",
          "createdAt": "Tanggal_Pembuatan"
        },
        ...
      ]
      
  - *Error:* 500 Internal Server Error
    - Body:
      json
      {
        "message": "Internal server error"
      }
      

## 2. Mendapatkan artikel berdasarkan ID

- *URL:* /articles/:id
- *Method:* GET
- *Response:*
  - *Success:* 200 OK
    - Body:
      json
      {
        "id": "article_id",
        "title": "Judul Artikel",
        "description": "Deskripsi Artikel",
        "content": "Konten Artikel",
        "imageUrl": "URL_Gambar_Jika_Ada",
        "sourceUrl": "URL_Sumber_Jika_Ada",
        "createdAt": "Tanggal_Pembuatan"
      }
      
  - *Error:* 404 Not Found
    - Body:
      json
      {
        "message": "Data dengan ID ini tidak ditemukan!"
      }
      
    - *OR* 500 Internal Server Error
      - Body:
        json
        {
          "message": "Internal server error"
        }
        

## 3. Menambahkan artikel baru

- *URL:* /articles
- *Method:* POST
- *Request Body:*
  ```json
  {
    "title": "Judul Artikel",
    "description": "Deskripsi Artikel",
    "content": "Konten Artikel",
    "sourceUrl": "URL_Sumber_Jika_Ada"
  }
