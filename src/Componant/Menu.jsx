import React, { useEffect, useState } from 'react';
import useMenuStore from '../zustand/menuStore';

import ModalMenuDetail from '../Componant/ModalMenuDetail';
import useAppStore from '../zustand/appStore';


export default function Menu() {

  const { menu, currentPage, itemsPerPage, setCurrentPage, fetchAllMenu } = useMenuStore();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menu.slice(indexOfFirstItem, indexOfLastItem);

  const [isActive, setIsActive] = useState(false);

  const token = useAppStore((state) => state.token)
  const isOpenModal = useAppStore((state) => state.isOpenModal)
  const hdlOpenModal = useAppStore((state) => state.hdlOpenModal)



  useEffect(() => {

    const fetchMenu = async () => {
      await fetchAllMenu();
    };
    fetchMenu();
  }, [fetchAllMenu]);

  const clickChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {

    const totalPages = Math.ceil(menu.length / itemsPerPage);
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) { // ลูปสร้างปุ่มหน้าเพจ
      pageNumbers.push(
        <button
          key={i}
          className={`mx-2 px-3 py-1 rounded-lg ${currentPage === i ? 'bg-yellow text-white' : 'bg-gray-200 text-gray-700'
            }`}
          onClick={() => clickChangePage(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers; // คืนค่าปุ่มหน้าเพจทั้งหมด
  };
  const animation = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 1000);

  };


  return (
    <div className="flex flex-col items-center mx-20 mb-40">
      <div className="flex justify-center mb-4">{renderPageNumbers()}</div>
      <div className="grid grid-cols-4 gap-6 mb-6 w-11/12">
        {currentItems?.map((item) => (
          <div key={item.id} className="p-6 bg-white rounded-lg shadow-lg">
            <div className='h-1/2'>
              <img
                src={item?.image}
                alt={item.name}
                className="w-full h-full object-cover mb-4 rounded-lg"
              />
            </div>
            <div className='h-1/2 mt-4 flex justify-around flex-col'>
              <div>
                <h3 className="text-lg font-bold  ">{item.menuName}</h3>
                <p className="text-gray-600 text-xs my-3">{item.description}</p>
                <p className="mt-2 text-red-500 font-semibold">{item.price} THB</p>
              </div>
              <div className='flex justify-center'>
                <button className={`button ${isActive ? 'active' : ''} `} onClick={() => { hdlOpenModal(item); animation() }}>
                  <span className='m-2'>Order Now</span>
                  <div className='cart '>
                    <svg className='svg' viewBox='0 0 36 26'>
                      <polyline points='1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5'></polyline>
                      <polyline points='15 13.5 17 15.5 22 10.5'></polyline>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
        {isOpenModal && <ModalMenuDetail />}
      </div>
    </div>
  );
};

