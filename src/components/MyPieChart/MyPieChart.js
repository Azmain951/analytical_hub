import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import useChartData from '../../hooks/useChartData';
import './MyPieChart.css'

const MyPieChart = () => {
    const [data, setData] = useChartData();

    return (
        <div className='chart'>
            <h3>Investment VS Revenue</h3>
            <PieChart width={350} height={350}>
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default MyPieChart;