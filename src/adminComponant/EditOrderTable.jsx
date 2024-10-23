import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { getOrders, updateStatusOrder, deleteOrder } from '../api/manage-api'
import useAppStore from '../zustand/appStore';
import Loading from '../Componant/Loading';

export default function EditOrderTable() {

    const [orders, setOrders] = useState([]);
    const token = useAppStore((state) => state.token);

    const loading = useAppStore((state) => state.loading);
    const setLoading = useAppStore((state) => state.setLoading);

    useEffect(() => {
        fetchOrders();
    }, []);
    const fetchOrders = async () => {
        try {
            const response = await getOrders()
            setOrders(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    const handleUpdateStatus = async (orderId, newStatus, token) => {
        try {
            const response = await updateStatusOrder(orderId, newStatus, token)
            // อัปเดตข้อมูลใน state ด้วยสถานะใหม่
            //เพื่อวนลูปผ่านรายการ orders และตรวจสอบว่า order.id ตรงกับ orderId ที่เราต้องการอัปเดตหรือไม่
            setOrders(orders.map(order => order.id === orderId ? { ...order, status: newStatus } : order));
            toast.success('Order Status updated successfully!');
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };


    const handleRemoveOrder = async (orderId, token) => {

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                await deleteOrder(orderId, token)
                setOrders(orders.filter(order => order.id !== orderId));
                Swal.fire(
                    'Deleted!',
                    'Your order has been deleted.',
                    'success'
                );
            } catch (error) {
                Swal.fire(
                    'Error!',
                    'There was a problem deleting the order.',
                    'error'
                );
            }
        }
    };

    if (loading) {
        return <Loading />
    }
    return (
        <div className='mx-4  w-4/5 mt-28'>
            <h1 className='text-yellow font-title text-center m-4'>ORDER</h1>
            <table className="divide-y divide-gray-200 w-full rounded-xl text-center">
                <thead className="bg-gray-800 text-yellow font-second ">
                    <tr>
                        <th className="px-6 py-3  uppercase tracking-wider">NO.</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Customer Name</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Total</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Image</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Create Date</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Action</th>
                    </tr>
                </thead>

                <tbody className="bg-gray-700 text-white divide-y divide-gray-600 ">
                    {orders.map((order, index) => (
                        <tr key={order.id}>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap text-yellow">{index + 1}</th>
                            <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{order.user.firstname}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{order.total} THB</td>
                            <td className="px-6 py-4">
                                <select
                                    defaultValue={order.status}
                                    onChange={(e) => handleUpdateStatus(order.id, e.target.value, token)}
                                    className="bg-gray-700 text-white rounded-md p-2"
                                >
                                    <option value="PENDING">PENDING</option>
                                    <option value="SUCCESS">SUCCESS</option>
                                    <option value="CANCEL">CANCEL</option>
                                </select>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{order.image} </td>
                            <td className="px-6 py-4 whitespace-nowrap">{new Date(order.createdAt).toLocaleDateString()}</td>
                            <td
                                onClick={() => handleRemoveOrder(order.id, token)}
                                className="px-6 py-4 whitespace-nowrap cursor-pointer hover:text-blue-700"
                            >
                                Delete
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
