import axios from 'axios';

//admin
export const getOrdersByUserId = async (token, customerId) => {
    return await axios.get(`http://localhost:3000/comment/user/${customerId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

};


export const updateCommentStatus = async (token, formattedComments) => {
    console.log(token, formattedComments, "Sending comments");
    return await axios.put('http://localhost:3000/comment/update-comment', { comments: formattedComments }, {  // แก้ชื่อเป็น comments
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};


//user
export const getShowCommentUser = async () => {

    return axios.get('http://localhost:3000/comment/show-comment');
}