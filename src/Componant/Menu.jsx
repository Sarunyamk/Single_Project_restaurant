import React, { useEffect, useState } from 'react';
import useMenuStore from '../zustand/menuStore';

import ModalMenuDetail from '../Componant/ModalMenuDetail';


export default function Menu() {

  const { menu, currentPage, itemsPerPage, setCurrentPage, fetchAllMenu } = useMenuStore();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menu.slice(indexOfFirstItem, indexOfLastItem);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null);



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
    for (let i = 1; i <= totalPages; i++) {
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
    return pageNumbers;
  };

  const hdlOpenModal = (item) => {
    setSelectedItem(item)
    setIsOpenModal(true)
  }

  const hdlCloseModal = () => {
    setIsOpenModal(false)
    setSelectedItem(null)
  }


  return (
    <div className="flex flex-col items-center mx-20 mb-40">
      <div className="flex justify-center mb-4">{renderPageNumbers()}</div>
      <div className="grid grid-cols-4 gap-6 mb-6 w-11/12">
        {currentItems.map((item) => (
          <div key={item.id} className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-bold">{item.menuName}</h3>
            <p className="text-gray-600 text-xs">{item.description}</p>
            <p className="mt-2 text-red-500 font-semibold">{item.price} THB</p>
            <div className="bg-red-gradient text-white text-center rounded-lg mx-auto p-2 mt-2 shadow-lg hover:scale-105 transition duration-300 w-1/2">
              <button onClick={() => hdlOpenModal(item)}>Order Now</button>
            </div>
          </div>
        ))}
        {isOpenModal && <ModalMenuDetail hdlCloseModal={hdlCloseModal} selectedItem={selectedItem} />}
      </div>
    </div>
  );
};


