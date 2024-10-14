import axios from 'axios'

export const createCart = (token, cartData) => {

    return axios.post('http://localhost:3000/cart', cartData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getCart = (token, userId) => {

    return axios.get(`http://localhost:3000/cart/get-cart/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteCartItem = (token, id) => {

    return axios.delete("http://localhost:3000/cart/delete-cart_item/" + id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const updateCartItem = async (token, cartItemId, data) => {
    return axios.patch(`http://localhost:3000/cart/update-cart_item/${cartItemId}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
