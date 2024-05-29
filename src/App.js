import React from 'react';
import Layout from './components/Layout/Layout';
import NotificationList from './components/Notifications/NotificationList';
import ResourceList from './components/ResourceList/ResourceList';
import BarChartComponent from './components/Charts/BarChart';
import LineChartComponent from './components/Charts/LineChart';
import PieChartComponent from './components/Charts/PieChart';
import { mockResources, mockOverallUsage } from './utils/mockData';
import './index.css';

const App = () => {
  const cpuChartData = mockResources.flatMap((resource) =>
    resource.metrics.cpu.map((metric) => ({
      name: resource.name,
      ...metric,
    }))
  );

  const memoryChartData = mockResources.flatMap((resource) =>
    resource.metrics.memory.map((metric) => ({
      name: resource.name,
      ...metric,
    }))
  );

  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
          <NotificationList />
        <div className="p-4">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <ResourceList />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Charts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">CPU Usage</h3>
                <LineChartComponent data={cpuChartData} dataKey="value" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Memory Usage</h3>
                <LineChartComponent data={memoryChartData} dataKey="value" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Overall System Usage</h3>
                <BarChartComponent data={mockOverallUsage} dataKey="cpu" />
              </div>
              <div>
              <h3 className="text-lg font-semibold mb-2">Overall System Usage</h3>
              <BarChartComponent data={mockOverallUsage} dataKey="memory" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Overall Usage Distribution</h3>
                <PieChartComponent data={mockOverallUsage} dataKey="cpu" dataKey2="memory" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;