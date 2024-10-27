import React, { useState } from 'react';

import useAppStore from '../stores/appStore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { sendEmailApi } from '../api/send-email-api';

export default function SendEmailForm() {

    const { t } = useTranslation();

    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const user = useAppStore((state) => state.user);
    const token = useAppStore((state) => state.token);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!token) {
            toast.error('Please log in to send an email');
            return navigate('/login'); // เปลี่ยนเส้นทางไปหน้าเข้าสู่ระบบ
        }
        if (user?.user?.role === "ADMIN") {
            toast.error('Admins cannot send emails.');
            return;
        }

        try {
            const response = await sendEmailApi(recipient, subject, message, token);
            if (response.status === 200) {
                setRecipient('');
                setSubject('');
                setMessage('');
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error('Failed to send email');
        }
    };



    return (
        <div className="flex items-center justify-center h-[500px]">
            <form onSubmit={handleSubmit} className="bg-slate-200 p-8 rounded-xl shadow-xl w-full max-w-lg">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{t('emailForm.title')}</h2>

                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold mb-1">{t('emailForm.recipientEmail')}</label>
                    <input
                        type="email"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        placeholder={t('emailForm.recipientPlaceholder')}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 font-semibold mb-1">{t('emailForm.subject')}</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder={t('emailForm.subjectPlaceholder')}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-600 font-semibold mb-1">{t('emailForm.message')}</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t('emailForm.messagePlaceholder')}
                        required
                        className="w-full px-4 py-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    {t('emailForm.sendButton')}
                </button>
            </form>
        </div>
    );
}
