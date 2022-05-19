const UserService = require('../services/User.service');

const UserController = {
    getUsers: async (req, res) => {
        try {
            const users = await UserService.getUsers();
            res.status(200).json({ users });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getUser: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UserService.getUser(id);
            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateUser: async (req, res) => {
        const { id } = req.params;
        const { bio } = req.body;
        try {
            const user = await UserService.updateUser(id, { bio });
            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;
        try {
            await UserService.deleteUser(id);
            res.status(200).json({ message: 'user deleted'});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    follow: async (req, res) => {
        const { id } = req.params;
        const { follow } = req.body;
        try {
            await UserService.follow(id, { follow });
            res.status(200).json({ message: 'followed'});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    unfollow: async (req, res) => {
        const { id } = req.params;
        const { unfollow } = req.body;
        try {
            await UserService.unfollow(id, { unfollow })
            res.status(200).json({ message: 'unfollowed'});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = UserController;