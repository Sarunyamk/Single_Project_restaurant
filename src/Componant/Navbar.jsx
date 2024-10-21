// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// import { IoMdArrowDropdown } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import myLogo from '../img/imgBg/myLogo.png'

// import useAppStore from '../zustand/appStore'
// import OrderCustomerCart from '../Componant/OrderCustomerCart'
// import { getOrdersByUserId } from '../api/comment-api';
// import CommentOrdersModal from './CommentOrderModal';


// export default function NavBar() {

//   const user = useAppStore((state) => state.user)
//   const token = useAppStore((state) => state.token);

//   const actionLogout = useAppStore((state) => state.actionLogout)

//   const [isDropdownUserOpen, setDropdownUserOpen] = useState(false)
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // สถานะเมนู
//   const [isCartModalOpen, setCartModalOpen] = useState(false)
//   const [isCommentModalOpen, setCommentModalOpen] = useState(false); // เพิ่ม state สำหรับเปิดปิด Comment modal
//   const [orders, setOrders] = useState([]); // state เก็บรายการคำสั่งซื้อ


//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // สลับสถานะเมนูเปิด/ปิด
//   };

//   const toggleDropdownUser = () => {
//     setDropdownUserOpen(!isDropdownUserOpen)
//   }

//   const hdlClickLogout = () => {
//     actionLogout()
//   }
//   const openCartModal = () => {
//     setCartModalOpen(true)
//   }

//   const closeCartModal = () => {
//     setCartModalOpen(false)
//   }

//   const openCommentModal = async () => {
//     if (!user || !user.user || !user.user.id) {
//       console.error('User ID is missing');
//       return;
//     }

//     try {
//       const response = await getOrdersByUserId(token, user.user.id); // ดึงข้อมูล order
//       setOrders(response.data); // เก็บ order ใน state
//       setCommentModalOpen(true); // เปิด modal สำหรับ comment
//     } catch (error) {
//       console.error('Failed to fetch orders:', error);
//     }
//   };


//   const closeCommentModal = () => {
//     setCommentModalOpen(false);
//   };

//   useEffect(() => {
//     if (user) {
//       // fetchCartCount();
//     }
//   }, [user, isCartModalOpen]);

//   useEffect(() => {
//     if (user) {
//       setDropdownUserOpen(false);
//       // fetchCartCount();
//     }
//   }, [user, isCartModalOpen]);
//   return (
//     // <div >
//     //   <nav className=' top-0 left-0 w-full flex justify-around h-24 items-center  bg-red-gradient fixed z-20'>
//     //     <div className='w-40 h-24'>
//     //       <img src={myLogo} className='w-full h-full object-contain' />
//     //     </div>
//     //     <div className='flex gap-8 text-white'>
//     //       <Link to="/" className='font-head'>Home</Link>
//     //       <Link to='/about' className='font-head'>About</Link>
//     //       <Link to='/menu' className='font-head'>Menu</Link>
//     //       <Link to='/contact' className='font-head'>Contact</Link>
//     //     </div>

//     //     <div>
//     //       {user ? (
//     //         <div className='flex gap-10 items-center '>
//     //           <div className='relative'>
//     //             <div className='flex items-end  text-yellow'>
//     //               <h3 className='font-main ' >Hello : <span onClick={toggleDropdownUser} className='uppercase tracking-wider cursor-pointer'>{user.user.firstname}</span></h3>
//     //               <IoMdArrowDropdown className=' cursor-pointer' onClick={toggleDropdownUser} />
//     //             </div>
//     //             {isDropdownUserOpen && (
//     //               <div className='absolute  mt-2 w-32 top-6 right-0 bg-white rounded-md shadow-lg'>
//     //                 <ul className='py-2'>
//     //                   <li>
//     //                     <Link onClick={openCommentModal} className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
//     //                       Comment
//     //                     </Link>
//     //                     <Link to='/settingcustomer' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
//     //                       Setting
//     //                     </Link>
//     //                   </li>
//     //                   <li>
//     //                     <Link onClick={hdlClickLogout} to='/login' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
//     //                       Logout
//     //                     </Link>
//     //                   </li>
//     //                 </ul>
//     //               </div>
//     //             )}
//     //           </div>
//     //           <Link>
//     //             <div onClick={openCartModal} className='w-8 h-8 relative '>
//     //               <FaCartShopping className='w-8 h-8 text-white hover:text-yellow' />
//     //             </div>
//     //           </Link>
//     //         </div>
//     //       ) : (
//     //         <div className='flex gap-10'>
//     //           <Link to='/signup' className='font-head underline text-yellow'>Sign up</Link>
//     //           <Link to='/login' className='font-head underline text-yellow' >Login</Link>
//     //         </div>
//     //       )}
//     //     </div>
//     //   </nav>

//     //   {isCartModalOpen && <OrderCustomerCart isOpen={isCartModalOpen} onClose={closeCartModal} />}
//     //   {isCommentModalOpen && <CommentOrdersModal orders={orders} onClose={closeCommentModal} />} {/* แสดง modal สำหรับ comment */}
//     // </div>

