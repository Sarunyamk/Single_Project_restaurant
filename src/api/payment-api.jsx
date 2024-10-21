import axios from "axios";

export const createPayment = (customerId) => {
    return axios.post('http://localhost:3000/payment/confirm-payment', { customerId });
};