import React, { useEffect, useState } from 'react';
import useMenuStore from '../stores/menuStore';

import ModalMenuDetail from './ModalMenuDetail';
import useAppStore from '../stores/appStore';
import { FaPizzaSlice } from "react-icons/fa";
import { LuPizza } from "react-icons/lu";

import { useTranslation } from 'react-i18next';


export default function Menu() {

  const { t } = useTranslation();


  const { menu, currentPage, itemsPerPage, setCurrentPage, fetchAllMenu } = useMenuStore();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menu.slice(indexOfFirstItem, indexOfLastItem);

  const [isActive, setIsActive] = useState(false);

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
                <p className="mt-2 text-red-500 font-semibold">{item.price} {t('menu.bath')}</p>
              </div>
              <div className='flex justify-center'>
                <button className={`button1 ${isActive ? 'active1' : ''} `} onClick={() => { hdlOpenModal(item); animation() }}>
                  <span className='p-2 text-slate-50'>{t('menu.orderNow')}</span>
                  <div className='cart1 flex'>
                    <FaPizzaSlice className='svg1' />
                    <LuPizza className='svg2' />
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

