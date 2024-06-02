| Endpoint         | Method | Description                                       |
|------------------|--------|---------------------------------------------------|
| /articles        | GET    | Mendapatkan semua artikel                         |
| /articles/:id    | GET    | Mendapatkan artikel berdasarkan ID                |
| /articles        | POST   | Menambahkan artikel baru                          |

# Spesifikasi API Untuk Fitur Artikel

## 1. Mendapatkan semua artikel

- **URL:** /articles
- **Method:** GET
- **Response:**
  - **Success:** 200 OK
    - Body:
      ```json
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
      ]
      ```
  - **Error:** 404 Not Found
    - Body:
      ```json
      {
        "message": "Data tidak ditemukan or kosong!"
      }
      ```
  - **Error:** 500 Internal Server Error
    - Body:
      ```json
      {
        "message": "Internal server error"
      }
      ```

## 2. Mendapatkan artikel berdasarkan ID

- **URL:** /articles/:id
- **Method:** GET
- **Response:**
  - **Success:** 200 OK
    - Body:
      ```json
      {
        "id": "article_id",
        "title": "Judul Artikel",
        "description": "Deskripsi Artikel",
        "content": "Konten Artikel",
        "imageUrl": "URL_Gambar_Jika_Ada",
        "sourceUrl": "URL_Sumber_Jika_Ada",
        "createdAt": "Tanggal_Pembuatan"
      }
      ```
  - **Error:** 404 Not Found
    - Body:
      ```json
      {
        "message": "Data dengan ID ini tidak ditemukan!"
      }
      ```
  - **Error:** 500 Internal Server Error
    - Body:
      ```json
      {
        "message": "Internal server error"
      }
      ```

## 3. Menambahkan artikel baru

- **URL:** /articles
- **Method:** POST
- **Request Body:**
  ```json
  {
        "id": "article_id",
        "title": "Judul Artikel",
        "description": "Deskripsi Artikel",
        "content": "Konten Artikel",
        "imageUrl": "URL_Gambar_Jika_Ada",
        "sourceUrl": "URL_Sumber_Jika_Ada",
        "createdAt": "Tanggal_Pembuatan"
  }
  ```

- **Error:** 400 Bad request
  - Body:
    ```json
    {
      "status" : "success"
      "message": "Mohon isi semua field. Title, description, dan content tidak boleh kosong!"
    }
    ```
- **Error:** 500 Internal Server Error
  - Body:
    ```json
      {
        "message": "Internal server error"
      }
