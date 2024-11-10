import React, { useEffect, useState } from 'react';

import { getShowPopularMenu } from '../api/menu-api'
import { useTranslation } from 'react-i18next';


export default function PopularMenu() {
    const { t } = useTranslation();


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

    const text = `${t('comment.text2')}`

    return (
        <div>
            <div className="flex items-center justify-center ">
                <h1 className='md:font-title my-10 lg:my-20 text-yellow wave-text text-3xl'>
                    {text.split("").map((letter, index) => (
                        <span key={index} className="wave-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                            {letter}
                        </span>
                    ))}
                </h1>
            </div>

            <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 md:mx-40'>
                {popularMenus.map((menu, index) => (
                    <div className='w-3/4  mx-auto text-center hover:scale-110 duration-500' key={index}>
                        <div className='h-1/2'>
                            <img className='h-full w-full object-cover '
                                src={menu.image} />

                        </div>
                        <div className='h-1/2 flex flex-col justify-around'>
                            <div>
                                <h1 className='text-xl md:font-main text-yellow '>{menu.menuName}</h1>
                                <p className='px-4 text-red font-second'>{menu.description}</p>
                            </div>
                            <div>
                                <h2 className='md:font-head text-yellow'>{menu.price} {t('menu.bath')}</h2>
                                <h2 className='md:font-head text-yellow'>{t('cart.totalSale')} : {menu.totalCount} {t('cart.count')} </h2>
                            </div>

                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
