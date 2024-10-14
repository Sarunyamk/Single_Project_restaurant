import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { addComments } from '../api/comment-api';
import useAppStore from '../zustand/appStore';

export default function CommentOrdersModal({ orders, onClose }) {

    const token = useAppStore((state) => state.token);
    const [comments, setComments] = useState({}); // สร้าง state สำหรับเก็บ comment
    const [ratings, setRatings] = useState({});   // สร้าง state สำหรับเก็บ rating

    // ฟังก์ชันจัดการการเปลี่ยนแปลงใน textarea ของคอมเมนต์
    const handleCommentChange = (orderId, value) => {
        setComments({ ...comments, [orderId]: value });
    };

    // ฟังก์ชันจัดการการเปลี่ยนแปลงใน select ของเรตติ้ง
    const handleRatingChange = (orderId, value) => {
        setRatings({ ...ratings, [orderId]: value });
    };

    const submitComments = async () => {
        try {
            // จัดรูปแบบข้อมูลก่อนส่ง
            const formattedComments = orders.map(item => ({
                orderId: item.id,
                comment: comments[item.id] || '',  // ส่ง comment ตาม orderId
                rating: ratings[item.id] || ''     // ส่ง rating ตาม orderId
            }));

            console.log('Submitting comments:', formattedComments); // ตรวจสอบข้อมูลที่ส่ง

            // ส่งข้อมูลไปยัง backend
            await addComments(token, formattedComments);
            Swal.fire('Success', 'Your comments have been submitted', 'success');
            onClose();
        } catch (error) {
            console.error('Failed to submit comments:', error);
            Swal.fire('Error', 'Failed to submit comments', 'error');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
                <h2 className='text-center font-main text-yellow mb-4'>Your Order</h2>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {orders.map(item => (
                        <div key={item.id} className='mb-4'>
                            <div className='flex justify-between items-center font-bold'>
                                <p>Order ID: {item.id}</p>
                                <p>Total: {item.total} THB</p>
                            </div>
                            <textarea
                                placeholder="Write your commen ...."
                                className="w-full p-2 border rounded-md"
                                value={comments[item.id] || ''} // ค่าใน textarea จะเปลี่ยนตาม orderId
                                onChange={(e) => handleCommentChange(item.id, e.target.value)} // จัดการการเปลี่ยนแปลงในคอมเมนต์
                                maxLength={50}
                            />
                            <select
                                value={ratings[item.id] || ''} // ค่า select จะแสดงตาม orderId
                                onChange={(e) => handleRatingChange(item.id, e.target.value)} // จัดการการเปลี่ยนแปลงในเรตติ้ง
                                className="mt-2 p-2 border rounded-md w-full"
                            >
                                <option value="">Select Rating</option> {/* เพิ่มตัวเลือกว่างสำหรับเลือก */}
                                <option value="GOOD">Good</option>
                                <option value="AVERAGE">Average</option>
                                <option value="BAD">Bad</option>
                            </select>
                        </div>
                    ))}
                </div>
                <button onClick={submitComments} className='mt-4 w-full bg-green-500 text-white p-2 rounded-lg'>
                    Comment
                </button>
                <button onClick={onClose} className='mt-4 w-full bg-red-500 text-white p-2 rounded-lg'>
                    Close
                </button>
            </div>
        </div>
    );
}
