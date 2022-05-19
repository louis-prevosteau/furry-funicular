const UserModel = require("../models/User.model");

const UserService = {
    getUsers: async () => {
        return await UserModel.find();
    },

    getUser: async (id) => {
        return await UserModel.findById(id);
    },

    updateUser: async (id, { bio }) => {
        return await UserModel.findByIdAndUpdate(id, { bio });
    },

    deleteUser: async (id) => {
        await UserModel.findByIdAndDelete(id);
    },

    follow: async (id, { follow }) => {
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
    },

    unfollow: async (id, { unfollow }) => {
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
    }
};

module.exports = UserService