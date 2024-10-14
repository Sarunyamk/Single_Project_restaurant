import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import useAppStore from '../zustand/appStore'
import myLogo from '../img/imgBg/myLogo.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import OrderCustomerCart from '../Componant/OrderCustomerCart'
import { getCart } from '../api/cart-api';
import { getOrdersByUserId } from '../api/comment-api';
import CommentOrdersModal from './CommentOrderModal';


export default function NavBar() {

  const user = useAppStore((state) => state.user)
  const token = useAppStore((state) => state.token);

  const actionLogout = useAppStore((state) => state.actionLogout)

  const [isDropdownUserOpen, setDropdownUserOpen] = useState(false)
  const [isCartModalOpen, setCartModalOpen] = useState(false)
  const [isCommentModalOpen, setCommentModalOpen] = useState(false); // เพิ่ม state สำหรับเปิดปิด Comment modal
  const [orders, setOrders] = useState([]); // state เก็บรายการคำสั่งซื้อ
  const [cartCount, setCartCount] = useState(0);

  const toggleDropdownUser = () => {
    setDropdownUserOpen(!isDropdownUserOpen)
  }

  const hdlClickLogout = () => {
    actionLogout()
  }
  const openCartModal = () => {
    setCartModalOpen(true)
  }

  const closeCartModal = () => {
    setCartModalOpen(false)
  }
  const fetchCartCount = async () => {
    try {
      const response = await getCart(token, user.user.id);
      if (response.status === 200) {
        const totalCount = response.data.cart_Items.reduce((acc, item) => acc + item.count, 0);
        setCartCount(totalCount);
      }
    } catch (error) {
      console.error('Failed to fetch cart count:', error);
    }
  };

  const openCommentModal = async () => {
    try {
      const response = await getOrdersByUserId(token, user.user.id); // ดึงข้อมูล order
      console.log(user.user.id, "user.user.id")
      setOrders(response.data); // เก็บ order ใน state
      setCommentModalOpen(true); // เปิด modal สำหรับ comment
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  const closeCommentModal = () => {
    setCommentModalOpen(false);
  };

  useEffect(() => {
    if (user) {
      // fetchCartCount();
    }
  }, [user, isCartModalOpen]);

  useEffect(() => {
    if (user) {
      setDropdownUserOpen(false);
      // fetchCartCount();
    }
  }, [user, isCartModalOpen]);
  return (
    <div >
      <nav className=' top-0 left-0 w-full flex justify-around h-24 items-center  bg-red-gradient fixed z-20'>
        <div className='w-40 h-24'>
          <img src={myLogo} className='w-full h-full object-contain' />
        </div>
        <div className='flex gap-8 text-white'>
          <Link to="/" className='font-head'>Home</Link>
          <Link to='/about' className='font-head'>About</Link>
          <Link to='/menu' className='font-head'>Menu</Link>
          <Link to='/contact' className='font-head'>Contact</Link>
        </div>

        <div>
          {user ? (
            <div className='flex gap-10 items-center '>
              <div className='relative'>
                <div className='flex items-end  text-yellow'>
                  <h3 className='font-main ' >Hello : <span onClick={toggleDropdownUser} className='uppercase tracking-wider cursor-pointer'>{user.user.firstname}</span></h3>
                  <IoMdArrowDropdown className=' cursor-pointer' onClick={toggleDropdownUser} />
                </div>
                {isDropdownUserOpen && (
                  <div className='absolute  mt-2 w-32 top-6 right-0 bg-white rounded-md shadow-lg'>
                    <ul className='py-2'>
                      <li>
                        <Link onClick={openCommentModal} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                          Comment
                        </Link>
                        <Link to='/settingcustomer' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                          Setting
                        </Link>
                      </li>
                      <li>
                        <Link onClick={hdlClickLogout} to='/login' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Link>
                <div onClick={openCartModal} className='w-8 h-8 relative '>
                  <FaCartShopping className='w-8 h-8 text-white hover:text-yellow' />
                  {cartCount > 0 && (
                    <div className='absolute -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center bg-yellow'>
                      <h1 className='text-white text-xs'>{cartCount}</h1>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ) : (
            <div className='flex gap-10'>
              <Link to='/signup' className='font-head underline text-yellow'>Sign up</Link>
              <Link to='/login' className='font-head underline text-yellow' >Login</Link>
            </div>
          )}
        </div>
      </nav>

      {isCartModalOpen && <OrderCustomerCart isOpen={isCartModalOpen} onClose={closeCartModal} />}
      {isCommentModalOpen && <CommentOrdersModal orders={orders} onClose={closeCommentModal} />} {/* แสดง modal สำหรับ comment */}
    </div>
  )
}
