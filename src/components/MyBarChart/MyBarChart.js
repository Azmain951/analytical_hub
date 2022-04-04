import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';
import '../MyPieChart/MyPieChart.css'

const MyBarChart = () => {

    const [data, setData] = useChartData();
    return (
        <div className='chart'>
            <h3>Investment VS Revenue</h3>
            <BarChart
                width={300}
                height={300}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default MyBarChart;