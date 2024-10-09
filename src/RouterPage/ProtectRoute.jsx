import React, { useEffect, useState } from 'react'
import useAppStore from '../zustand/appStore';
import { currentUser } from '../api/auth-api';
import { Navigate } from 'react-router-dom';


const ProtectRoute = ({ element, allow }) => {

  const [isAllowed, setIsAllowed] = useState(null)

  const token = useAppStore((state) => state.token)
  const user = useAppStore((state) => state.user)

  useEffect(() => {
    checkRole()
  }, [])

  const checkRole = async () => {

    try {

      const resp = await currentUser(token)
      console.log('resp', resp)

      const role = resp.data.user.role
      console.log('role backend', role)

      if (allow.includes(role)) {

        setIsAllowed(true)
      } else {
        setIsAllowed(false)

      }


    } catch (err) {
      console.log(err)
      setIsAllowed(false)

    }
  }

  if (isAllowed === null) {
    return <div>Loading...</div>
  }

  if (!isAllowed) {
    return <Navigate to={'/login'} />
  }



  return element
}

export default ProtectRoute
