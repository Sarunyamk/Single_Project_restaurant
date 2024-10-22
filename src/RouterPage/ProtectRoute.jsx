import React, { useEffect, useState } from 'react'

import useAppStore from '../zustand/appStore';

import { Navigate } from 'react-router-dom';


const ProtectRoute = ({ element, allow }) => {

  const [isAllowed, setIsAllowed] = useState(null)

  const token = useAppStore((state) => state.token)
  const user = useAppStore((state) => state.user)

  useEffect(() => {
    checkRole()
  }, [])
  console.log(user, "this is user")
  const checkRole = async () => {

    try {

      const role = user.user.role

      if (allow.includes(role)) {

        setIsAllowed(true)
      } else {
        setIsAllowed(false)

      }

    } catch (err) {
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
