import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CSSTransition } from 'react-transition-group';

const BarChartComponent = ({ data, dataKey }) => {
  return (
    <CSSTransition in={true} timeout={500} classNames="chart" unmountOnExit>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </CSSTransition>
  );
};

export default BarChartComponent;
