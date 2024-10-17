import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import { IoMdArrowDropdown } from "react-icons/io";

export default function SideBar() {

    const [isDropdownManage, setIsDropdownManage] = useState(false);
    const [isDropdownSetting, setIsDropdownSetting] = useState(false);
    const [isDropdownReport, setIsDropdownReport] = useState(false);

    const toggleDropdownManage = () => {
        setIsDropdownManage(!isDropdownManage);
    };
    const toggleDropdownSetting = () => {
        setIsDropdownSetting(!isDropdownSetting);
    };
    const toggleDropdownReport = () => {
        setIsDropdownReport(!isDropdownReport);
    };

    return (
        <div className='flex flex-col items-center gap-10 bg-yellow w-1/5 min-h-screen'>
            <div className='mt-40 flex flex-col gap-4 items-center fixed'>
                <Link to='/admin' className='mt-32 px-5 py-3 font-main  hover:text-white duration-200'>Home</Link>

                <div className="relative">
                    <button
                        onClick={toggleDropdownManage}
                        className='px-5 py-3 font-main  hover:text-white duration-200 flex items-center' > Manage
                        <IoMdArrowDropdown onClick={toggleDropdownManage} />
                    </button>
                    {isDropdownManage && (
                        <div className="absolute left-0 w-48 bg-white shadow-lg  z-10">
                            <Link
                                to='/admin/manage/edit-orders'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                onClick={() => setIsDropdownManage(false)} > Edit Order
                            </Link>
                            <Link
                                to='/admin/manage/menu'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                onClick={() => setIsDropdownManage(false)} > Menu
                            </Link>
                        </div>
                    )}
                </div>
                <div className="relative">
                    <button
                        onClick={toggleDropdownReport}
                        className='px-5 py-3 font-main  hover:text-white duration-200 flex items-center' > Report
                        <IoMdArrowDropdown onClick={toggleDropdownReport} />
                    </button>
                    {isDropdownReport && (
                        <div className="absolute left-0 w-48 bg-white shadow-lg  z-10">
                            <Link
                                to='/admin/report/total-sales'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                onClick={() => setIsDropdownReport(false)} > Sales
                            </Link>
                            <Link
                                to='/admin/report/comments'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                onClick={() => setIsDropdownReport(false)} > Comments
                            </Link>
                            <Link
                                to='/admin/report/total-unit-sold'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                onClick={() => setIsDropdownReport(false)} > Total units sold
                            </Link>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={toggleDropdownSetting}
                        className='px-5 py-3 font-main  hover:text-white duration-200 flex items-center'>
                        Setting <IoMdArrowDropdown onClick={toggleDropdownSetting} />
                    </button>

                    {isDropdownSetting && (
                        <div className="absolute left-0 w-48 bg-white shadow-lg  z-10">
                            <Link
                                to='/admin/setting/edit-users'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                onClick={() => setIsDropdownSetting(false)} > User
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
