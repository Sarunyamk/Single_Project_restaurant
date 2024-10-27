

import React, { useState } from 'react';


export default function HistoryOrder({ orders, onClose }) {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-center font-main text-yellow mb-4">Order History</h2>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {orders.map(order => (
                        <div key={order.id} className="mb-4 border border-gray-300 p-4 rounded-lg flex flex-col gap-1">
                            <div className="flex justify-between items-center font-bold">
                                <p className="text-yellow">Order ID: {order.id}</p>
                                <p className="text-yellow">Total: {order.total} THB</p>
                            </div>
                            <div className="flex justify-between items-center font-bold">
                                <p className="text-yellow">Order Date: {new Date(order.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                            </div>


                            <div>
                                <span className="text-yellow">order details : </span>
                                {order.order_detail.map(detail => (
                                    <span key={detail.id}>{` ${detail.item.menuName} - ${detail.count} pcs, `}</span>
                                ))}
                            </div>


                        </div>
                    ))}
                </div>

                <button onClick={onClose} className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg">
                    Close
                </button>
            </div>
        </div>
    );
}
