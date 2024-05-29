const getNotifications = () => {
    const mockNotifications = [
      {
        id: 1,
        message: 'Server overload detected',
        severity: 'error',
        timestamp: '2023-05-27 10:15:00',
      },
      {
        id: 2,
        message: 'Resource usage is approaching the limit',
        severity: 'warning',
        timestamp: '2023-05-27 09:30:00',
      },
    ];
    return mockNotifications;
  };
  
  
  export { getNotifications };
  