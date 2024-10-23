
import React, { useState } from 'react';

import { getTotalSaleUnit } from '../api/report-apt';
import useAppStore from '../stores/appStore';
import Loading from '../components/Loading';

export default function ShowAllMenuCount() {
    const [data, setData] = useState(null);
    const [startDate, setStartDate] = useState(''); // วันที่เริ่มต้น
    const [endDate, setEndDate] = useState(''); // วันที่สิ้นสุด

    const loading = useAppStore((state) => state.loading);
    const setLoading = useAppStore((state) => state.setLoading);

    // ฟังก์ชันดึงข้อมูลยอดขายตามช่วงวันที่เลือก
    const handleFetchReport = async () => {
        try {
            setLoading(true);
            const response = await getTotalSaleUnit(startDate, endDate);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching sale data:', error);
            setLoading(false);
        }
    };



    if (loading) {
        return <Loading />
    }


    return (
        <div className="w-4/5 mt-24 mx-auto p-10">
            <h1 className="text-yellow font-title text-center m-4">COUNT MENU</h1>
            <div className="flex gap-10 items-center mb-6">
                <div>
                    <label htmlFor="startDate" className="mr-2">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border p-2"
                    />
                </div>
                <div>
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
            {data && data.length > 0 ? (
                <div className="mt-4">
                    <h1 className=' font-main my-4'>
                        Date <span className='text-yellow underline'>{startDate} - {endDate} </span>
                    </h1>
                    <table className="divide-y divide-gray-200 w-full rounded-xl text-center">
                        <thead className="bg-gray-800 text-yellow font-second">
                            <tr>
                                <th className="px-6 py-3  uppercase tracking-wider">NO.</th>
                                <th className="px-6 py-3 uppercase tracking-wider">Menu ID</th>
                                <th className="px-6 py-3 uppercase tracking-wider">Menu Name</th>
                                <th className="px-6 py-3 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 uppercase tracking-wider">Total Unit</th>
                                <th className="px-6 py-3 uppercase tracking-wider">Total Sale</th>
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
                                    <td className="px-6 py-4 whitespace-nowrap">{item.totalSales.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</td>
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
