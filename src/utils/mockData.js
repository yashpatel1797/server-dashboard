const generateMockData = (startTime, endTime, interval) => {
  const mockData = [];
  let currentTime = startTime;

  while (currentTime < endTime) {
    const value = Math.floor(Math.random() * 30) + 5;
    mockData.push({
      timestamp: currentTime.toISOString(),
      value,
    });

    currentTime = new Date(currentTime.getTime() + interval);
  }

  return mockData;
};

const startTime = new Date('2023-05-29T00:00:00Z');
const endTime = new Date('2023-05-29T12:00:00Z');
const interval = 60 * 60 * 1000;

const mockResources = [
  {
    id: 1,
    name: 'Server A',
    type: 'EC2 Instance',
    status: 'Running',
    region: 'us-east-1',
    account: 'account-1',
    metrics: {
      cpu: generateMockData(startTime, endTime, interval),
      memory: generateMockData(startTime, endTime, interval),
    },
  },
  {
    id: 2,
    name: 'Database B',
    type: 'RDS Instance',
    status: 'Stopped',
    region: 'us-west-2',
    account: 'account-2',
    metrics: {
      cpu: generateMockData(startTime, endTime, interval),
      memory: generateMockData(startTime, endTime, interval),
    },
  },
  {
    id: 3,
    name: 'Load Balancer C',
    type: 'ELB',
    status: 'Active',
    region: 'eu-central-1',
    account: 'account-3',
    metrics: {
      cpu: generateMockData(startTime, endTime, interval),
      memory: generateMockData(startTime, endTime, interval),
    },
  },
];

const mockOverallUsage = mockResources.map((resource) => ({
  name: resource.name,
  cpu: resource.metrics.cpu.reduce((sum, metric) => sum + metric.value, 0),
  memory: resource.metrics.memory.reduce((sum, metric) => sum + metric.value, 0),
}));

const mockNotifications = [
  {
    id: 1,
    message: 'Server overload detected on Server A',
    severity: 'error',
    timestamp: new Date().toLocaleString(),
  },
  {
    id: 2,
    message: 'Scheduled maintenance for Database B tonight',
    severity: 'warning',
    timestamp: new Date().toLocaleString(),
  },
  {
    id: 3,
    message: 'Memory usage for Load Balancer C is approaching the limit',
    severity: 'warning',
    timestamp: new Date().toLocaleString(),
  },
  {
    id: 4,
    message: 'OS upgrade required for Server A',
    severity: 'info',
    timestamp: new Date().toLocaleString(),
  },
];

export { mockResources, mockOverallUsage, mockNotifications };
