const UserModel = require("../models/User.model");

const authentificate = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({ message: 'Utlisateur non-authentifié'});
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (!decoded) return res.status(401).json({ message: 'Utlisateur non-authentifié'});
        const user = await UserModel.findById(decoded.id);
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { authentificate };