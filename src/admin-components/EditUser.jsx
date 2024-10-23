import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { getUsers, updateRoleUser, deleteUser } from '../api/manage-api'
import useAppStore from '../stores/appStore';
import Loading from '../components/Loading';

export default function EditUser() {

    const [users, setUsers] = useState([]);
    const token = useAppStore((state) => state.token);

    const loading = useAppStore((state) => state.loading);
    const setLoading = useAppStore((state) => state.setLoading);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers()
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleEditRole = async (userId, newRole, token) => {
        try {
            const response = await updateRoleUser(userId, newRole, token)
            // อัปเดตข้อมูลใน state ด้วยสถานะใหม่
            setUsers(users.map(item => item.id === userId ? { ...item, role: newRole } : item));
            toast.success('User role updated successfully!');
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    };

    const handleDeleteUser = async (userId, token) => {

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
                await deleteUser(userId, token)
                setUsers(users.filter(item => item.id !== userId));
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
        <div className='mx-auto mt-24 w-4/5 p-10'>
            <h1 className='text-yellow font-title text-center m-4'>USER</h1>
            <table className="divide-y divide-gray-200 w-full  text-center ">
                <thead className="bg-gray-800 text-yellow font-second">
                    <tr>
                        <th className="px-4 py-3  uppercase ">User ID</th>
                        <th className="px-4 py-3  uppercase ">Fulname</th>
                        <th className="px-4 py-3  uppercase ">Phone Number</th>
                        <th className="px-4 py-3  uppercase ">Address</th>
                        <th className="px-4 py-3  uppercase ">Email</th>
                        <th className="px-4 py-3  uppercase ">Role</th>
                        <th className="px-4 py-3  uppercase ">Action</th>
                    </tr>
                </thead>

                <tbody className="bg-gray-700 text-white divide-y divide-gray-600 ">
                    {users.map((item, index) => (
                        <tr key={item.id}>
                            <td className="px-4 py-4 whitespace-nowrap">{item.id}</td>
                            <td className="px-4 py-4 whitespace-nowrap">{`${item.firstname} ${item.lastname}`}</td>
                            <td className="px-4 py-4 whitespace-nowrap">{item.phonenumber}</td>
                            <td className="px-4 py-4 whitespace-nowrap">{item.address}</td>
                            <td className="px-4 py-4 whitespace-nowrap">{item.email}</td>
                            <td className="px-4 py-4">
                                <select
                                    defaultValue={item.role}
                                    onChange={(e) => handleEditRole(item.id, e.target.value, token)}
                                    className="bg-gray-700 text-white rounded-md p-2"
                                >
                                    <option value="ADMIN">ADMIN</option>
                                    <option value="USER">USER</option>
                                </select>
                            </td>
                            <td
                                onClick={() => handleDeleteUser(item.id, token)}
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
