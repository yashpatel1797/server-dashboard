import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import { CSSTransition } from 'react-transition-group';

const LineChartComponent = ({ data }) => {
  const formatXAxis = (tickItem) => {
    return moment(tickItem).format('h:mm A');
  };

  return (
    <CSSTransition in={true} timeout={500} classNames="chart" unmountOnExit>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} animationDuration={500}>
          <XAxis dataKey="timestamp" tickFormatter={formatXAxis} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" animationBegin={800} />
        </LineChart>
      </ResponsiveContainer>
    </CSSTransition>
  );
};

export default LineChartComponent;
