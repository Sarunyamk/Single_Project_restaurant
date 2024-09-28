import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import cartIcon from '../img/imgIcon/cartNavbarIcon.png'
import dropDownIcon from '../img/imgIcon/dropdownIcon.png'
import myLogo from '../img/imgBg/myLogo.png'
import useAppStore from '../zustand/appStore'


export default function NavBar() {
  
  const user = useAppStore((state)=> state.user)

 
  const actionLogout = useAppStore((state)=> state.actionLogout)
 
  const [isDropdownUserOpen,setDropdownUserOpen] = useState(false) 

  const toggleDropdownUser = () => {
    setDropdownUserOpen(!isDropdownUserOpen)
  }

  const hdlClickLogout = () => {
    actionLogout()
  }

  return (
    <div >
        <nav className=' top-0 left-0 w-full flex justify-around h-24 items-center  bg-red-gradient fixed z-10'>
          <div className='w-40 h-24'>
              
              <img src={myLogo} className='w-full h-full object-contain' />
              
          </div>
        <div className='flex gap-8 text-white'>
            
            <Link to="/" className='font-head'>Home</Link>
            <Link to='/about' className='font-head'>About</Link>
            <Link to='/menu' className='font-head'>Menu</Link>
            <Link to='/contact' className='font-head'>Contact</Link>

        </div>

        <div>
        
        { user ? 
            <div className='flex gap-10 items-center '>
                
                <div className='relative'>

                  <div className='flex items-end'>
                    <h3  className='font-main text-yellow '>{user.user.firstname}</h3>
                    <img onClick={toggleDropdownUser} className='w-8 h-8 cursor-pointer' src={dropDownIcon}/>
                  </div>
                  {
                    isDropdownUserOpen && (
                      <div className='absolute  mt-2 w-32 top-6 right-0 bg-white rounded-md shadow-lg'>
                        <ul className='py-2'>
                          <li>
                            <Link to='/settingcustomer' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                                Setting
                            </Link>
                          </li>
                          <li>
                            <Link onClick={hdlClickLogout} to='/login' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                                Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )
                  }
                </div>
              <Link to='/cart'>
                <div className='w-8 h-8 relative '>
                  <img src={cartIcon} alt="cart icon" className='w-full h-full'/>
                  <div className='absolute -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center bg-yellow'>
                      <h1 className='text-white text-xs'>1</h1>
                  </div>
                </div> 
              </Link>

              
              

            </div> 
            : <div className='flex gap-10'>
            <Link to='/signup' className='font-head underline text-yellow'>Sign up</Link>
            <Link to='/login' className='font-head underline text-yellow' >Login</Link>
            </div>}
            
        </div>
        
    </nav>
    </div>
  )
}
