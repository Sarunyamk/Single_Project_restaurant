import React, { useEffect, useState } from 'react';

import { Bar } from 'react-chartjs-2';
import { getDashboard } from '../api/report-apt';
import 'chart.js/auto';

const Dashboard = () => {

    const [loading, setLoading] = useState(true);

    const [salesData, setSalesData] = useState({ totalSales: 0, ordersCount: 0 });

    useEffect(() => {
        const fetchSalesData = async () => {
            try {
                const response = await getDashboard()
                setSalesData(response.data.salesData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };

        fetchSalesData();
    }, []);

    const currentDate = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Data สำหรับกราฟ Total Orders
    const ordersData = {
        labels: ['Total Orders'],
        datasets: [
            {
                label: 'Total Orders',
                data: [salesData.ordersCount],
                backgroundColor: ['rgba(75, 192, 192, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)'],
                borderWidth: 1,
                hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)'],
            },
        ],
    };

    // Data สำหรับกราฟ Total Sales
    const salesDataGraph = {
        labels: ['Total Sales'],
        datasets: [
            {
                label: 'Total Sales',
                data: [salesData.totalSales],
                backgroundColor: ['rgba(153, 102, 255, 0.6)'],
                borderColor: ['rgba(153, 102, 255, 1)'],
                borderWidth: 1,
                hoverBackgroundColor: ['rgba(153, 102, 255, 0.8)'],
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw} THB`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };

    if (loading) {
        return <p className="text-center font-bold text-lg">Loading dashboard...</p>;
    }

    return (
        <div className='p-5 flex flex-col justify-center items-center mt-40 w-2/3 h-96 mx-auto '>
            <h1 className='font-main mb-5 text-blue-600'>Today's Sales Dashboard</h1>
            <h2 className="font-head text-lg">Date: {currentDate}</h2>

            <div className='flex gap-6 mt-6'>
                <div className='w-full h-60 flex flex-col justify-center items-center'>
                    <Bar data={ordersData} options={options} />
                    <h3 className='mb-3'>Orders Count: <span className='font-bold'>{salesData.ordersCount}</span></h3>
                </div>
                <div className='w-full h-60 flex flex-col justify-center items-center'>
                    <Bar data={salesDataGraph} options={options} />
                    <h3>Total Sales: <span className='font-bold'>{salesData.totalSales} THB</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;