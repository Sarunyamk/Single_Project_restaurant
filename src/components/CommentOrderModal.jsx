import { updateCommentStatus } from '../api/comment-api';
import useAppStore from '../stores/appStore';
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function CommentOrdersModal({ orders, onClose }) {

    const { t } = useTranslation();
    const token = useAppStore((state) => state.token);
    const [comments, setComments] = useState({});
    const [ratings, setRatings] = useState({});

    // จัดการการเปลี่ยนแปลงของคอมเมนต์
    const handleCommentChange = (orderId, value) => {
        setComments({ ...comments, [orderId]: value });
    };

    // จัดการการเปลี่ยนแปลงของเรตติ้ง
    const handleRatingChange = (orderId, value) => {
        setRatings({ ...ratings, [orderId]: value });
    };

    // ส่งข้อมูลคอมเมนต์กลับไปที่ API
    const submitComments = async () => {
        try {
            const formattedComments = orders.map(order => ({
                orderId: order.id,
                comment: comments[order.id] || '',
                rating: ratings[order.id] || '',
            })).filter(comment => comment.comment && comment.rating); // กรองเฉพาะคอมเมนต์ที่มีข้อมูลครบ

            if (formattedComments.length === 0) {
                Swal.fire('Warning', 'Please provide comments and ratings for all items.', 'warning');
                return;
            }

            await updateCommentStatus(token, formattedComments);
            Swal.fire('Success', 'Your comments have been submitted', 'success');
            onClose();
        } catch (error) {
            Swal.fire('Error', 'Failed to submit comments', 'error');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-center font-main text-yellow mb-4">{t('orderModal.yourOrders')}</h2>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {orders.map(order => (
                        <div key={order.id} className="mb-4">
                            <div className="flex justify-between items-center font-bold">
                                <p className="text-yellow">{t('orderModal.orderId')}: {order.id}</p>
                                <p className="text-yellow">{t('orderModal.total')}: {order.total} {t('menu.bath')}</p>
                            </div>

                            <div>
                                <span className="text-yellow">{t('orderModal.order')}:</span>
                                {order.order_detail.map(detail => (
                                    <span key={detail.id}>{` ${detail.item.menuName} - ${detail.count} ${t('orderModal.pcs')}, `}</span>
                                ))}
                            </div>

                            <textarea
                                placeholder={t('orderModal.commentPlaceholder')}
                                className="w-full p-2 border rounded-md"
                                value={comments[order.id] || ''}
                                onChange={e => handleCommentChange(order.id, e.target.value)}
                                maxLength={70}
                            />
                            <select
                                value={ratings[order.id] || ''}
                                onChange={e => handleRatingChange(order.id, e.target.value)}
                                className="mt-2 p-2 border rounded-md w-full"
                            >
                                <option value="">{t('orderModal.selectRating')}</option>
                                <option value="GOOD">{t('orderModal.good')}</option>
                                <option value="AVERAGE">{t('orderModal.average')}</option>
                                <option value="BAD">{t('orderModal.bad')}</option>
                            </select>
                        </div>
                    ))}
                </div>
                <button onClick={submitComments} className="mt-4 w-full bg-green-500 text-white p-2 rounded-lg">
                    {t('orderModal.submitComment')}
                </button>
                <button onClick={onClose} className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg">
                    {t('orderModal.close')}
                </button>
            </div>
        </div>
    );
}
