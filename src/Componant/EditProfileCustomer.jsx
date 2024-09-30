import React, { useEffect, useState } from 'react';
import useAppStore from '../zustand/appStore';
import { getProfile, editProfile } from '../api/user-api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


export default function EditProfileCustomer() {
  const [user, setUser] = useState({});
  const [formatError,setFormatError] = useState({})

  const token = useAppStore((state) => state.token);
  const actionRegister = useAppStore((state)=> state.actionRegister)
  
 

  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);

  const fetchProfile = async () => {
    try {
      
      const resp = await getProfile(token);
      setUser(resp.data);
    } catch (err) {
      
      toast.error('Error fetching profile'); 
    }
  };

  const handleUpdateProfile = async (e) => {

    e.preventDefault();
   
    try {

      const resp = await editProfile(user.id, token, user);
      fetchProfile();
      toast.success('Profile updated successfully!'); 
      
    } catch (err) {
      
      toast.error('Error updating profile'); 
    }
  };

  return (
    <div className='my-40 bg-red-gradient w-1/3 mx-auto p-6 flex flex-col justify-center items-center rounded-lg'>
      <h1 className='text-center font-main text-yellow my-4'>Profile</h1>
      <form onSubmit={handleUpdateProfile} className='space-y-4 w-full'>
        <div className='flex flex-row gap-4 justify-start items-center'>
          <p className='w-32 text-right'>Firstname :</p>
          <input
            className='p-2 border rounded-md outline-none'
            type='text'
            name='firstname'
            value={user.firstname || ''} // ใช้ default value เพื่อป้องกัน error
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            placeholder='Firstname...'
          />
        </div>

        <div className='flex flex-row gap-4 justify-start items-center'>
          <p className='w-32 text-right'>Lastname :</p>
          <input
            className='p-2 border rounded-md outline-none'
            type='text'
            name='lastname'
            value={user.lastname || ''} // ใช้ default value เพื่อป้องกัน error
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            placeholder='Lastname...'
          />
        </div>

        <div className='flex flex-row gap-4 justify-start items-center'>
          <p className='w-32 text-right'>Phonenumber :</p>
          <input
            className='p-2 border rounded-md outline-none'
            type='text'
            name='phonenumber'
            value={user.phonenumber || ''} // ใช้ default value เพื่อป้องกัน error
            onChange={(e) => setUser({ ...user, phonenumber: e.target.value })}
            placeholder='Phone number...'
          />
        </div>

        <div className='flex flex-row gap-4 justify-start items-center'>
          <p className='w-32 text-right'>Address :</p>
          <input
            className='p-2 border rounded-md outline-none'
            type='text'
            name='address'
            value={user.address || ''} // ใช้ default value เพื่อป้องกัน error
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            placeholder='Address...'
          />
        </div>

        <div className='flex flex-row gap-4 justify-start items-center'>
          <p className='w-32 text-right'>Email :</p>
          <input
            className='p-2 border rounded-md outline-none'
            type='email'
            name='email'
            value={user.email || ''} // ใช้ default value เพื่อป้องกัน error
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder='Email...'
          />
        </div>

        <button
          type='submit'
          className='bg-yellow text-white p-5 font-head rounded-xl text-center w-1/3 mx-auto cursor-pointer'
        >
          Confirm
        </button>
      </form>

      {/* ToastContainer สำหรับแสดง toast notification */}
      <ToastContainer />
    </div>
  );
}
