import React, { useState, useEffect } from 'react'
import { getComments } from '../api/report-apt'

export default function ShowAllComment() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getComments()
                setData(response.data);
                setLoading(false);

            } catch (error) {
                console.error('Error fetching Users:', error);
            }
        };
        fetchComments();
    }, []);
    console.log(data, "commenttttttttt")
    if (loading) {
        return <p>Loading comments...</p>;
    }
    return (
        <div className='mx-auto '>

            <table className="divide-y divide-gray-200 w-full rounded-xl mt-40  text-center">
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
