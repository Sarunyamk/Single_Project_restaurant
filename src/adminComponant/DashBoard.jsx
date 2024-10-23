import React, { useEffect, useState } from 'react';

import { Bar } from 'react-chartjs-2';
import { getDashboard, getComments } from '../api/report-apt';
import 'chart.js/auto';
import useAppStore from '../zustand/appStore';
import Loading from '../Componant/Loading';

import { Doughnut } from 'react-chartjs-2'; // นำเข้า Doughnut chart จาก react-chartjs-2
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);


const Dashboard = () => {

    const [salesData, setSalesData] = useState({ totalSales: 0, ordersCount: 0 });

    const loading = useAppStore((state) => state.loading);
    const setLoading = useAppStore((state) => state.setLoading);

    const [data, setData] = useState([]);
    const [ratingsCount, setRatingsCount] = useState({
        GOOD: 0,
        AVERAGE: 0,
        BAD: 0,
    });

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

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await getComments();
            setData(response.data);
            setLoading(false);

            // นับจำนวนของ rating แต่ละประเภท
            const countRatings = {
                GOOD: 0,
                AVERAGE: 0,
                BAD: 0,
            };

            response.data.forEach((item) => {
                if (item.rating === 'GOOD') {
                    countRatings.GOOD += 1;
                } else if (item.rating === 'AVERAGE') {
                    countRatings.AVERAGE += 1;
                } else if (item.rating === 'BAD') {
                    countRatings.BAD += 1;
                }
            });

            setRatingsCount(countRatings);

        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };


    const chartData = {
        labels: ['GOOD', 'AVERAGE', 'BAD'], // ป้ายกำกับแต่ละประเภท
        datasets: [
            {
                label: 'Ratings',
                data: [ratingsCount.GOOD, ratingsCount.AVERAGE, ratingsCount.BAD], // ข้อมูลจำนวนของแต่ละประเภท
                backgroundColor: ['#4CAF50', '#FFC107', '#F44336'], // สีของแต่ละประเภท
                hoverOffset: 4, // ขนาดการขยายเมื่อ hover
            },
        ],
    };


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
        return <Loading />
    }

    return (
        <div className='flex mx-auto  justify-around items-start mt-60 gap-20'>
            <div className='w-1/2 flex flex-col justify-start items-center'>
                <h1 className='font-title  mb-5 text-blue-600'>Today's Sales Dashboard</h1>
                <h2 className="font-head text-lg">Date: {currentDate}</h2>

                <div className='flex gap-6 mt-6'>
                    <div className='w-full h-96 flex flex-col justify-center items-center'>
                        <Bar data={ordersData} options={options} />
                        <h3 className='mb-3'>Orders Count: <span className='font-bold'>{salesData.ordersCount}</span></h3>
                    </div>
                    <div className='w-full h-96 flex flex-col justify-center items-center'>
                        <Bar data={salesDataGraph} options={options} />
                        <h3>Total Sales: <span className='font-bold'>{salesData.totalSales} THB</span></h3>
                    </div>
                </div>
            </div>

            <div className='w-1/2 flex flex-col justify-start items-center gap-10'>
                <h1 className='text-blue-600 font-title text-center '>Rating Dashboard</h1>

                {/* Doughnut chart สำหรับแสดงข้อมูล Rating */}
                <div className='flex flex-col justify-center gap-5'>
                    <div className='w-64 h-64'> {/* ปรับขนาดคอนเทนเนอร์ */}
                        <Doughnut data={chartData} />
                    </div>
                    <div>
                        <p style={{ color: '#4CAF50' }}>GOOD : {ratingsCount.GOOD}</p>
                        <p style={{ color: '#FFC107' }}>AVERAGE : {ratingsCount.AVERAGE}</p>
                        <p style={{ color: '#F44336' }}>BAD : {ratingsCount.BAD}</p>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Dashboard;