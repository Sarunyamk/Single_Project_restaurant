import React, { useState } from 'react'

import { getTotalSale } from '../api/report-api'
import useAppStore from '../stores/appStore';
import Loading from '../components/Loading';

export default function ShowAllSaleReport() {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [salesReport, setSalesReport] = useState(null);

    const loading = useAppStore((state) => state.loading);
    const setLoading = useAppStore((state) => state.setLoading);


    const handleFetchReport = async () => {
        try {
            setLoading(true);
            const response = await getTotalSale(startDate, endDate)
            setSalesReport(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching sales report:', error);
            setLoading(false);
        }
    };
    if (loading) {
        return <Loading />
    }


    return (
        <div className=" mx-auto mt-24 w-4/5 p-10">
            <h1 className="text-yellow font-title text-center m-4">SALE REPORT</h1>
            <div className='flex gap-10  items-center '>

                <div >
                    <label htmlFor="startDate" className="mr-2">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border p-2"
                    />
                </div>
                <div >
                    <label htmlFor="endDate" className="mr-2">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border p-2"
                    />
                </div>
                <button
                    onClick={handleFetchReport}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:scale-105 duration-300"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Report'}
                </button>
            </div>

            {salesReport ? (
                <div className="mt-4">

                    <h1 className=' font-main my-4'>Date <span className='text-yellow underline'>{startDate} - {endDate} </span>  Total Sales : <span className='text-yellow underline'>{salesReport.totalSales}</span> THB </h1>
                    <table className="divide-y divide-gray-200 w-full rounded-xl text-center">
                        <thead className="bg-gray-800 text-yellow font-second">
                            <tr>
                                <th className="px-6 py-3  uppercase tracking-wider">NO.</th>
                                <th className="px-6 py-3  uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-3  uppercase tracking-wider">Phone</th>
                                <th className="px-6 py-3  uppercase tracking-wider">Menu order</th>
                                <th className="px-6 py-3  uppercase tracking-wider">Total Sale</th>
                                <th className="px-6 py-3  uppercase tracking-wider">Date</th>

                            </tr>
                        </thead>

                        <tbody className="bg-gray-700 text-white divide-y divide-gray-600">
                            {salesReport.orders.map((order, index) => (
                                <tr key={index}>
                                    <th scope="row" className="px-6 py-4 whitespace-nowrap text-yellow">{index + 1}</th>
                                    <td className="px-6 py-4 whitespace-nowrap">{order.user.firstname}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{order.user.phonenumber}</td>
                                    <td className="px-6 py-4">
                                        {order.order_detail.map((menu) => menu.item.menuName).join(', ')}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{order.total} THB</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{new Date(order.createdAt).toLocaleDateString()}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="bg-gray-800 h-96 mt-20 flex justify-center items-center font-title text-yellow">
                    <h1>  No data available</h1>
                </div>
            )}
        </div>
    );
}