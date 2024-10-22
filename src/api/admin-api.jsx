import axios from 'axios'



export const listMenu = () => {
    return axios.get("http://localhost:3000/admin/manage/allmenu")
}

export const getCategoryName = () => {
    return axios.get("http://localhost:3000/admin/manage/getCategoryName")
}

export const createMenu = (token, formData) => {

    return axios.post("http://localhost:3000/admin/manage/create-menu", formData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}
export const updateMenu = (token, id, form) => {

    return axios.patch("http://localhost:3000/admin/manage/edit-menu/" + id, form, {

        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const removeMenu = (token, id) => {

    return axios.delete("http://localhost:3000/admin/manage/delete-menu/" + id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}
