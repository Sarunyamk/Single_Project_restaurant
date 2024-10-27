import React, { useState } from 'react'

import Swal from 'sweetalert2';
import useAppStore from '../stores/appStore'
import { toast } from 'react-toastify';
import useCartStore from '../stores/cartStore';

import { createCart } from '../api/cart-api';
import ReviewCarosel from './ReviewCarosel'

import { useTranslation } from 'react-i18next';


export default function ModalDetail() {

  const { t } = useTranslation();


  const [count, setCount] = useState(1)
  const [isReviewOpen, setIsReviewOpen] = useState(false)


  const token = useAppStore((state) => state.token)
  const user = useAppStore((state) => state.user)
  const addToCart = useCartStore((state) => state.addToCart)

  const hdlCloseModal = useAppStore((state) => state.hdlCloseModal)
  const selectedItem = useAppStore((state) => state.selectedItem)

  const [isActive, setIsActive] = useState(false);

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
  console.log(user, "this is user")
  const hdlCheckLogin = async () => {

    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentHour = currentDate.getHours();
    console.log(currentDay, currentHour, "this is currentDay and currentHour")

    const isWeekday = currentDay >= 1 && currentDay <= 5 && currentHour >= 10 && currentHour <= 21; // Monday-Friday 10:00-22:00
    const isWeekend = (currentDay === 0 || currentDay === 6) && currentHour >= 12 && currentHour <= 21; // Saturday-Sunday 12:00-22:00
    console.log(isWeekday, isWeekend, "this is isWeekday and isWeekend")

    if (!isWeekday && !isWeekend) {
      Swal.fire({
        icon: 'info',
        title: t('modalDetail.storeClosed'),
        text: t('modalDetail.nextBusinessDay'),
        confirmButtonText: t('modalDetail.ok'),
        confirmButtonColor: '#3085d6',
        background: '#fefefe'
      });
      return;
    }

    const role = user && user.user.role;
    if (role === 'ADMIN') {
      Swal.fire({
        icon: 'warning',
        title: t('modalDetail.actionNotAllowed'),
        text: t('modalDetail.adminRestriction'),
        confirmButtonText: t('modalDetail.ok'),
        confirmButtonColor: '#3085d6',
        background: '#fefefe'
      });
      return;
    }

    if (!token) {
      Swal.fire({
        title: t('modalDetail.loginPromptTitle'),
        text: t('modalDetail.loginPromptText'),
        icon: 'warning',
        confirmButtonText: t('modalDetail.ok')
      });

      hdlCloseModal();
    }
    else {

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

          toast.success(t('modalDetail.itemAddedToCart'));
          setTimeout(() => {
            hdlCloseModal();
          }, 1500);
        } else {
          toast.error(t('modalDetail.addItemToCartFailed'));
        }
      } catch (err) {
        console.error('Error adding item to cart:', err);
        toast.error(t('modalDetail.errorOccurred'));
      }
    }
  }
  const animation = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 1000);

  };

  return (
    <div>
      <section className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="relative w-1/2 h-[400px] mx-auto rounded-xl bg-slate-100 flex items-center justify-center z-50">
          <div className="w-1/2 flex justify-center items-center">
            <img className="object-cover w-60 h-60" src={selectedItem.image} alt="" />
          </div>

          <div className="w-1/2 text-slate-800 flex flex-col gap-4" key={selectedItem.id}>
            <h1 className="font-main">{selectedItem.menuName}</h1>
            <h2 className="font-head">{t('modalDetail.price')}: {selectedItem.price} {t('menu.bath')}</h2>
            <p className="font-second min-w-full pr-4">{selectedItem.description}</p>
            <div className="flex mx-auto justify-center items-baseline">
              <button onClick={hdlcountDecrement} className="w-8 h-8 font-head hover:text-yellow">-</button>
              <h1 id="quantity" className="font-main w-10 h-10 text-center">{count}</h1>
              <button onClick={hdlcountIncrement} className="w-8 h-8 font-head hover:text-yellow">+</button>
            </div>

            <button className={`button ${isActive ? 'active' : ''} `} onClick={() => { hdlCheckLogin(); animation(); }}>
              <span className='m-2'>{t('modalDetail.addToCart')}</span>
              <div className='cart '>
                <svg className='svg' viewBox='0 0 36 26'>
                  <polyline points='1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5'></polyline>
                  <polyline points='15 13.5 17 15.5 22 10.5'></polyline>
                </svg>
              </div>
            </button>

            <p className="font-head">{t('modalDetail.total')}: {count * selectedItem.price} {t('menu.bath')}</p>
            <button onClick={() => hdlCloseModal()} className="absolute top-0 right-0 font-head w-8 h-8 text-center">
              X
            </button>
            <button onClick={hdlClickOpenReview} className="absolute top-5 right-10 font-head text-center underline text-yellow hover:scale-110 duration-300">
              {t('modalDetail.review')}
            </button>
          </div>
          {isReviewOpen && <ReviewCarosel hdlClickOpenReview={hdlClickOpenReview} menuItemId={selectedItem.id} />}
        </div>
      </section>

    </div>
  );
}

