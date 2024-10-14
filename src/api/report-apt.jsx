import axios from 'axios'

export const getDashboard = () => {
    return axios.get('http://localhost:3000/order/dashboard')
}
export const getComments = () => {
    return axios.get('http://localhost:3000/admin/report/all-comment');
}
export const getTotalSaleUnit = () => {
    return axios.get('http://localhost:3000/admin/report/menu-unit');
}