import axios from 'axios';

export const getOrders = () => {

    return axios.get('http://localhost:3000/order')
}
export const updateStatusOrder = (orderId, newStatus, token) => {

    return axios.put(`http://localhost:3000/order/update/${orderId}`, { status: newStatus }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const deleteOrder = (orderId, token) => {

    return axios.delete(`http://localhost:3000/order/delete/${orderId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


export const getUsers = () => {

    return axios.get('http://localhost:3000/admin/setting/show-user');
}
export const updateRoleUser = (userId, newRole, token) => {

    return axios.put(`http://localhost:3000/admin/setting/edit-user/${userId}`, { newRole }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const deleteUser = (userId, token) => {

    return axios.delete(`http://localhost:3000/admin/setting/delete-user/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}