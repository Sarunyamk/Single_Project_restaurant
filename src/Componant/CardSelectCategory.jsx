// import React,{useEffect, useState} from 'react';
// import { showAllMenu,showMainMenu} from '../api/menu-api';

// import imgburger from '../img/imgMenu/burger2.png'
// import imgPizza from '../img/imgMenu/pizza3.png'
// import imgSteak from '../img/imgMenu/steak1.png'
// import imgSnack from '../img/imgMenu/frenchFries1.png'
// import imgBev from '../img/imgMenu/bev1.png'

// const CardSelectCategory = () => {

//   const [menu,setMenu] = useState([])

//   useEffect(()=>{

//     fetchAllMenu()
//   },[])

//   const fetchAllMenu = async () => {
//     try {
//         const resp = await showAllMenu();
//         setMenu(resp.data);
//         console.log(resp)
//     } catch (err) {
//         console.error("Error fetching profile:", err); 
//     }
// }
//   const fetchMainMenu = async () => {
//     try {
//         const resp = await showMainMenu();
//         setMenu(resp.data);
//         console.log(resp)
//     } catch (err) {
//         console.error("Error fetching profile:", err); 
//     }
// }


//   return (

//     <div className="relative grid grid-cols-7 my-40">

//       <div></div>
//       <a  className=" block rounded-lg p-4 bg-white shadow-lg transition-transform hover:scale-105">        
      
//         <div className="w-60 h-72 border-2 border-black rounded-lg flex flex-col items-center">          
          
//           <div className="  relative group">
//             <img
//               src={imgburger}
              
//               width="450"
//               height="450"
//               loading="lazy"
//               className="object-cover"
//             />
            
//             <div className="absolute bottom-0 left-0 w-full h-20 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
//               <h1 className="font-main" onClick={fetchAllMenu}>All Menu</h1>              
//             </div>
//           </div>

          
//         </div>
//       </a>
//       <a  className="product-card block p-4 rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      
//         <div className="w-60 h-72 border-2 border-black rounded-lg flex flex-col items-center">          
          
//           <div className="  relative group">
//             <img
//               src={imgPizza}
              
//               width="450"
//               height="450"
//               loading="lazy"
//               className="object-cover"
//             />
            
//             <div className="absolute bottom-0 left-0 w-full h-20 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
//               <h1 className="font-main" onClick={fetchMainMenu}>Main Menu</h1>              
//             </div>
//           </div>

          
//         </div>
//       </a>
//       <a  className="product-card block p-4 rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      
//         <div className="w-60 h-72 border-2 border-black rounded-lg flex flex-col items-center">          
          
//           <div className="  relative group">
//             <img
//               src={imgSteak}
              
//               width="450"
//               height="450"
//               loading="lazy"
//               className="object-cover"
//             />
            
//             <div className="absolute bottom-0 left-0 w-full h-20 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
//               <h1 className="font-main">Salads</h1>              
//             </div>
//           </div>

          
//         </div>
//       </a>
//       <a  className="product-card block p-4 rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      
//         <div className="w-60 h-72 border-2 border-black rounded-lg flex flex-col items-center">          
          
//           <div className="  relative group">
//             <img
//               src={imgSnack}
              
//               width="450"
//               height="450"
//               loading="lazy"
//               className="object-cover"
//             />
            
//             <div className="absolute bottom-0 left-0 w-full h-20 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
//               <h1 className="font-main">SW & Snacks</h1>              
//             </div>
//           </div>

          
//         </div>
//       </a>
//       <a  className="product-card block p-4 rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      
//         <div className="w-60 h-72 border-2 border-black rounded-lg flex flex-col items-center">          
          
//           <div className="  relative group">
//             <img
//               src={imgBev}
              
//               width="450"
//               height="450"
//               loading="lazy"
//               className="object-cover"
//             />
            
//             <div className="absolute bottom-0 left-0 w-full h-20 bg-red-gradient text-white text-center py-2 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out flex justify-center items-center">
//               <h1 className="font-main">Drinks</h1>              
//             </div>
//           </div>

          
//         </div>
//       </a>

//     </div>
//   );
// };

// export default CardSelectCategory;
