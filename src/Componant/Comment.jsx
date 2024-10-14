import React, { useEffect, useState, useRef } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { getShowCommentUser } from '../api/comment-api'
import axios from 'axios';

const Comment = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // เริ่มต้นที่ slide 1 (โคลนแรก)
  const [clientComments, setClientComments] = useState([]);
  const totalSlides = clientComments.length; // จำนวนคอมเมนต์ทั้งหมด
  const visibleSlides = 5; // จำนวน slide ที่แสดง
  const sliderRef = useRef(null);
  const text = "Our Client Comments";

  // Fetch comments from the backend
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getShowCommentUser()
        setClientComments(response.data); // เก็บข้อมูลความคิดเห็นใน state
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  // เลื่อนอัตโนมัติทุก 3 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูกทำลาย
  }, []);

  // จัดการการเปลี่ยนภาพเมื่อสิ้นสุดการเลื่อน
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentSlide === totalSlides + 1) {
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          setCurrentSlide(1); // กลับไปที่คอมเมนต์แรก (โคลน)
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = 'transform 0.3s ease-in-out';
            }
          }, 50);
        }
      }
    };

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * (100 / visibleSlides)}%)`;
      sliderRef.current.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [currentSlide, totalSlides, visibleSlides]);

  return (
    <div className='my-32'>
      <div className="flex items-center justify-center ">
        <h1 className='font-title my-32 text-yellow wave-text'>
          {text.split("").map((letter, index) => (
            <span key={index} className="wave-letter" style={{ animationDelay: `${index * 0.1}s` }}>
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <RiDoubleQuotesL className='w-20 h-20 mx-32 text-yellow-500' />
      <section className='flex items-center justify-center my-10'>
        <div className='overflow-hidden w-4/5'>
          <div
            ref={sliderRef}
            className='flex transition-transform duration-300 ease-in-out'
          >
            {/* โคลนของ slide สุดท้ายไว้ที่จุดเริ่มต้น */}
            {clientComments.length > 0 && (
              <div className='flex-shrink-0 w-1/4 border-2 rounded-lg flex flex-col text-center   items-center p-2 bg-yellow '>
                <div className='h-1/2'>
                  <h1 className='font-head'><span className='font-head uppercase'>{clientComments[clientComments.length - 1].user.firstname} </span> say :</h1>
                  <h2 className=' text-gray-700'>{clientComments[clientComments.length - 1].comment}</h2>
                </div>
                <div className="mt-4 h-1/2">
                  <h3 className="font-head">Ordered Menus:</h3>
                  <ul className="text-sm text-gray-600 mt-2">
                    {clientComments[clientComments.length - 1].order.order_detail.map((detail) => (
                      <li key={detail.id}>
                        {detail.item.menuName} - {detail.count} pcs
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* แสดงคอมเมนต์ทั้งหมด */}
            {clientComments.map((comment, index) => (
              <div
                key={index}
                className='flex-shrink-0 w-1/4 border-2 rounded-lg flex flex-col text-center   items-center p-4 bg-yellow'
              >
                <div className='h-1/2'>
                  <h1 className='font-head'><span className='font-head uppercase'>{comment.user.firstname} </span> say :</h1>
                  <h2 className=' text-gray-700'>{comment.comment}</h2>
                </div>
                <div className="mt-4 h-1/2">
                  <h3 className="font-bold">Ordered Menus:</h3>
                  <ul className="text-sm text-gray-600 mt-2">
                    {comment.order.order_detail.map((detail) => (
                      <li key={detail.id}>
                        {detail.item.menuName} - {detail.count} pcs
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}

            {/* โคลนของ slide แรกไว้ที่จุดสิ้นสุด */}
            {clientComments.length > 0 && (
              <div className='flex-shrink-0 w-1/4 border-2 rounded-lg flex flex-col text-center  items-center p-4 bg-yellow'>
                <div className='h-1/2'>
                  <h1 className='font-head'><span className='font-head uppercase'>{clientComments[0].user.firstname} </span> say :</h1>
                  <h2 className=' text-gray-700'>{clientComments[0].comment}</h2>
                </div>
                <div className="mt-4 h-1/2">
                  <h3 className="font-bold">Ordered Menus:</h3>
                  <ul className="text-sm text-gray-600 mt-2">
                    {clientComments[0].order.order_detail.map((detail) => (
                      <li key={detail.id}>
                        {detail.item.menuName} - {detail.count} pcs
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <RiDoubleQuotesR className='w-20 h-20 mx-32 text-yellow-500 float-end' />
    </div>
  );
}

export default Comment;
