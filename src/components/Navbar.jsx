

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
import { FiMenu, FiX } from 'react-icons/fi';



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

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

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
      <nav className="fixed inset-x-0 top-0 z-50 bg-red-gradient shadow-sm w-full flex px-8 md:px-8 h-24 items-center">
        <div className="w-full flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={myLogo} className="w-20 h-20 object-contain" alt="Logo" />
          </Link>


          {/* Links for Large Screen */}
          <div className="hidden md:flex gap-8 text-white ">
            <Link to="/" className="font-head hover:text-yellow">{t('navbar.home')}</Link>
            <Link to="/about" className="font-head hover:text-yellow">{t('navbar.about')}</Link>
            <Link to="/menu" className="font-head hover:text-yellow">{t('navbar.menu')}</Link>
            <Link to="/contact" className="font-head hover:text-yellow">{t('navbar.contact')}</Link>
          </div>
          <div className="hidden md:flex gap-8 text-black">
            {user ? (
              <div className="flex items-center space-x-2  cursor-pointer" >
                <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">
                  <span onClick={toggleDropdownUser} className="uppercase tracking-wider cursor-pointer">
                    {user.user.firstname.charAt(0).toUpperCase()}
                  </span>
                </div>
                <IoMdArrowDropdown className=" cursor-pointer text-black" onClick={toggleDropdownUser} />
                {isDropdownUserOpen && (
                  <div className="absolute top-20 bg-white rounded-md shadow-lg" onClick={() => setDropdownUserOpen(false)}>
                    <ul className="py-2">
                      <li>
                        <Link onClick={openHistoryModal} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          {t('navbar.history')}
                        </Link>

                      </li>
                      <li>
                        <Link onClick={openCommentModal} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          {t('navbar.comment')}
                        </Link>
                      </li>
                      <li>
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
              </div>
            ) : (
              <div className="flex gap-10 text-black">
                <Link to="/signup" className="font-head underline text-yellow">{t('navbar.signup')}</Link>
                <Link to="/login" className="font-head underline text-yellow">{t('navbar.login')}</Link>
              </div>
            )}
            <div className="flex items-center sm:justify-end space-x-2 ">
              <button onClick={() => changeLanguage('en')} className=" hover:text-yellow">EN  </button>
              <p>/</p>
              <button onClick={() => changeLanguage('th')} className="hover:text-yellow"> TH</button>



            </div>
          </div>


        </div>
        <div className='flex items-center md:hidden space-x-2'>
          <button onClick={() => changeLanguage('en')} className=" hover:text-yellow">EN  </button>
          <p>/</p>
          <button onClick={() => changeLanguage('th')} className="hover:text-yellow"> TH</button>
        </div>
        <div className="flex items-center md:hidden space-x-2">

          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="ml-4">
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>


        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-40 text-center">

            <div className="flex flex-col space-y-1">
              <Link to="/" className="block py-2 text-gray-700 bg-blue-100" onClick={() => setMobileMenuOpen(false)}>{t('navbar.home')}</Link>
              <Link to="/about" className="block py-2 text-gray-700 bg-blue-100" onClick={() => setMobileMenuOpen(false)}>{t('navbar.about')}</Link>
              <Link to="/menu" className="block py-2 text-gray-700 bg-blue-100" onClick={() => setMobileMenuOpen(false)}>{t('navbar.menu')}</Link>
              <Link to="/contact" className="block py-2 text-gray-700 bg-blue-100" onClick={() => setMobileMenuOpen(false)}>{t('navbar.contact')}</Link>

              {user ? (
                <>
                  <div className="block py-2 text-gray-700 bg-blue-100 cursor-pointer" onClick={() => setMoreMenuOpen(!isMoreMenuOpen)}>{t('navbar.more')}</div>
                  {isMoreMenuOpen && (
                    <div className="space-y-2">
                      <div onClick={openCartModal} className="block py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                        {t('navbar.order')}
                      </div>
                      <div onClick={openHistoryModal} className="block py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                        {t('navbar.history')}
                      </div>
                      <div onClick={openCommentModal} className="block py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                        {t('navbar.comment')}
                      </div>
                      <Link to="/settingcustomer" className="block py-2 text-gray-700 cursor-pointer hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                        {t('navbar.setting')}
                      </Link>
                    </div>
                  )}
                  <Link onClick={hdlClickLogout} to="/login" className="block py-2 text-gray-700 bg-blue-100" >
                    {t('navbar.logout')}
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signup" className="block py-2 bg-blue-100 underline text-yellow" onClick={() => setMobileMenuOpen(false)}>{t('navbar.signup')} </Link>
                  <Link to="/login" className="block py-2 bg-blue-100 underline text-yellow" onClick={() => setMobileMenuOpen(false)}>{t('navbar.login')}</Link>
                </>
              )}

            </div>
          </div>
        )}
      </nav>
      {isCartModalOpen && <OrderCustomerCart isOpen={isCartModalOpen} onClose={closeCartModal} />}
      {isCommentModalOpen && <CommentOrdersModal orders={orders} onClose={closeCommentModal} />}
      {isHistoryModalOpen && <HistoryOrder orders={orders} onClose={closeHistoryModal} />}
    </div>

  );
}




