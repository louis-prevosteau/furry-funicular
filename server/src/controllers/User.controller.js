const UserModel = require('../models/User.model');

const UserController = {
    getUsers: async (req, res) => {
        try {
            const users = await UserModel.find();
            res.status(200).json({ users });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getUser: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UserModel.findById(id);
            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateUser: async (req, res) => {
        const { id } = req.params;
        const { bio } = req.body;
        try {
            const user = await UserModel.findByIdAndUpdate(id, { bio });
            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;
        try {
            await UserModel.findByIdAndDelete(id);
            res.status(200).json({ message: 'user deleted'});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    follow: async (req, res) => {
        const { id } = req.params;
        const { follow } = req.body;
        try {
            await UserModel.findByIdAndUpdate(id, {
                $push: {
                    following: follow
                }
            });
            await UserModel.findByIdAndUpdate(follow, {
                $push: {
                    followers: id
                }
            });
            res.status(200).json({ message: 'followed'});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    unfollow: async (req, res) => {
        const { id } = req.params;
        const { follow } = req.body;
        try {
            await UserModel.findByIdAndUpdate(id, {
                $pull: {
                    following: follow
                }
            });
            await UserModel.findByIdAndUpdate(follow, {
                $pull: {
                    followers: id
                }
            });
            res.status(200).json({ message: 'unfollowed'});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = UserController;