import React from 'react';
import imgburger from '../img/imgMenu/burger2.png'
import imgPizza from '../img/imgMenu/pizza3.png'
import imgSteak from '../img/imgMenu/steak1.png'
import imgSnack from '../img/imgMenu/frenchFries1.png'
import imgBev from '../img/imgMenu/bev1.png'

const CardSelectCategory = () => {
  return (

    <div className="relative grid grid-cols-7 my-40">

      <div></div>
      <a href="" className=" block rounded-lg p-4 bg-white shadow-lg transition-transform hover:scale-105">        
      
        <div className="w-60 h-72 border-2 border-black rounded-lg flex flex-col items-center">          
          
          <div className="  relative group">
            <img
              src={imgburger}
              
              width="450"
              height="450"
              loading="lazy"
              className="object-cover"
            />
            
            <div className="absolute bottom-0 left-0 w-full h-20 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
              <h1 className="font-main">Burgers</h1>              
            </div>
          </div>

          
        </div>
      </a>
      <a href="" className="product-card block p-4 rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      
        <div className="w-60 h-72 border-2 border-black rounded-lg flex flex-col items-center">          
          
          <div className="  relative group">
            <img
              src={imgPizza}
              
              width="450"
              height="450"
              loading="lazy"
              className="object-cover"
            />
            
            <div className="absolute bottom-0 left-0 w-full h-20 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
              <h1 className="font-main">Pizzas</h1>              
            </div>
          </div>

          
        </div>
      </a>
      <a href="" className="product-card block p-4 rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      
        <div className="w-60 h-72 border-2 border-black rounded-lg flex flex-col items-center">          
          
          <div className="  relative group">
            <img
              src={imgSteak}
              
              width="450"
              height="450"
              loading="lazy"
              className="object-cover"
            />
            
            <div className="absolute bottom-0 left-0 w-full h-20 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
              <h1 className="font-main">Steaks</h1>              
            </div>
          </div>

          
        </div>
      </a>
      <a href="" className="product-card block p-4 rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      
        <div className="w-60 h-72 border-2 border-black rounded-lg flex flex-col items-center">          
          
          <div className="  relative group">
            <img
              src={imgSnack}
              
              width="450"
              height="450"
              loading="lazy"
              className="object-cover"
            />
            
            <div className="absolute bottom-0 left-0 w-full h-20 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
              <h1 className="font-main">Snacks</h1>              
            </div>
          </div>

          
        </div>
      </a>
      <a href="" className="product-card block p-4 rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      
        <div className="w-60 h-72 border-2 border-black rounded-lg flex flex-col items-center">          
          
          <div className="  relative group">
            <img
              src={imgBev}
              
              width="450"
              height="450"
              loading="lazy"
              className="object-cover"
            />
            
            <div className="absolute bottom-0 left-0 w-full h-20 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
              <h1 className="font-main">Drinks</h1>              
            </div>
          </div>

          
        </div>
      </a>

    </div>
  );
};

export default CardSelectCategory;
