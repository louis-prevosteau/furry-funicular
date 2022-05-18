const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');

const AuthentificationController  = {
    register: async (req, res) => {
        const { pseudo, fullname, email, password } = req.body;
        try {
            const userExists = await UserModel.findOne({ email });
            if (userExists) return res.status(400).json({ message: 'Cet utilisateur existe déjà'});
            const user = await UserModel.create({ pseudo, fullname, email, password: await bcrypt.hash(password, await bcrypt.genSalt()) });
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            res.status(201).json({ user, token: `Bearer ${token}` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await UserModel.findOne({ email });
            if (!user) return res.status(400).json({ message: 'Utilisateur inconnu' });
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) return res.status(400).json({ message: 'Identifiants incorrects' });
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            res.status(200).json({ user, token: `Bearer ${token}` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = AuthentificationController