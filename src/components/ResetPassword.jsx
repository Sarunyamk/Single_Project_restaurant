import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { resetPassword } from '../api/auth-api';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ResetPassword = () => {

    const { t } = useTranslation();

    const { token } = useParams()
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleResetPassword = async () => {
        if (password !== confirmPassword) {
            setMessage(t('resetPassword.passwordMismatch'));
            return;
        }

        try {

            const response = await resetPassword(token, { password });

            setMessage(t('resetPassword.successMessage'));
            navigate('/login');
        } catch (error) {
            setMessage(t('resetPassword.errorMessage'));
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div className='bg-gray-300 w-96 h-96 my-40 rounded-md flex flex-col justify-center items-center gap-6 p-4 '>
                <h2 className='font-main'>{t('resetPassword.title')}</h2>
                <input
                    type="password"
                    placeholder={t('resetPassword.newPasswordPlaceholder')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-2 rounded-xl w-2/3'
                />
                <input
                    type="password"
                    placeholder={t('resetPassword.confirmPasswordPlaceholder')}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='p-2 rounded-xl w-2/3'
                />
                <button onClick={handleResetPassword} className='bg-yellow p-2 rounded-lg font-head'>
                    {t('resetPassword.confirmButton')}
                </button>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};
export default ResetPassword;
