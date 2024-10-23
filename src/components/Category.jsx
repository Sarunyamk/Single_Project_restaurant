import React from 'react'
import useMenuStore from '../stores/menuStore';

import imgburger from '../img/imgMenu/burger2.png';
import imgPizza from '../img/imgMenu/pizza3.png';
import imgSalad from '../img/imgMenu/salad1.png';
import imgSnack from '../img/imgMenu/frenchFries1.png';
import imgBev from '../img/imgMenu/bev1.png';

export default function Category() {

  const { fetchAllMenu, fetchMainMenu, fetchSaladMenu, fetchSwSnackMenu, fetchBeverageMenu } = useMenuStore();

  const categoryMenu = [
    { id: 1, name: "All Menu", img: imgburger, api: fetchAllMenu },
    { id: 2, name: "Main Menu", img: imgPizza, api: fetchMainMenu },
    { id: 3, name: "Salad", img: imgSalad, api: fetchSaladMenu },
    { id: 4, name: "SW & Snack", img: imgSnack, api: fetchSwSnackMenu },
    { id: 5, name: "Beverages", img: imgBev, api: fetchBeverageMenu },
  ];

  return (
    <div className="relative grid grid-cols-7 my-20">
      <div></div>
      {categoryMenu.map((item) => (
        <div
          key={item.id}
          className="rounded-lg bg-white shadow-lg transition-transform hover:scale-105 flex items-center justify-center w-40 h-40 cursor-pointer"
          onClick={item.api}
        >
          <div className="border-2 border-black rounded-lg flex flex-col items-center">
            <div className="relative group">
              <img src={item.img} width="450" height="450" loading="lazy" className="object-cover" />
              <div className="absolute top-14 left-0 w-full h-14 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
                <h1 className="font-head">{item.name}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


