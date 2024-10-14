import axios from 'axios';

export const getOrders = () => {

    return axios.get('http://localhost:3000/order')
}
export const updateStatusOrder = (orderId, newStatus) => {

    return put(`http://localhost:3000/order/update/${orderId}`, { status: newStatus });
}
export const deleteOrder = (orderId) => {

    return delete (`http://localhost:3000/order/delete/${orderId}`);
}


export const getUsers = () => {

    return axios.get('http://localhost:3000/admin/setting/show-user');
}
export const updateRoleUser = (userId, newRole) => {

    return axios.put(`http://localhost:3000/admin/setting/edit-user/${userId}`, { newRole });
}
export const deleteUser = (userId) => {

    return delete (`http://localhost:3000/admin/setting/delete-user/${userId}`);
}