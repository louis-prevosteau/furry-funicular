const UserModel = require('../models/User.model');
const AuthentificationService = require('../services/Authentification.service');

const AuthentificationController  = {
    register: async (req, res) => {
        const { pseudo, fullname, email, password } = req.body;
        try {
            const userExists = await UserModel.findOne({ email });
            if (userExists) return res.status(400).json({ message: 'Cet utilisateur existe déjà'});
            const { user, token } = await AuthentificationService.register({ pseudo, fullname, email, password });
            res.status(201).json({ user, token: `Bearer ${token}` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const { user, token } = AuthentificationService.login({ email, password });
            res.status(200).json({ user, token: `Bearer ${token}` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = AuthentificationController