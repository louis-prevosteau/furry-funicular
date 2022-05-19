const { default: RootApi } = require("./index.api");


const usersApi = new RootApi('/user')
const usePosts = () => {
 const getUsers = async () => {
     try {
        const api = usersApi.api()

        const res = await api.get('/')
   
        return res.data.users
     } catch (error) {
         console.log("ERROR", error);
     }
 };

 const getUser = async (id) => {
    try {
        const api = usersApi.api();

        const res = await api.get(`/${id}`)
   
        return res.data.user
     } catch (error) {
         console.log("ERROR", error);
     }
 };

 const updateUser = async (id, data) => {
    try {
        const api = usersApi.api();

        const res = await api.put(`/${id}`, data);
   
        return res.data.user;
     } catch (error) {
         console.log("ERROR", error);
     }
 };

 const deleteUser = async (id) => {
    try {
        const api = usersApi.api();

        const res = await api.delete(`/${id}`);
   
        return res.data.message;
     } catch (error) {
         console.log("ERROR", error);
     }
 };

 const follow = async (id, data) => {
    try {
        const api = usersApi.api();

        const res = await api.put(`/${id}/follow`, data);
   
        return res.data.message;
     } catch (error) {
         console.log("ERROR", error);
     }
 };

 const unfollow = async (id, data) => {
    try {
        const api = usersApi.api();

        const res = await api.put(`/${id}/unfollow`, data);
   
        return res.data.message;
     } catch (error) {
         console.log("ERROR", error);
     }
 };
    
    return {
        getUsers,
        getUser,
        updateUser,
        deleteUser,
        follow,
        unfollow
    }
}
