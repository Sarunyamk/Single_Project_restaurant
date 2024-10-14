import React, { useEffect, useState } from 'react';

import { getUsers, updateRoleUser, deleteUser } from '../api/manage-api'
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

export default function EditUser() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const handleEditRole = async (userId, newRole) => {
        try {
            const response = await updateRoleUser(userId, newRole)
            // อัปเดตข้อมูลใน state ด้วยสถานะใหม่
            setUsers(users.map(item => item.id === userId ? { ...item, role: newRole } : item));
            toast.success('User role updated successfully!');
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    };

    const handleDeleteUser = async (userId) => {

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
                await deleteUser(userId)
                setUsers(users.filter(item => item.id !== userId));
                Swal.fire(
                    'Deleted!',
                    'Your order has been deleted.',
                    'success'
                );
            } catch (error) {
                console.error('Error removing order:', error);
                Swal.fire(
                    'Error!',
                    'There was a problem deleting the order.',
                    'error'
                );
            }
        }
    };

    if (loading) {
        return <p>Loading orders...</p>;
    }

    return (
        <div className='w-4/5 mt-28'>
            <h1 className='text-yellow font-title text-center m-4'>USER</h1>
            <table className="divide-y divide-gray-200 w-full rounded-xl  text-center">
                <thead className="bg-gray-800 text-yellow font-second">
                    <tr>
                        <th className="px-6 py-3  uppercase tracking-wider">NO.</th>
                        <th className="px-6 py-3  uppercase tracking-wider">User ID</th>
                        <th className="px-6 py-3  uppercase tracking-wider">First Name</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Last Name</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Phone Number</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Address</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Action</th>
                    </tr>
                </thead>

                <tbody className="bg-gray-700 text-white divide-y divide-gray-600 ">
                    {users.map((item, index) => (
                        <tr key={item.id}>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap text-yellow">{index + 1}</th>
                            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.firstname}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.lastname}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.phonenumber}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                            <td className="px-6 py-4">
                                <select
                                    defaultValue={item.role}
                                    onChange={(e) => handleEditRole(item.id, e.target.value)}
                                    className="bg-gray-700 text-white rounded-md p-2"
                                >
                                    <option value="ADMIN">ADMIN</option>
                                    <option value="USER">USER</option>
                                </select>
                            </td>
                            <td
                                onClick={() => handleDeleteUser(item.id)}
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
