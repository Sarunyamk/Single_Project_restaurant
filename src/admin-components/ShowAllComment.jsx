import React, { useState, useEffect } from 'react'

import { getComments } from '../api/report-apt'
import Loading from '../components/Loading';
import useAppStore from '../stores/appStore';

export default function ShowAllComment() {

    const [data, setData] = useState([])

    const loading = useAppStore((state) => state.loading);
    const setLoading = useAppStore((state) => state.setLoading);


    useEffect(() => {

        fetchComments();
    }, []);
    const fetchComments = async () => {
        try {
            const response = await getComments()
            setData(response.data);
            setLoading(false);

        } catch (error) {
            console.error('Error fetching Users:', error);
        }
    };

    if (loading) {
        return <Loading />
    }
    return (
        <div className='w-4/5 mt-28 mx-4'>
            <h1 className='text-yellow font-title text-center m-4'>COMMENT</h1>
            <table className="divide-y divide-gray-200 w-full rounded-xl  text-center">
                <thead className="bg-gray-800 text-yellow font-second">
                    <tr>
                        <th className="px-6 py-3  uppercase tracking-wider">NO.</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Customer ID</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Customer Name</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Order Id</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Comment</th>
                        <th className="px-6 py-3  uppercase tracking-wider">Rating</th>
                    </tr>
                </thead>

                <tbody className="bg-gray-700 text-white divide-y divide-gray-600">
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <th scope="row" className="px-6 py-4 whitespace-nowrap text-yellow">{index + 1}</th>
                            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.user.firstname}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.order.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.comment}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
