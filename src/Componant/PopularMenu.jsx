import React, { useEffect, useState } from 'react';

import { getShowPopularMenu } from '../api/menu-api'

export default function PopularMenu() {

    const [popularMenus, setPopularMenus] = useState([]);

    useEffect(() => {
        const fetchPopularMenus = async () => {
            try {
                const response = await getShowPopularMenu()
                setPopularMenus(response.data);
            } catch (error) {
                console.error('Error fetching popular menus:', error);
            }
        };

        fetchPopularMenus();
    }, []);

    const text = "Most Popular Menu";

    return (
        <div>
            <div className="flex items-center justify-center ">
                <h1 className='font-title my-32 text-yellow wave-text'>
                    {text.split("").map((letter, index) => (
                        <span key={index} className="wave-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                            {letter}
                        </span>
                    ))}
                </h1>
            </div>

            <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-40'>
                {popularMenus.map((menu, index) => (
                    <div className='w-3/4  mx-auto text-center hover:scale-110 duration-500' key={index}>
                        <div className='h-1/2'>
                            <img className='h-full w-full object-cover '
                                src={menu.image} />

                        </div>
                        <div className='h-1/2 flex flex-col gap-3 justify-around'>
                            <div>
                                <h1 className='font-main text-yellow'>{menu.menuName}</h1>
                                <p className='px-4 text-red font-second'>{menu.description}</p>
                            </div>
                            <div>
                                <h2 className='font-head text-yellow'>{menu.price} THB</h2>
                                <h2 className='font-head text-yellow'>Total Sale : {menu.totalCount} count </h2>
                            </div>

                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
