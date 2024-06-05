const { v4: uuidv4 } = require('uuid');
const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore();

const getAllUsers = async (req, res) => {
    try {
        const usersSnapshot = await db.collection('users').get();
        
        if (usersSnapshot.empty) {
            return res.status(404).json({ message: 'Data pengguna tidak ditemukan atau kosong!' });
        }

        const usersList = usersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        res.status(200).json({ 
            message: 'Berhasil mengambil semua daftar pengguna',
            data: usersList 
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Kesalahan server internal' });
    }
};

module.exports = getAllUsers;


const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const usersSnapshot = await db.collection('users').where('id', '==', id).get();
        if (usersSnapshot.empty) {
            return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }

        const user = usersSnapshot.docs[0].data();

        res.json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Kesalahan server internal' });
    }
};

module.exports = { getAllUsers, getUserById };
