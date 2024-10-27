import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import useAppStore from '../stores/appStore';
import validateEditProfile from '../Utils/editProfileValidate';
import { getProfile, editProfile } from '../api/user-api';

import { useTranslation } from 'react-i18next';

export default function EditProfileCustomer() {

  const { t } = useTranslation();

  const [user, setUser] = useState({});
  const [formatError, setFormatError] = useState({})

  const token = useAppStore((state) => state.token);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetchProfile();
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

    // รีเซ็ต error ก่อนทำการตรวจสอบใหม่
    setFormatError({});

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
    { label: t('profile.firstname'), name: 'firstname', type: 'text', placeholder: t('profile.firstnamePlaceholder') },
    { label: t('profile.lastname'), name: 'lastname', type: 'text', placeholder: t('profile.lastnamePlaceholder') },
    { label: t('profile.phonenumber'), name: 'phonenumber', type: 'text', placeholder: t('profile.phonePlaceholder') },
    { label: t('profile.address'), name: 'address', type: 'text', placeholder: t('profile.addressPlaceholder') },
    { label: t('profile.email'), name: 'email', type: 'email', placeholder: t('profile.emailPlaceholder') },
  ];

  return (
    <div className='my-40 bg-red-gradient w-1/3 mx-auto p-6 rounded-lg'>
      <h1 className='text-center font-main text-yellow my-4'>{t('profile.title')}</h1>

      <form onSubmit={handleUpdateProfile} className='space-y-4 w-full flex flex-col '>
        {inputs.map((input, index) => (
          <div key={index} className='justify-start items-center mb-2'>
            <div className='flex flex-col'>
              <p className='w-32 text-left'>{input.label} :</p>
              <input
                className='p-2 border rounded-md outline-none'
                type={input.type}
                name={input.name}
                value={user[input.name] || ''}
                onChange={(e) => setUser({ ...user, [input.name]: e.target.value })}
                placeholder={input.placeholder}
              />
            </div>
            {formatError[input.name] && <p className="text-red-500 text-sm">{formatError[input.name]}</p>}
          </div>
        ))}
        <button type='submit' className='bg-yellow text-white p-5 font-head rounded-xl w-1/3 mx-auto cursor-pointer '>
          {t('profile.confirmButton')}
        </button>
      </form>
    </div>
  );
}

