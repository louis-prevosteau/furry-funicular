import axios from 'axios';

export const register = async (data) => {
    return await axios.post('http://localhost:5000/api/auth/register', data).data;
};

export const login = async (data) => {
    return await axios.post('http://localhost:5000/api/auth/login', data).data;
};