import React, { useEffect, useState } from 'react';
import useAppStore from './../zustand/appStore';
import { listMenu, removeMenu, updateMenu } from '../api/admin-api';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const MenuAdmin = () => {
    const token = useAppStore((state) => state.token);
    const [menu, setMenu] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editMenu, setEditMenu] = useState(null);

    useEffect(() => {
        showAllMenu();
    }, []);

    const showAllMenu = async () => {
        try {
            const resp = await listMenu();
            setMenu(resp.data);
        } catch (err) {
            console.log(err);
        }
    };


    const handleDeleteMenu = async (id) => {

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });
        try {
            await removeMenu(token, id);
            showAllMenu();
            toast.success(`Delete menu ID ${id} success`);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };


    const handleEditMenu = (item) => {
        setEditMenu(item);
        setIsEdit(true);
    };

    const handleUpdateMenu = async (e) => {
        e.preventDefault();
        try {
            await updateMenu(token, editMenu.id, editMenu);
            showAllMenu();
            setEditMenu(null);
            setIsEdit(false);
            toast.success(`Update menu ID ${editMenu.id} success`);
        } catch (err) {
            console.log(err);
        }
    };

    const inputs = [
        { label: 'Menu Name', name: 'menuName', type: 'text', placeholder: 'Menu Name...' },
        { label: 'Price', name: 'price', type: 'number', placeholder: 'Price...' },
        { label: 'Description', name: 'description', type: 'text', placeholder: 'Description...' },
    ];

    return (
        <div className="grid grid-cols-4 gap-6 mb-6 w-11/12 mx-auto">
            {menu.map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                    <img src={item.image} className='w-full h-60' />
                    <h3 className="text-lg font-bold">{item.menuName}</h3>
                    <p className="text-gray-600 text-xs">{item.description}</p>
                    <p className="mt-2 text-red-500 font-semibold">${item.price}</p>
                    <div className='flex gap-2 mt-2 justify-end'>
                        <button onClick={() => handleDeleteMenu(item.id)} className='bg-yellow p-2 rounded-md'>Delete</button>
                        <button onClick={() => handleEditMenu(item)} className='bg-yellow p-2 rounded-md'>Edit</button>
                    </div>
                </div>
            ))}

            {isEdit && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Edit Menu</h2>
                        <form onSubmit={handleUpdateMenu} className='space-y-4'>
                            {inputs.map((input, index) => (
                                <div key={index} className='flex flex-row gap-4 justify-start items-center'>
                                    <p className='w-32 text-right'>{input.label} :</p>
                                    <input
                                        className='p-2 border rounded-md outline-none'
                                        type={input.type}
                                        name={input.name}
                                        value={editMenu[input.name] || ''}
                                        onChange={(e) => setEditMenu({ ...editMenu, [input.name]: e.target.value })}
                                        placeholder={input.placeholder}
                                    />
                                </div>
                            ))}
                            <button
                                type='submit'
                                className='bg-yellow text-white p-5 font-head rounded-xl w-full cursor-pointer'>
                                Confirm
                            </button>
                            <button
                                type='button'
                                onClick={() => setIsEdit(false)}
                                className='bg-red-500 text-white p-2 rounded-md w-full'>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuAdmin;
