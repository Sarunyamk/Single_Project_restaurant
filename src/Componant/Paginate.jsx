import React from 'react'
import { useState ,useEffect} from 'react';
import { showAllMenu,showMainMenu,showSaladMenu,showSwSnackMenu,showBeverageMenu} from '../api/menu-api';

import imgburger from '../img/imgMenu/burger2.png'
import imgPizza from '../img/imgMenu/pizza3.png'
import imgSteak from '../img/imgMenu/steak1.png'
import imgSnack from '../img/imgMenu/frenchFries1.png'
import imgBev from '../img/imgMenu/bev1.png'





const Paginate = () => {

  const [menu,setMenu] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menu.slice(indexOfFirstItem, indexOfLastItem);

  
  useEffect(()=>{

    fetchAllMenu()
  },[])

  const fetchAllMenu = async () => {
    try {
        const resp = await showAllMenu();
        setMenu(resp.data);
        setCurrentPage(1)
        console.log(resp)
    } catch (err) {
        console.error("Error fetching profile:", err); 
    }
}

  const fetchMainMenu = async () => {
    try {
        const resp = await showMainMenu();
        setMenu(resp.data);
        setCurrentPage(1)
        console.log(resp)
    } catch (err) {
        console.error("Error fetching profile:", err); 
    }
}
  const fetchSaladMenu = async () => {
    try {
        const resp = await showSaladMenu();
        setMenu(resp.data);
        setCurrentPage(1)
        console.log(resp)
    } catch (err) {
        console.error("Error fetching profile:", err); 
    }
}
  const fetchSwSnackMenu = async () => {
    try {
        const resp = await showSwSnackMenu();
        setMenu(resp.data);
        setCurrentPage(1)
        console.log(resp)
    } catch (err) {
        console.error("Error fetching profile:", err); 
    }
}
  const fetchBeverageMenu = async () => {
    try {
        const resp = await showBeverageMenu();
        setMenu(resp.data);
        setCurrentPage(1)
        console.log(resp)
    } catch (err) {
        console.error("Error fetching profile:", err); 
    }
}




    

  
   
    const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
   
    const renderPageNumbers = () => {
      const totalPages = Math.ceil(menu.length / itemsPerPage);
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
    const categoryMenu = [
      {
        id:1,
        name:"All Menu",
        img:imgburger,
        choose : fetchAllMenu
      },
      {
        id:2,
        name:"Main Menu",
        img:imgPizza,
        choose : fetchMainMenu
      },
      {
        id:3,
        name:"Salad",
        img:imgSteak,
        choose : fetchSaladMenu
      },
      {
        id:4,
        name:"SW & Snack",
        img:imgSnack,
        choose : fetchSwSnackMenu
      },
      {
        id:5,
        name:"Beverages",
        img:imgBev,
        choose : fetchBeverageMenu
      },
    ]
  

    

  return (
    <div>
      <div className="relative grid grid-cols-7 my-40">

      <div></div>
      {categoryMenu.map((item) => {
          return (
            <div
              key={item.id}
              className="block rounded-lg p-4 bg-white shadow-lg transition-transform hover:scale-105"
              onClick={item.choose}
              style={{ cursor: 'pointer' }} // เพิ่มเพื่อให้รู้สึกเหมือนปุ่มคลิกได้
            >
              <div className="w-60 h-72 border-2 border-black rounded-lg flex flex-col items-center">
                <div className="relative group">
                  <img src={item.img} width="450" height="450" loading="lazy" className="object-cover" />
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
                    <h1 className="font-main">{item.name}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>  
      
        <div className="flex flex-col items-center mx-20">
            <div className="flex justify-center mb-4">
              {renderPageNumbers()}
            </div>
            <div className="grid grid-cols-4 gap-6 mb-6">
                {currentItems.map((item) => (
                <div key={item.id} className="p-6 bg-white rounded-lg shadow-lg">
                    <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-lg font-bold">{item.menuName}</h3>
                    <p className="text-gray-600 text-xs">{item.description}</p>
                    <p className="mt-2 text-red-500 font-semibold">${item.price}</p>
                    <div className='bg-red-gradient text-white text-center rounded-lg mx-auto p-2 mt-2 shadow-lg hover:scale-105 transition duration-300'>
                        <a href="#">Order Now</a>
                    </div>
                </div>
                ))}
            </div>
            
        </div>

          
    </div>
  )
}

export default Paginate
