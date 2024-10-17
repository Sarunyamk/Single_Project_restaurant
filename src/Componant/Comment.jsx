import React, { useState, useEffect } from "react";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { getShowCommentUser } from "../api/comment-api";

export default function Comment() {
  const text = "Our Client Comments";
  const [clientComments, setClientComments] = useState([]);

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
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent className="grid grid-cols-5 gap-4">
          {clientComments.length > 0 ? (
            clientComments.map((comment, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="rounded-lg shadow-lg bg-gray-50">
                    <CardContent className="p-4">
                      <h2 className="text-2xl font-semibold text-gray-800">
                        {comment.user?.firstname}
                      </h2>
                      <p className="text-md font-light text-gray-600 mt-2 italic">
                        "{comment.comment}"
                      </p>
                      <h3 className="font-bold mt-4 text-gray-700">
                        Ordered Menus:
                      </h3>
                      <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
                        {comment.order?.order_detail?.map((detail) => (
                          <li key={detail.id}>
                            {detail.item?.menuName}
                          </li>
                        )) || <li>No items ordered</li>}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <div className="text-center p-6">No comments available</div>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <RiDoubleQuotesR className="w-20 h-20 float-end mt-10" />
    </div>
  );
}
