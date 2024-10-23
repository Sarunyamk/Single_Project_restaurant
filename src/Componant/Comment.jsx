

import React, { useState, useEffect, useRef } from "react";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";


import { getShowCommentUser } from "../api/comment-api";

export default function Comment() {

  const text = "Our Client Comments";
  const [clientComments, setClientComments] = useState([]);

  const [currentSlide, setCurrentSlide] = useState(0); // ตำแหน่งปัจจุบัน
  const totalSlides = 10; // จำนวนรูปทั้งหมด
  const visibleSlides = 5; // จำนวนรูปที่แสดง
  const sliderRef = useRef(null); // ใช้เก็บ reference ของ slider

  const handleTransitionEnd = () => {
    if (currentSlide === totalSlides) {
      setCurrentSlide(0);
      sliderRef.current.style.transition = 'none'; // ปิด transition ชั่วคราวเพื่อไม่ให้เห็นการเปลี่ยนแปลง
      sliderRef.current.style.transform = `translateX(0)`; // เลื่อนกลับไปที่รูปแรกทันที
      setTimeout(() => {
        sliderRef.current.style.transition = 'transform 0.3s ease-in-out'; // เปิด transition กลับ
      }, 50); // ตั้งเวลาเล็กน้อยเพื่อให้การเลื่อนกลับมานุ่มนวล
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides ? 0 : prev + 1));
    }, 3000); // ตั้งเวลาให้เลื่อนทุกๆ 3 วินาที

    return () => clearInterval(interval); // ล้าง interval เมื่อคอมโพเนนต์ถูกทำลาย
  }, [currentSlide]);

  useEffect(() => {
    sliderRef.current.style.transform = `translateX(-${currentSlide * (100 / visibleSlides)}%)`; // คำนวณการเลื่อน
  }, [currentSlide, visibleSlides]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await getShowCommentUser();
        setClientComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
    fetchComments(); // เรียกฟังก์ชันเมื่อ component ถูกสร้าง
  }, []);



  return (
    <div className="m-32">
      <div className="flex items-center justify-center ">
        <h1 className="font-title my-20 text-yellow wave-text">
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className="wave-letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <RiDoubleQuotesL className="w-20 h-20 mb-10" />

      <section className='flex items-center justify-center'>
        <div className='overflow-hidden w-4/5'>
          <div
            ref={sliderRef}
            className='flex transition-transform duration-300'
            onTransitionEnd={handleTransitionEnd} // เรียกใช้เมื่อการเลื่อนสิ้นสุด
            style={{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }}
          >
            <figure

              className='flex-shrink-0 w-1/4 border-2 rounded-lg flex flex-col justify-between h-72 items-center'
            >
              <div className="mx-auto flex flex-col justify-center items-center h-full">
                <h3>THANK YOU</h3>
                <h3>FOR EVERY ORDER</h3>
              </div>

            </figure>

            {clientComments.map((comment, index) => (
              <div
                key={index}
                className='flex-shrink-0 w-1/4 border-2 rounded-lg h-72 flex flex-col justify-between items-center'
              >
                <div className="h-2/5 w-full flex flex-col justify-start items-center  mt-3">
                  <h3 className="font-head text-lg text-gray-800 uppercase">{comment.user.firstname}</h3>
                  <p className="italic p-3 font-second text-gray-600 text-center">{`" ${comment.comment} "`}</p>
                </div>

                <div className="h-3/5 w-full flex flex-col justify-start mt-2 items-center">
                  <h3 className="font-bold text-gray-700 mb-2">Ordered Menus:</h3>
                  <ul className="font-second text-gray-600 list-disc list-inside">
                    {comment.order?.order_detail?.slice(0, 4).map((detail) => (
                      <li key={detail.id}>{detail.item?.menuName}</li>
                    )) || <li>No items ordered</li>}
                    {comment.order?.order_detail?.length >= 4 && (
                      <li key="more">...</li>
                    )}
                  </ul>
                </div>
              </div>
            ))}

            <figure

              className='flex-shrink-0 w-1/4 border-2 rounded-lg flex flex-col justify-between h-72 items-center'
            >
              <div className="mx-auto flex flex-col justify-center items-center h-full">
                <h3>THANK YOU</h3>
                <h3>FOR EVERY ORDER</h3>
              </div>

            </figure>

          </div>
        </div>
      </section>

      <RiDoubleQuotesR className="w-20 h-20 float-end mt-10" />
    </div>
  );
}
