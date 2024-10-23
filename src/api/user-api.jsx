import axios from 'axios'

export const getProfile = (token) => {

  return axios.get("http://localhost:3000/user/",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}


export const editProfile = (id, token, user) => {
  return axios.patch(`http://localhost:3000/user/edit-profile/${id}`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getHistoryByUserId = async (token, customerId) => {
  return await axios.get(`http://localhost:3000/user/history-order/${customerId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

};
