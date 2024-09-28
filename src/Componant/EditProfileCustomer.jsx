import React,{useEffect,useState} from 'react'
import useAppStore from '../zustand/appStore'
import { getProfile,editProfile } from '../api/user-api';


export default function EditProfileCustomer() {

  const [user,setUser] = useState({})

  const token = useAppStore((state)=> state.token)

  useEffect(()=>{

    fetchProfile()
  },[])

  const fetchProfile = async () => {
    try {
        console.log("Token:", token); 
        const resp = await getProfile(token);
        console.log(resp.data);
        setUser(resp.data);
    } catch (err) {
        console.error("Error fetching profile:", err); 
    }
}

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    try {
      const resp = await editProfile(user.id, token, user) 
      fetchProfile() 
      console.log(resp)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    // <div>
    //   <div className='bg-red-gradient max-w-md w-full mx-auto my-60 py-4 flex flex-col justify-center items-center gap-4 text-white'>
    //     <h1 className='font-main text-yellow my-4 '>Edit Profile</h1>

    //     {/* <div className='space-y-4 w-full '>
    //         <div className='flex flex-row gap-4 justify-start items-center'>
    //             <p className='w-32 text-right'>Firstname :</p>
    //             <input className='p-2 border rounded-md outline-none ' 
    //                     type="text" placeholder='firstname...' value={getProfile.firstname} />
    //         </div>
    //         <div className='flex flex-row gap-4 justify-start items-center'>
    //             <p className='w-32 text-right'>Lastname :</p>
    //             <input className='p-2 border rounded-md outline-none ' type="text" placeholder='Lastname...' />
    //         </div>
    //         <div className='flex flex-row gap-4 justify-start items-center'>
    //             <p className='w-32 text-right'>Phonenumber :</p>
    //             <input className='p-2 border rounded-md outline-none ' type="text" placeholder='phone number...' />
    //         </div>
    //         <div className='flex flex-row gap-4 justify-start items-center'>
    //             <p className='w-32 text-right'>Address :</p>
    //             <input className='p-2 border rounded-md outline-none' type="text" placeholder=' address...' />
    //         </div>
    //         <div className='flex flex-row gap-4 justify-start items-center'>
    //             <p className='w-32 text-right'>Email :</p>
    //             <input className='p-2 border rounded-md outline-none' type="email" placeholder='email...' />
    //         </div>
    //         <div className='flex flex-row gap-4 justify-start items-center'>
    //             <p className='w-32 text-right'>Password :</p>
    //             <input className='p-2 border rounded-md outline-none ' type="password" placeholder='password...' />
    //         </div>
    //     </div> */}

    //     <div className='space-y-4 w-full '>
    //       <div className='flex flex-row gap-4 justify-start items-center'>
    //         {
    //           user.map((item,index)=>{

    //             return(

    //                 <div key={index} className='flex flex-col text-black'>
    //                   <p className='w-32 text-right'>Firstname :</p>
    //                   <input className='p-2 border rounded-md outline-none ' 
    //                           type="text"  value={item.firstname} onChange={(e)=>hdlUpdateProfile(e,item.id)} />
                            
    //                   <p className='w-32 text-right'>Lastname :</p>
    //                   <input className='p-2 border rounded-md outline-none ' 
    //                           type="text"  value={item.lastname} />
                     
    //                   <p className='w-32 text-right'>Phonenumber :</p>
    //                   <input className='p-2 border rounded-md outline-none ' 
    //                           type="text"  value={item.phonenumber} />
    //                   <p className='w-32 text-right'>Address :</p>
    //                   <input className='p-2 border rounded-md outline-none ' 
    //                           type="text"  value={item.address} />
    //                   <p className='w-32 text-right'>Email :</p>
    //                   <input className='p-2 border rounded-md outline-none ' 
    //                           type="text"  value={item.email} />
    //                   <p className='w-32 text-right'>Password :</p>
    //                   <input className='p-2 border rounded-md outline-none ' 
    //                           type="text"  value={item.password} />
    //                 </div>
    //             )
    //           })
    //         }
            
    //         </div>
    //     </div>
        
        
    //     <button className='bg-yellow text-white py-4 px-6 font-head  rounded-xl'>Confirm</button>
    //   </div>
    // </div>
    <div>
    <div className='bg-red-gradient max-w-md w-full mx-auto my-60 py-4 flex flex-col justify-center items-center gap-4 text-white'>
      <h1 className='font-main text-yellow my-4'>Edit Profile</h1>

      <form onSubmit={handleUpdateProfile} className='space-y-4 w-full'>
        <div className='flex flex-row gap-4 justify-start items-center'>
          <p className='w-32 text-right'>Firstname :</p>
          <input
            className='p-2 border rounded-md outline-none'
            type='text'
            name='firstname'
            value={user.firstname || ''}
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            placeholder='Firstname...'
          />
        </div>

        <div className='flex flex-row gap-4 justify-start items-center'>
          <p className='w-32 text-right'>Lastname :</p>
          <input
            className='p-2 border rounded-md outline-none'
            type='text'
            name='lastname'
            value={user.lastname || ''}
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            placeholder='Lastname...'
          />
        </div>

        <div className='flex flex-row gap-4 justify-start items-center'>
          <p className='w-32 text-right'>Phonenumber :</p>
          <input
            className='p-2 border rounded-md outline-none'
            type='text'
            name='phonenumber'
            value={user.phonenumber || ''}
            onChange={(e) => setUser({ ...user, phonenumber: e.target.value })}
            placeholder='Phone number...'
          />
        </div>

        <div className='flex flex-row gap-4 justify-start items-center'>
          <p className='w-32 text-right'>Address :</p>
          <input
            className='p-2 border rounded-md outline-none'
            type='text'
            name='address'
            value={user.address || ''}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            placeholder='Address...'
          />
        </div>

        <div className='flex flex-row gap-4 justify-start items-center'>
          <p className='w-32 text-right'>Email :</p>
          <input
            className='p-2 border rounded-md outline-none'
            type='email'
            name='email'
            value={user.email || ''}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder='Email...'
          />
        </div>

        <button type='submit' className='bg-yellow text-white py-4 px-6 font-head rounded-xl'>
          Confirm
        </button>
      </form>
    </div>
  </div>
  )
}

