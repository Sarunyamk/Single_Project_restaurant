import React, { useState } from 'react';
import { resetPassword } from '../api/auth-api';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams()
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async () => {
        if (password !== confirmPassword) {
            setMessage('password does not match');
            return;
        }

        try {

            const response = await resetPassword(token, { password });

            setMessage(response.data.message);
        } catch (error) {
            setMessage('reset password error');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div className='bg-gray-300 w-96 h- 96 my-40 rounded-md flex flex-col justify-center items-center gap-6 p-4 '>
                <h2 className='font-main'>Reset Password</h2>
                <input
                    type="password"
                    placeholder="new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-2 rounded-xl w-2/3'
                />
                <input
                    type="password"
                    placeholder="confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='p-2 rounded-xl w-2/3'
                />
                <button onClick={handleResetPassword} className='bg-yellow p-2 rounded-lg font-head'>confirm</button>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};
export default ResetPassword;
