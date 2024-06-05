<<<<<<< HEAD
| Endpoint         | Method | Description                                       |
|------------------|--------|---------------------------------------------------|
| /articles        | GET    | Mendapatkan semua artikel                         |
| /articles/:id    | GET    | Mendapatkan artikel berdasarkan ID                |
| /articles        | POST   | Menambahkan artikel baru                          |
| /users           | GET    | Menampilkan All users                             |    

# Spesifikasi API

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
## 4. Mengambil semua  Users
### Get All Users

- **Endpoint:** `/users`
- **Method:** `GET`
- **Deskripsi:** Mendapatkan semua pengguna yang terdaftar.
- **Response:**
  - **Success:** 200 OK
    - Body:
      ```json
      [
      {
        "message": "Berhasil mengambil semua daftar pengguna"
        {
          
          "id": "user_id",
          "username": "Nama Pengguna",
          "email": "Email Pengguna",
          "createdAt": "Tanggal Pembuatan"
        },
        // ...dan seterusnya
      }
      ]
      ```
  - **Error:** 404 Not Found
    - Body:
      ```json
      {
        "message": "Data pengguna tidak ditemukan atau kosong!"
      }
      ```
  - **Error:** 500 Internal Server Error
    - Body:
      ```json
      {
        "message": "Kesalahan server internal"
      }
      ```
=======
| Endpoint         | Method | Description                                       |
|------------------|--------|---------------------------------------------------|
| /articles        | GET    | Mendapatkan semua artikel                         |
| /articles/:id    | GET    | Mendapatkan artikel berdasarkan ID                |
| /articles        | POST   | Menambahkan artikel baru                          |

# Spesifikasi API

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
>>>>>>> c4fd5e6 (Updated)