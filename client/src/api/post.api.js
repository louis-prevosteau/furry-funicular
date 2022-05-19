const { default: RootApi } = require("./index.api");


const postsApi = new RootApi('/post')
const usePosts = () => {
 const readPosts = async () => {
     try {
        const api = postsApi.api()

        const res = await api.get('/')
   
        return res.data.posts
     } catch (error) {
         console.log("ERROR", error);
     }
 };

 const createPost = async (data) => {
    try {
        const api = postsApi.api();

        const res = await api.post('/', data)
   
        return res.data.post
     } catch (error) {
         console.log("ERROR", error);
     }
 };

 const updatePost = async (id, data) => {
    try {
        const api = postsApi.api();

        const res = await api.put(`/${id}`, data);
   
        return res.data.post;
     } catch (error) {
         console.log("ERROR", error);
     }
 };

 const deletePost = async (id) => {
    try {
        const api = postsApi.api();

        const res = await api.delete(`/${id}`);
   
        return res.data.post;
     } catch (error) {
         console.log("ERROR", error);
     }
 };

 const like = async (id, data) => {
    try {
        const api = postsApi.api();

        const res = await api.put(`/${id}/like`, data);
   
        return res.data.post;
     } catch (error) {
         console.log("ERROR", error);
     }
 };

 const unlike = async (id, data) => {
    try {
        const api = postsApi.api();

        const res = await api.put(`/${id}/unlike`, data);
   
        return res.data.post;
     } catch (error) {
         console.log("ERROR", error);
     }
 };
    
    return {
        readPosts,
        createPost,
        updatePost,
        deletePost,
        like,
        unlike
    }
}
