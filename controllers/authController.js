const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { v4: uuidv4 } = require('uuid');
const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore();

const UsersRegister = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userRef = db.collection('users').doc(email);
        const doc = await userRef.get();
        if (doc.exists) {
            return res.status(400).json({ message: 'Email sudah terdaftar' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { id: uuidv4(), name, email, password: hashedPassword };
        
        await userRef.set(newUser);

        res.status(201).json({ message: 'Pengguna berhasil dibuat', user: { id: newUser.id, name: newUser.name, email: newUser.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Kesalahan server internal' });
    }
};

const UsersLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userRef = db.collection('users').doc(email);
        const doc = await userRef.get();
        if (!doc.exists) {
            return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }

        const user = doc.data();
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(403).json({ message: 'Kata sandi salah' });
        }

        const payload = { id: user.id, name: user.name, email: user.email };
        const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1min' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Kesalahan server internal' });
    }
};

module.exports = { UsersRegister, UsersLogin };
