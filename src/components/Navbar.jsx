

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import myLogo from '../img/imgBg/myLogo.png';

import useAppStore from '../stores/appStore';
import OrderCustomerCart from './OrderCustomerCart';
import { getOrdersByUserId } from '../api/comment-api';
import { getHistoryByUserId } from '../api/user-api';
import CommentOrdersModal from './CommentOrderModal';
import useCartStore from '../stores/cartStore';
import HistoryOrder from './HistoryOrder';

import { useTranslation } from 'react-i18next';
// นำเข้า changeLanguage จาก i18n
import { changeLanguage } from '../i18n';


export default function NavBar() {

  const { t } = useTranslation();

  const user = useAppStore((state) => state.user);
  const token = useAppStore((state) => state.token);

  const actionLogout = useAppStore((state) => state.actionLogout);
  const setTotalCount = useCartStore((state) => state.setTotalCount);
  const totalCount = useCartStore((state) => state.totalCount);

  const [isDropdownUserOpen, setDropdownUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // สถานะเมนู
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isCommentModalOpen, setCommentModalOpen] = useState(false);
  const [isHistoryModalOpen, setHistoryModalOpen] = useState(false);
  const [orders, setOrders] = useState([]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdownUser = () => {
    setDropdownUserOpen(!isDropdownUserOpen);
  };

  const hdlClickLogout = () => {
    actionLogout();
  };

  const openCartModal = () => {
    setCartModalOpen(true);
  };

  const closeCartModal = () => {
    setCartModalOpen(false);
  };

  const openCommentModal = async () => {
    if (!user || !user.user || !user.user.id) {
      console.error('User ID is missing');
      return;
    }

    try {
      const response = await getOrdersByUserId(token, user.user.id); // ดึงข้อมูล order
      setOrders(response.data); // เก็บ order ใน state      
      setCommentModalOpen(true); // เปิด modal สำหรับ comment
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  const closeCommentModal = () => {
    setCommentModalOpen(false);
  };
  const openHistoryModal = async () => {
    if (!user || !user.user || !user.user.id) {
      console.error('User ID is missing');
      return;
    }

    try {
      const response = await getHistoryByUserId(token, user.user.id); // ดึงข้อมูล order
      setOrders(response.data); // เก็บ order ใน state      
      setHistoryModalOpen(true); // เปิด modal สำหรับ comment
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  const closeHistoryModal = () => {
    setHistoryModalOpen(false);
  };


  useEffect(() => {
    if (user) {
      setDropdownUserOpen(false);

    }
  }, [user, isCartModalOpen]);


  return (
    <div>

      <nav className="top-0 left-0 w-full flex justify-between px-4 md:px-8 h-24 items-center bg-red-gradient fixed z-20">

        <div className="w-32 h-20 md:w-40 md:h-24">
          <img src={myLogo} className="w-full h-full object-contain" alt="Logo" />
        </div>


        <div className="hidden md:flex gap-8 text-white">
          <Link to="/" className="font-head">{t('navbar.home')}</Link>
          <Link to="/about" className="font-head">{t('navbar.about')}</Link>
          <Link to="/menu" className="font-head">{t('navbar.menu')}</Link>
          <Link to="/contact" className="font-head">{t('navbar.contact')}</Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>


        <div>
          {user ? (
            <div className="flex gap-10 items-center">
              <div className="relative">
                <div className="flex items-end text-yellow">
                  <h3 className="font-main">
                    {t('navbar.hello')} <span onClick={toggleDropdownUser} className="uppercase tracking-wider cursor-pointer">
                      {user.user.firstname}
                    </span>
                  </h3>
                  <IoMdArrowDropdown className="cursor-pointer" onClick={toggleDropdownUser} />
                </div>
                {isDropdownUserOpen && (
                  <div className="absolute mt-2 w-32 top-6 right-0 bg-white rounded-md shadow-lg">
                    <ul className="py-2">
                      <li>
                        <Link onClick={openHistoryModal} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          {t('navbar.history')}
                        </Link>
                        <Link onClick={openCommentModal} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          {t('navbar.comment')}
                        </Link>
                        <Link to="/settingcustomer" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          {t('navbar.setting')}
                        </Link>
                      </li>
                      <li>
                        <Link onClick={hdlClickLogout} to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          {t('navbar.logout')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Link>
                <div onClick={openCartModal} className="w-8 h-8 relative">
                  <FaCartShopping className="w-8 h-8 text-white hover:text-yellow" />
                  {totalCount > 0 && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-yellow text-xs flex items-center justify-center">
                      {totalCount} {/* แสดงจำนวนสินค้าในตะกร้า */}
                    </div>
                  )}


                </div>
              </Link>
              <div className='flex justify-center items-center gap-2 text-white'>
                <button onClick={() => changeLanguage('en')} className=" hover:text-blue-800">EN  </button>
                <p>/</p>
                <button onClick={() => changeLanguage('th')} className="hover:text-blue-800"> TH</button>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 md:gap-10">
              <Link to="/signup" className="font-head underline text-yellow">{t('navbar.signup')}</Link>
              <Link to="/login" className="font-head underline text-yellow">{t('navbar.login')}</Link>
              <div className='flex justify-center items-center gap-2 text-white'>
                <button onClick={() => changeLanguage('en')} className=" hover:text-blue-800">EN  </button>
                <p>/</p>
                <button onClick={() => changeLanguage('th')} className="hover:text-blue-800"> TH</button>
              </div>
            </div>
          )}

        </div>
      </nav>


      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-red-gradient flex flex-col items-center gap-4 text-white py-4 z-50">
          <Link to="/" className="font-head">Home</Link>
          <Link to="/about" className="font-head">About</Link>
          <Link to="/menu" className="font-head">Menu</Link>
          <Link to="/contact" className="font-head">Contact</Link>
        </div>
      )}

      {isCartModalOpen && <OrderCustomerCart isOpen={isCartModalOpen} onClose={closeCartModal} />}
      {isCommentModalOpen && <CommentOrdersModal orders={orders} onClose={closeCommentModal} />}
      {isHistoryModalOpen && <HistoryOrder orders={orders} onClose={closeHistoryModal} />}
    </div>
  );
}




