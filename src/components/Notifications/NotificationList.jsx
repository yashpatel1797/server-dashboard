import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faExclamationTriangle, faBan } from '@fortawesome/free-solid-svg-icons';
import { mockNotifications } from '../../utils/mockData';


const NotificationList = () => {

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNotification =
        mockNotifications[Math.floor(Math.random() * mockNotifications.length)];
      showNotification(randomNotification);
    }, 10000);


    return () => clearInterval(interval);
  }, []);


  const showNotification = (notification) => {
    const { severity } = notification;

    const icon = getIcon(severity);

    const toastConfig = {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: icon,
    };

    toast(<NotificationContent notification={notification} />, toastConfig);
  };

  const getIcon = (severity) => {
    switch (severity) {
      case 'info':
        return <FontAwesomeIcon icon={faInfoCircle} className="notification__icon" />;
      case 'warning':
        return <FontAwesomeIcon icon={faExclamationTriangle} className="notification__icon" />;
      case 'error':
        return <FontAwesomeIcon icon={faBan} className="notification__icon" />;
      default:
        return null;
    }
  };

  const NotificationContent = ({ notification }) => {
    const { message, timestamp } = notification;

    return (
      <div>
        <div>{message}</div>
        <div className="notification__timestamp">{timestamp}</div>
      </div>
    );
  };

  return (
    <div className="notification-list">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default NotificationList;
