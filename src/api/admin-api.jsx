import axios from 'axios'



export const listMenu = () => {
    return axios.get("http://localhost:3000/admin/manage/allmenu")
}

export const getCategoryName = () => {
    return axios.get("http://localhost:3000/admin/manage/getCategoryName")
}

export const createMenu = (formData) => {

    return axios.post("http://localhost:3000/admin/manage/create-menu", formData)

}
export const updateMenu = (id, form) => {

    return axios.patch("http://localhost:3000/admin/manage/edit-menu/" + id, form, {

    })

}

export const removeMenu = (id) => {

    return axios.delete("http://localhost:3000/admin/manage/delete-menu/" + id)

}
