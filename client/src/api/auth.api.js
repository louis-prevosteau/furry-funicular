const { default: RootApi } = require("./index.api");


const authApi = new RootApi('/auth')
export const useAuth = () => {

 const login = async (email, password) => {
     try {
        const api = authApi.api().post(authApi.route + '/login', { email, password });
        const res = await api;
        localStorage.setItem('token', res.data.token);
        return res.data.posts;
     } catch (error) {
         console.log("ERROR", error);
     }
 };

 const register = async (pseudo, fullname, email, password) => {
    try {
        const api = authApi.api().post(authApi.route + '/register', { pseudo, fullname, email, password });
        const res = await api;
        localStorage.setItem('token', res.data.token);
        return res.data.posts;
    } catch (error) {
         console.log("ERROR", error);
    }
 };



    
    return {
        login,
        register
    }
}
