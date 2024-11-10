

import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';


export default function HistoryOrder({ orders, onClose }) {

    const { t } = useTranslation();


    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-center text-xl md:font-main text-yellow mb-4">{t('orderModal.orderHistory')}</h2>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {orders.map(order => (
                        <div key={order.id} className="mb-4 border border-gray-300 p-4 rounded-lg flex flex-col gap-1">
                            <div className="flex justify-between items-center font-bold">
                                <p className="text-yellow">{t('orderModal.orderId')}: {order.id}</p>
                                <p className="text-yellow">{t('orderModal.total')}: {order.total} {t('menu.bath')}</p>
                            </div>
                            <div className="flex justify-between items-center font-bold">
                                <p className="text-yellow">{t('orderModal.orderDate')}: {new Date(order.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                            </div>


                            <div>
                                <span className="text-yellow">{t('orderModal.orderDetail')} : </span>
                                {order.order_detail.map(detail => (
                                    <span key={detail.id}>{` ${detail.item.menuName} - ${detail.count} {t('orderModal.pcs')} , `}</span>
                                ))}
                            </div>


                        </div>
                    ))}
                </div>

                <button onClick={onClose} className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg">
                    {t('orderModal.close')}
                </button>
            </div>
        </div>
    );
}
