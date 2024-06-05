const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { v4: uuidv4 } = require('uuid');
const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore();

const UsersRegister = async (req, res) => {
    const { name, email, password } = req.body;
    const createdAt = new Date().toISOString();

    try {
        // Cek jika pengguna suidah terdaftar
        const userRef = db.collection('users').doc(email);
        const doc = await userRef.get();

        if (doc.exists) {
            return res.status(400).json({ message: 'Email sudah terdaftar' });
        }

        // Hash password pengguna
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: uuidv4(),
            name,
            email,
            password: hashedPassword,
            createdAt:createdAt
            
            
        };
        
        // Simpan pengguna baru ke database
        await userRef.set(newUser);

        // Kirim respon berhasil
        res.status(201).json({
            status: true,
            message: 'Pengguna berhasil di tambahkan',
            data: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                createdAt
            }
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Kesalahan server internal' });
    }
};

const UsersLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userRef = db.collection('users').doc(email);
        const doc = await userRef.get();

        // Periksa apakah pengguna tidak ditemukan
        if (!doc.exists) {
            return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }

        const user = doc.data();

        // Cek jika kata sandi salah
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(403).json({ message: 'Kata sandi salah' });
        }

        // Payload
        const payload = { id: user.id, name: user.name, email: user.email };

        // Buat token JWT dengan durasi kadaluwarsa
        const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });

        // Kirim token dan informasi pengguna sebagai respon
        res.status(201).json({ 
            status: true,
            message: 'Login berhasil, masukkan token!',
            token,
            data: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Kesalahan server internal' });
    }
};

module.exports = { UsersRegister, UsersLogin };
