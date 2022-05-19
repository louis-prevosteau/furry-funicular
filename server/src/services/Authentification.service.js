const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');

const AuthentificationService = {
    register: async ({ pseudo, fullname, email, password }) => {
        const user = await UserModel.create({ pseudo, fullname, email, password: await bcrypt.hash(password, await bcrypt.genSalt()) });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return { user, token };
    },

    login: async ({ email, password }) => {
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Utilisateur inconnu' });
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return res.status(400).json({ message: 'Identifiants incorrects' });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return { user, token };
    }
};

module.exports = AuthentificationService;