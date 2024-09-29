import React from "react";

export default function ScrollText() {
  const textItems = [
    "•  PROMOTION ONLY YOU !!!",
    "Enjoy Free Delivery on All Orders ",
    "Fresh Ingredients, Delivered Fast",
    "Satisfy Your Cravings Without Leaving Home",
    "A Delicious Deal You Can’t Miss!",
    "Call Us for More Exciting Deals",
    "Burgers, Pizzas, and Steaks A Feast for Every Food Lover!",
    "Tel 000-000-0000",    
    
  ];

 
  return (
    <section className="relative bg-yellow py-4 overflow-hidden">
      <div className="whitespace-nowrap flex">
        <div className=" text-scroll-left inline-block">

          {textItems.concat(textItems).map((text, index) => (
            <div key={index} className="text-gray-900 font-main inline-block mx-10">
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}