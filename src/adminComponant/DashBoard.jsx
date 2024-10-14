import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getDashboard } from '../api/report-apt';
import 'chart.js/auto'; // Import Chart.js dependencies

const Dashboard = () => {
    const [salesData, setSalesData] = useState({ totalSales: 0, ordersCount: 0 });
    const [loading, setLoading] = useState(true);

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

    const data = {
        labels: ['Total Orders', 'Total Sales'],
        datasets: [
            {
                label: 'Sales Data',
                data: [salesData.ordersCount, salesData.totalSales],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1,
                hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)'],
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
        <div className='p-5 flex flex-col justify-center items-center w-2/3  mx-auto '>
            <h1 className='font-main  mb-5 text-blue-600'>Today's Sales Dashboard</h1>
            <div className='w-full h-60 flex justify-center'>
                <Bar data={data} options={options} />
            </div>
            <div className='mt-5 font-head flex gap-10'>
                <h3 className='mb-3'>Orders Count: <span className='font-bold'>{salesData.ordersCount}</span></h3>
                <h3>Total Sales: <span className='font-bold'>{salesData.totalSales} THB</span></h3>
            </div>
        </div>
    );
};

export default Dashboard;
