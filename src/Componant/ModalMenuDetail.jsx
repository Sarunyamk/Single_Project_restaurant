import React, { useState } from 'react'

import Swal from 'sweetalert2';
import useAppStore from '../zustand/appStore'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useCartStore from '../zustand/cartStore';

import { createCart } from '../api/cart-api';
import ReviewCarosel from '../Componant/ReviewCarosel'

export default function ModalDetail() {

  const navigate = useNavigate()

  const [count, setCount] = useState(1)
  const [isReviewOpen, setIsReviewOpen] = useState(false)

  const token = useAppStore((state) => state.token)
  const user = useAppStore((state) => state.user)
  const addToCart = useCartStore((state) => state.addToCart)

  const hdlCloseModal = useAppStore((state) => state.hdlCloseModal)
  const selectedItem = useAppStore((state) => state.selectedItem)


  const hdlcountIncrement = () => {
    setCount(count + 1)
  }
  const hdlcountDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const hdlClickOpenReview = () => {

    setIsReviewOpen(!isReviewOpen)
  }

  const hdlCheckLogin = async () => {

    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentHour = currentDate.getHours();

    const isWeekday = currentDay >= 1 && currentDay <= 5 && currentHour >= 10 && currentHour <= 22; // Monday-Friday 10:00-22:00
    const isWeekend = (currentDay === 0 || currentDay === 6) && currentHour >= 12 && currentHour <= 22; // Saturday-Sunday 12:00-22:00

    if (!isWeekday && !isWeekend) {
      Swal.fire({
        icon: 'info',
        title: 'The store is currently closed ',
        text: 'Please place your order on the next business day.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
        background: '#fefefe'
      });
      return;
    }

    if (!token) {

      hdlCloseModal();
      navigate('/login');
    } else {

      try {
        // ส่งข้อมูลไปยัง API เพื่อสร้าง Cart
        const resp = await createCart(token, {
          customerId: user.user.id,
          items:
          {
            itemId: selectedItem.id,
            price: selectedItem.price,
            count: count,
            total: selectedItem.price * count,
          }

        });

        if (resp && resp.status === 201) {

          addToCart({
            itemId: selectedItem.id,
            menuName: selectedItem.menuName,
            price: selectedItem.price,
            count: count,
            total: selectedItem.price * count,
          });


          toast.success('Item added to cart');
          hdlCloseModal();
        } else {
          toast.error('Failed to add item to cart');
        }
      } catch (err) {
        console.error('Error adding item to cart:', err);
        toast.error('An error occurred');
      }
    }
  }


  return (
    <div>
      <section className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 ">
        <div className="relative w-1/2 h-[400px] mx-auto rounded-xl bg-slate-100 flex items-center justify-center z-50">
          <div className="w-1/2 flex justify-center items-center">
            <img className="object-cover w-60 h-60" src={selectedItem.image} alt="" />
          </div>

          <div className="w-1/2 text-slate-800 flex flex-col gap-4" key={selectedItem.id}>
            <h1 className="font-main">{selectedItem.menuName}</h1>
            <h2 className="font-head">Price : {selectedItem.price} THB</h2>
            <p className="font-second min-w-full pr-4">{selectedItem.description}</p>
            <div className="flex mx-auto justify-center items-baseline">
              <button onClick={hdlcountDecrement} className="w-8 h-8 font-head hover:text-yellow">-</button>
              <h1 id="quantity" className="font-main w-10 h-10 text-center">{count}</h1>
              <button onClick={hdlcountIncrement} className="w-8 h-8 font-head hover:text-yellow">+</button>
            </div>
            <button onClick={hdlCheckLogin} className="bg-yellow w-1/3 rounded-lg mx-auto p-2 text-white">
              Add to cart
            </button>
            <p className="font-head">Total : {count * selectedItem.price} THB</p>
            <button onClick={() => hdlCloseModal()} className="absolute top-0 right-0 font-head w-8 h-8 text-center">
              X
            </button>
            <button onClick={hdlClickOpenReview} className="absolute top-5 right-10 font-head text-center underline text-yellow hover:scale-110 duration-300">
              Review
            </button>

          </div>
          {
            isReviewOpen && < ReviewCarosel hdlClickOpenReview={hdlClickOpenReview} menuItemId={selectedItem.id} />
          }
        </div>
      </section>

    </div>
  );
}

