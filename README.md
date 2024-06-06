# Anemi.AI Documentation API Back-end

# How to run

# Clone repository
```javascript
https://github.com/DevCupu/Anem.ia-Main-API.git
```
# Change directory to app-backend
```javascript
cd Anem.ia-Main-API
```
#Install (use Node.js version 18.18.2 if there are any problems with other versions)
```javascript
npm install
```
# Start development:
```javascript
npm run start
```

# Recap end-point All Route
| Endpoint       | Method | Description            |
| -------------- | ------ | ---------------------- |
| /articles      | GET    | Get all articles       |
| /articles/{id} | GET    | Get articles by ID     |
| /articles      | POST   | Added new article      |
| /users         | GET    | Get All users          |
| /user/{id}     | GET    | Get users based on ID  |
| /auth/register | POST   | Register a New User    |
| /auth/login    | POST   | Login an Existing User |

# API Documentation
This document provides information on how to use the API endpoints and their functionalities.

## 1. Get all articles 

- **URL:** `/articles`
- **Method:** `GET`
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

## 2. Get articles by ID

- **URL:** `/articles/:id`
- **Method:** `GET`
- **Request Parameter:**
- **Deskripsi:** Mendapatkan articles berdasarkan ID.
  - `id`: ID unik articles.
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

## 3. Added new article

- **URL:** `/articles`
- **Method:** `POST`
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

## 4. Get All Users

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

## 5. Get users based on ID

- **Endpoint:** `/users/:id`
- **Method:** `GET`
- **Deskripsi:** Mendapatkan informasi pengguna berdasarkan ID.
- **Request Parameter:**
  - `id`: ID unik pengguna.
- **Response:**
  - **Success (200 OK):**
    ```json
    {
      "user": {
        "id": "string",
        "name": "string",
        "email": "string",
        "password": "hashsed password",
        "createdAt": "string"
      }
    }
    ```
  - **Error (404 Not Found):**
    ```json
    {
      "message": "Pengguna tidak ditemukan"
    }
    ```
  - **Error (500 Internal Server Error):**
    ```json
    {
      "message": "Kesalahan server internal"
    }
    ```

## 6. Registration New Users

- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Deskripsi:** Mendaftarkan pengguna baru dengan nama, email, dan password yang diberikan.
- **Request Body:**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
- **Response:**
  - **Success (201 Created):**
    ```json
    {
      "status": true,
      "message": "Pengguna berhasil ditambahkan",
      "data": {
        "id": "string",
        "name": "string",
        "email": "string"
      }
    }
    ```

 - **Error (400 Bad request):**
    ```json
    {
      "message": "Email sudah terdaftar"
    }
    ```
 - **Error (400 Bad request):**
    ```json
    {
      "message": "Nama, email, dan password harus diisi"
    }
    ```

  - **Error (500 Internal Server Error):**
    ```json
    {
      "message": "Kesalahan server internal"
    }
    ```
## 7. Login an Existing User 

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Deskripsi:** melakukan autentikasi pengguna.
- **Request Body:**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "hash password"
  }
- **Response:**
  - **Success (201 Created):**
    ```json
    {
      "status": true,
      "message": "Login berhasil, masukkan token!",
      "token": "<JWT Token>",
      "data": {
        "id": "string",
        "name": "string",
        "email": "string"
      }
    }

    ```

 - **Error (404 Bad request):**
    ```json
    {
      "message": "Pengguna tidak ditemukan"
    }
    ```
 - **Error (403 Forbidden):**
    ```json
    {
      "message": "Kata sandi salah"
    }
    ```

  - **Error (500 Internal Server Error):**
    ```json
    {
      "message": "Kesalahan server internal"
    }
    ```

****