//     <div>
//       {/* Navbar */}
//       <nav className="top-0 left-0 w-full flex justify-between px-4 md:px-8 h-24 items-center bg-red-gradient fixed z-20">
//         {/* Logo */}
//         <div className="w-32 h-20 md:w-40 md:h-24">
//           <img src={myLogo} className="w-full h-full object-contain" alt="Logo" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 text-white">
//           <Link to="/" className="font-head">Home</Link>
//           <Link to="/about" className="font-head">About</Link>
//           <Link to="/menu" className="font-head">Menu</Link>
//           <Link to="/contact" className="font-head">Contact</Link>
//         </div>

//         {/* Mobile Hamburger Button */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-white">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>

//         {/* User Menu */}
//         <div>
//           {user ? (
//             <div className="flex gap-10 items-center">
//               <div className="relative">
//                 <div className="flex items-end text-yellow">
//                   <h3 className="font-main">
//                     Hello: <span onClick={toggleDropdownUser} className="uppercase tracking-wider cursor-pointer">
//                       {user.user.firstname}
//                     </span>
//                   </h3>
//                   <IoMdArrowDropdown className="cursor-pointer" onClick={toggleDropdownUser} />
//                 </div>
//                 {isDropdownUserOpen && (
//                   <div className="absolute mt-2 w-32 top-6 right-0 bg-white rounded-md shadow-lg">
//                     <ul className="py-2">
//                       <li>
//                         <Link onClick={openCommentModal} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                           Comment
//                         </Link>
//                         <Link to="/settingcustomer" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                           Setting
//                         </Link>
//                       </li>
//                       <li>
//                         <Link onClick={hdlClickLogout} to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                           Logout
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//               <Link>
//                 <div onClick={openCartModal} className="w-8 h-8 relative">
//                   <FaCartShopping className="w-8 h-8 text-white hover:text-yellow" />
//                 </div>
//               </Link>
//             </div>
//           ) : (
//             <div className="flex gap-4 md:gap-10">
//               <Link to="/signup" className="font-head underline text-yellow">Sign up</Link>
//               <Link to="/login" className="font-head underline text-yellow">Login</Link>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-24 left-0 w-full bg-red-gradient flex flex-col items-center gap-4 text-white py-4">
//           <Link to="/" className="font-head">Home</Link>
//           <Link to="/about" className="font-head">About</Link>
//           <Link to="/menu" className="font-head">Menu</Link>
//           <Link to="/contact" className="font-head">Contact</Link>
//         </div>
//       )}

//       {isCartModalOpen && <OrderCustomerCart isOpen={isCartModalOpen} onClose={closeCartModal} />}
//       {isCommentModalOpen && <CommentOrdersModal orders={orders} onClose={closeCommentModal} />}
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import myLogo from '../img/imgBg/myLogo.png';

import useAppStore from '../zustand/appStore';
import OrderCustomerCart from '../Componant/OrderCustomerCart';
import { getOrdersByUserId } from '../api/comment-api';
import CommentOrdersModal from './CommentOrderModal';

export default function NavBar() {
  const user = useAppStore((state) => state.user);
  const token = useAppStore((state) => state.token);

  const actionLogout = useAppStore((state) => state.actionLogout);

  const [isDropdownUserOpen, setDropdownUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // สถานะเมนู
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isCommentModalOpen, setCommentModalOpen] = useState(false); // เพิ่ม state สำหรับเปิดปิด Comment modal
  const [orders, setOrders] = useState([]); // state เก็บรายการคำสั่งซื้อ

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // สลับสถานะเมนูเปิด/ปิด
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

  useEffect(() => {
    if (user) {
      setDropdownUserOpen(false);
    }
  }, [user, isCartModalOpen]);


  return (
    <div>
      {/* Navbar */}
      <nav className="top-0 left-0 w-full flex justify-between px-4 md:px-8 h-24 items-center bg-red-gradient fixed z-20">
        {/* Logo */}
        <div className="w-32 h-20 md:w-40 md:h-24">
          <img src={myLogo} className="w-full h-full object-contain" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white">
          <Link to="/" className="font-head">Home</Link>
          <Link to="/about" className="font-head">About</Link>
          <Link to="/menu" className="font-head">Menu</Link>
          <Link to="/contact" className="font-head">Contact</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* User Menu */}
        <div>
          {user ? (
            <div className="flex gap-10 items-center">
              <div className="relative">
                <div className="flex items-end text-yellow">
                  <h3 className="font-main">
                    Hello: <span onClick={toggleDropdownUser} className="uppercase tracking-wider cursor-pointer">
                      {user.user.firstname}
                    </span>
                  </h3>
                  <IoMdArrowDropdown className="cursor-pointer" onClick={toggleDropdownUser} />
                </div>
                {isDropdownUserOpen && (
                  <div className="absolute mt-2 w-32 top-6 right-0 bg-white rounded-md shadow-lg">
                    <ul className="py-2">
                      <li>
                        <Link onClick={openCommentModal} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Comment
                        </Link>
                        <Link to="/settingcustomer" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Setting
                        </Link>
                      </li>
                      <li>
                        <Link onClick={hdlClickLogout} to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Link>
                <div onClick={openCartModal} className="w-8 h-8 relative">
                  <FaCartShopping className="w-8 h-8 text-white hover:text-yellow" />
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex gap-4 md:gap-10">
              <Link to="/signup" className="font-head underline text-yellow">Sign up</Link>
              <Link to="/login" className="font-head underline text-yellow">Login</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
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
    </div>
  );
}
