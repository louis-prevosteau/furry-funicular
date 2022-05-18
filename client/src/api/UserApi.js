import axios from 'axios';

export const getUsers = async () => {
    return await axios.get('http://localhost:5000/api/user').data.users;
};

export const getUser = async (id) => {
    return await axios.get(`http://localhost:5000/api/user/${id}`).data.user;
};

export const updateUser = async (id, data) => {
    return await axios.put(`http://localhost:5000/api/user/${id}`, data).data.user
};

export const deleteUser = async (id) => {
    return await axios.delete(`http://localhost:5000/api/user/${id}`);
};

export const follow = async (id, data) => {
    return await axios.put(`http://localhost:5000/api/user/${id}/follow`, data).data.user
};

export const unfollow = async (id, data) => {
    return await axios.put(`http://localhost:5000/api/user/${id}/unfollow`, data).data.user
};