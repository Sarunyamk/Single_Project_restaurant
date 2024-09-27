import React from 'react'
import { useState } from 'react';



import img from '../img/imgMenu/burger2.png'

const Paginate = () => {


    const menuItems = [
        { id: 1, name: "Pizza", description: "Delicious pizza", price: 10, image: img },
        { id: 2, name: "Burger", description: "Tasty burger", price: 8, image: img },
        { id: 3, name: "Pasta", description: "Italian pasta", price: 12, image: img },
        { id: 4, name: "Sushi", description: "Fresh sushi", price: 15, image: img },
        { id: 5, name: "Salad", description: "Healthy salad", price: 7, image: img },
        { id: 6, name: "Steak", description: "Grilled steak", price: 18, image: img },
        { id: 7, name: "Ice Cream", description: "Sweet ice cream", price: 5, image: img },
        { id: 8, name: "Tacos", description: "Mexican tacos", price: 9, image: img },
        { id: 9, name: "Tacos", description: "Mexican tacos", price: 9, image: img },
        { id: 10, name: "Tacos", description: "Mexican tacos", price: 9, image: img },
        { id: 11, name: "Tacos", description: "Mexican tacos", price: 9, image: img },
        { id: 12, name: "Tacos", description: "Mexican tacos", price: 9, image: img },
        { id: 13, name: "Tacos", description: "Mexican tacos", price: 9, image: img },
        { id: 14, name: "Tacos", description: "Mexican tacos", price: 9, image: img },
        { id: 15, name: "Tacos", description: "Mexican tacos", price: 9, image: img },
      ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    // คำนวณรายการอาหารในหน้านั้น ๆ
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menuItems.slice(indexOfFirstItem, indexOfLastItem);
  
    // ฟังก์ชันสำหรับเปลี่ยนหน้า
    const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    // ฟังก์ชันแสดงหมายเลขเพจ
    const renderPageNumbers = () => {
      const totalPages = Math.ceil(menuItems.length / itemsPerPage);
      let pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`mx-2 px-3 py-1 rounded-lg ${
              currentPage === i
                ? "bg-yellow text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleClick(i)}
          >
            {i}
          </button>
        );
      }
      return pageNumbers;
    };

    

  return (
    <div>
      
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-5 gap-6 mb-6">
                {currentItems.map((item) => (
                <div key={item.id} className="p-6 bg-white rounded-lg shadow-lg">
                    <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="mt-2 text-red-500 font-semibold">${item.price}</p>
                    <div className='bg-red-gradient text-white text-center rounded-lg mx-auto p-2 mt-2 shadow-lg hover:scale-105 transition duration-300'>
                        <a href="#">Order Now</a>
                    </div>
                </div>
                ))}
            </div>
            <div className="flex justify-center mb-4">
              {renderPageNumbers()}
            </div>
            
        </div>

          
    </div>
  )
}

export default Paginate
