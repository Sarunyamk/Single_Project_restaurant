import axios from 'axios'



export const listMenu = () => {
    return axios.get("http://localhost:3000/admin/allmenu")
}

export const createMenu = (formData) => {

    return axios.post("http://localhost:3000/admin/create-menu/", formData)

}
export const updateMenu = (token, id, form) => {

    return axios.patch("http://localhost:3000/admin/edit-menu/" + id, form, {

        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const removeMenu = (token, id) => {

    return axios.delete("http://localhost:3000/admin/delete-menu/" + id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}
