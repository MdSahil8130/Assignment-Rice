import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
    {'COMPETITOR': 4000, 'BKV ENERGY': 2400, amt: 2400 },
  ];
  
  function TickParamsSelector() {
    const formatTickItem = (tickItem:{
      tickItem:any;
    }) => `$${tickItem}`;
  
    return (
      <BarChart width={1000 } height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatTickItem} />
        <Tooltip />
        <Legend />
        <Bar dataKey="BKV ENERGY" fill="#00B49D" barSize={150} radius={[15, 15, 0, 0]} />
        <Bar dataKey="COMPETITOR" fill="#D5EEEA" barSize={150} radius={[15, 15, 0, 0]} />
      </BarChart>
    );
  }
  
export default TickParamsSelector;