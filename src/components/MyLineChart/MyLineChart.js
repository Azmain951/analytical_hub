import React, { useEffect, useState } from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';


const MyLineChart = () => {

    const [data, setData] = useChartData();

    return (
        <div>
            <LineChart width={500} height={300} data={data}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" strokeWidth={2} />
                <XAxis dataKey='month'></XAxis>
                <YAxis dataKey='sell'></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </LineChart>
        </div>
    );
};

export default MyLineChart;