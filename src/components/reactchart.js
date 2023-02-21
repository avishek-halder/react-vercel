import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [
    {
        name: 'Page A', 
        uv: 400, 
        pv: 2400, 
        amt: 2400
    },
    {
        name: 'Page B', 
        uv: 300, 
        pv: 2100, 
        amt: 2100
    },
    {
        name: 'Page C', 
        uv: 200, 
        pv: 2000, 
        amt: 2000
    },
    {
        name: 'Page D', 
        uv: 400, 
        pv: 2400, 
        amt: 2400
    },
    {
        name: 'Page E', 
        uv: 400, 
        pv: 2400, 
        amt: 2400
    },
    {
        name: 'Page F', 
        uv: 100, 
        pv: 400, 
        amt: 2400
    }
];
const reactchart = (props) => {
    return (
        <LineChart width={600} height={600} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="pv" />
        <YAxis />
      </LineChart>
    )
}
export default reactchart;