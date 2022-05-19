const { default: RootApi } = require("./index.api");


const commentApi = new RootApi('/comment');
export const useComments = () => {
    const createComment = async (postId, data) => {
        try {
            const api = commentApi.api()
    
            const res = await api.post(`/${postId}`, data)
       
            return res.data.message
         } catch (error) {
             console.log("ERROR", error);
         }
    };
    
    const updateComment = async (postId, commentId, data) => {
        try {
            const api = commentApi.api()
    
            const res = await api.put(`/${postId}/${commentId}`, data)
       
            return res.data.message
         } catch (error) {
             console.log("ERROR", error);
         }
    };

    const deleteComment = async (postId, commentId) => {
        try {
            const api = commentApi.api()
    
            const res = await api.delete(`/${postId}/${commentId}`)
       
            return res.data.message
         } catch (error) {
             console.log("ERROR", error);
         }
    };

    return {
        createComment,
        updateComment,
        deleteComment
    };
};
