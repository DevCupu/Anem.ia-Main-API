const jwt = require('jsonwebtoken');
const config = require('../config/config');

const accessValidation = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token diperlukan' });
    }
    const token = authorization.split(' ')[1];
    try {
        const jwtDecode = jwt.verify(token, config.jwtSecret);

        if (typeof jwtDecode !== 'string') {
            req.userData = jwtDecode;
        }
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};

const tokenExpirationCheck = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token diperlukan' });
    }

    const token = authorization.split(' ')[1];

    try {
        const jwtDecode = jwt.decode(token, { complete: true });

        if (!jwtDecode) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        const currentTime = Math.floor(Date.now() / 1000);
        if (jwtDecode.payload.exp < currentTime) {
            return res.status(401).json({ message: 'Token expired' });
        }

        req.userData = jwtDecode.payload;
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized, Token salah!!' });
    }
    next();
};

module.exports = { accessValidation, tokenExpirationCheck };
