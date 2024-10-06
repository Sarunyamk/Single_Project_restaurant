import React, { useEffect, useState } from 'react';
import useAppStore from '../zustand/appStore';
import validateEditProfile from '../Utils/editProfileValidate';
import { getProfile, editProfile } from '../api/user-api';
import { toast } from 'react-toastify';


export default function EditProfileCustomer() {

  const [user, setUser] = useState({});
  const token = useAppStore((state) => state.token);
  const [formatError,setFormatError] = useState({})

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
    const error = validateEditProfile(user);
    
    
    if (error) {
      return setFormatError(error); 
    }
   
    try {

      const resp = await editProfile(user.id, token, user);
      fetchProfile();
      toast.success(`updated successfully!`); 
      
    } catch (err) {
      
      toast.error('Error updating profile'); 
    }
  };

  const inputs = [
    { label: 'Firstname', name: 'firstname', type: 'text', placeholder: 'Firstname...' },
    { label: 'Lastname', name: 'lastname', type: 'text', placeholder: 'Lastname...' },
    { label: 'Phonenumber', name: 'phonenumber', type: 'text', placeholder: 'Phone number...' },
    { label: 'Address', name: 'address', type: 'text', placeholder: 'Address...' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Email...' },
  ];

  return (
    <div className='my-40 bg-red-gradient w-1/3 mx-auto p-6 rounded-lg'>

        <h1 className='text-center font-main text-yellow my-4'>Profile</h1>

        <form onSubmit={handleUpdateProfile} className='space-y-4 w-full flex flex-col '>
            
          {inputs.map((inputs, index) => (
            <div key={index} className='flex flex-row gap-4 justify-start items-center'>
              <p className='w-32 text-right'>{inputs.label} :</p>
              <input
                className='p-2 border rounded-md outline-none'
                type={inputs.type}
                name={inputs.name}
                value={user[inputs.name] || ''}
                onChange={(e) => setUser({ ...user, [inputs.name]: e.target.value })}
                placeholder={inputs.placeholder}
              />
              {formatError[inputs.name] && <p className="text-red-500 text-sm">{formatError[inputs.name]}</p>}
            </div>
          ))}
          <button   type='submit'
                    className='bg-yellow text-white p-5 font-head rounded-xl w-1/3 mx-auto cursor-pointer '>
                    Confirm  
          </button>
        </form>
    </div>
  );
}

