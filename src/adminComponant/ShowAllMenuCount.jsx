import React, { useState, useEffect } from 'react'

import { getTotalSaleUnit } from '../api/report-apt'

export default function ShowAllMenuCount() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getTotalSaleUnit()
                setData(response.data);
                setLoading(false);

            } catch (error) {
                console.error('Error fetching Users:', error);
            }
        };
        fetchComments();
    }, []);

    if (loading) {
        return <p>Loading Menu...</p>;
    }
    return (
        <div className='w-4/5 mt-28 mx-4'>
            <h1 className='text-yellow font-title text-center m-4'>COUNT MENU</h1>
            <table className="divide-y divide-gray-200 w-full rounded-xl text-center">
                <thead className="bg-gray-800 text-yellow font-second">
                    <tr>
                        <th className="px-6 py-3  uppercase tracking-wider">NO.</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Menu ID</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Menu Name</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Total Unit</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Total Sale</th>
                    </tr>
                </thead>

                <tbody className="bg-gray-700 text-white divide-y divide-gray-600">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap text-yellow">{index + 1}</th>
                            <td className="px-6 py-4 whitespace-nowrap">{item.menuId}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.menuName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.totalUnitsSold}</td>
                            <td className="px-6 py-4 whitespace-nowrap"> {item.totalSales.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
