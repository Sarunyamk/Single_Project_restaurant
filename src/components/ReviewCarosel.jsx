import React, { useState, useEffect } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { getShowReviewMenu } from '../api/comment-api';
import { useTranslation } from 'react-i18next';



export default function CarouselDemo({ menuItemId, hdlClickOpenReview }) {

    const { t } = useTranslation();


    const [comments, setComments] = useState([]);

    useEffect(() => {
        // ฟังก์ชันเพื่อดึงคอมเมนต์
        async function fetchComments() {
            try {
                const response = await getShowReviewMenu(menuItemId);  // เรียกใช้ API
                setComments(response.data);  // เก็บคอมเมนต์ใน state
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        }

        fetchComments();  // เรียกฟังก์ชันเมื่อ component ถูกสร้าง
    }, [menuItemId]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 ">
            <Carousel className="w-full max-w-xs mx-auto  ">
                <CarouselContent>
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1 relative">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <div className="text-center">
                                                <h2 className="text-xl font-semibold">{t('payment.name')} {comment.user.firstname}</h2>
                                                <p className="text-md font-light mt-2">{comment.comment}</p>
                                                <p className="text-lg mt-2">{t('payment.rating')}: {comment.rating}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))
                    ) : (
                        <div className="text-center p-6">{t('payment.comment')}</div>
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                <button onClick={hdlClickOpenReview} className="absolute top-0 -right-10 underline font-head w-8 h-8 text-center text-yellow">
                    {t('orderModal.close')}
                </button>
            </Carousel>
        </div>
    )
}
