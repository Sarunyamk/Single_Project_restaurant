import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import pizzaImage from '../img/imgIcon/cartIcon.png'; // เปลี่ยนเส้นทางไปยังรูปพิซซ่าของคุณ
import useAppStore from '../stores/appStore';

export default function Loading() {

    const location = useLocation();

    const loading = useAppStore((state) => state.loading);
    const setLoading = useAppStore((state) => state.setLoading);

    // จำลองการโหลดข้อมูล
    useEffect(() => {
        // เมื่อเส้นทางเปลี่ยน ให้แสดง Loading
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false); // ปิดการแสดง Loading หลังจากโหลดเสร็จ
        }, 1000); // ตั้งเวลาให้แสดง loading เป็น 1 วินาที (ปรับได้ตามต้องการ)

        return () => clearTimeout(timer); // ทำความสะอาด timer เมื่อคอมโพเนนต์ unmount หรือเส้นทางเปลี่ยน
    }, [location]); // ทำงานทุกครั้งที่เส้นทางเปลี่ยน

    if (!loading) {
        return <div>Content Loaded!</div>; // เมื่อโหลดเสร็จแสดงเนื้อหาตามที่ต้องการ
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <motion.img
                src={pizzaImage}
                alt="Pizza Loading"
                className="w-40 h-40"
                animate={{
                    rotate: [0, 360], // หมุนภาพจาก 0 ไป 360 องศา
                }}
                transition={{
                    duration: 2, // ระยะเวลาในการหมุน
                    repeat: Infinity, // หมุนวนไปเรื่อยๆ
                    ease: "linear", // หมุนอย่างสม่ำเสมอ
                }}
            />
        </div>
    );
}

