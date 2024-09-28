import React from 'react'
import { useState ,useEffect} from 'react';
import { showAllMenu} from '../api/menu-api';





const Paginate = () => {

  const [menu,setMenu] = useState([])

  useEffect(()=>{

    fetchAllMenu()
  },[])

  const fetchAllMenu = async () => {
    try {
        const resp = await showAllMenu();
        setMenu(resp.data);
        console.log(resp)
    } catch (err) {
        console.error("Error fetching profile:", err); 
    }
}


    

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
  
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menu.slice(indexOfFirstItem, indexOfLastItem);
  
   
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

    

  return (
    <div>
      
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
                    <p className="text-gray-600 text-xs">{`${item.description}${item.description}`}</p>
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
