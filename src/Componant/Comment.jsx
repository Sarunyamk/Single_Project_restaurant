import React, { useEffect, useState,useRef  } from 'react'
import { RiDoubleQuotesL,RiDoubleQuotesR  } from "react-icons/ri";


const Comment = () => {

  const [currentSlide, setCurrentSlide] = useState(0); // ตำแหน่งปัจจุบัน
  const totalSlides = 10; // จำนวนรูปทั้งหมด
  const visibleSlides = 5; // จำนวนรูปที่แสดง
  const sliderRef = useRef(null); // ใช้เก็บ reference ของ slider
  const text = "Our Client Comment";
 

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

  // เลื่อนภาพอัตโนมัติทุกๆ 3 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides ? 0 : prev + 1));
    }, 3000); // ตั้งเวลาให้เลื่อนทุกๆ 3 วินาที

    return () => clearInterval(interval); // ล้าง interval เมื่อคอมโพเนนต์ถูกทำลาย
  }, [currentSlide]);

  useEffect(() => {
    sliderRef.current.style.transform = `translateX(-${currentSlide * (100 / visibleSlides)}%)`; // คำนวณการเลื่อน
  }, [currentSlide, visibleSlides]);

 

  return (
    <div className='my-32'>

        <div className="flex items-center justify-center ">
            <h1 className='font-title my-24 text-yellow wave-text'>
                {text.split("").map((letter, index) => (
                    <span key={index} className="wave-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                    {letter}
                    </span>
                ))}
            </h1>
        </div>
        
        <RiDoubleQuotesL className='w-20 h-20 mx-32'/>
        <section className='flex items-center justify-center my-10'>
            <div className='overflow-hidden w-4/5'>
                <div
                ref={sliderRef}
                className='flex transition-transform duration-300'
                onTransitionEnd={handleTransitionEnd} // เรียกใช้เมื่อการเลื่อนสิ้นสุด
                style={{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }}
                >
                {/* โคลนรูปสุดท้ายไว้ที่จุดเริ่มต้น */}
                <div className='flex-shrink-0 w-1/4 border-2 bg-yellow rounded-lg flex flex-col justify-center items-center'>
                    
                    <h1>Customer name</h1>
                    <h2>Comment</h2>
            
                </div>

                {Array.from({ length: totalSlides }).map((_, index) => (
                    <div
                    key={index}
                    className='flex-shrink-0 w-1/4 border-2 bg-yellow rounded-lg flex flex-col justify-center items-center'
                    >
                    <h1>Customer name</h1>
                    <h2>Comment</h2>
                    
                    </div>
                ))}

                {/* โคลนรูปแรกไว้ที่จุดสิ้นสุด */}
            
                </div>
            </div>
        </section>
        <RiDoubleQuotesR className='w-20 h-20 mx-32 float-end'/>
       

    </div>
  )
}

export default Comment

