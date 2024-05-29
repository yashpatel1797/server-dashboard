import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faExclamationTriangle, faBan } from '@fortawesome/free-solid-svg-icons';


const NotificationItem = ({ notification, onDismiss }) => {
  const { message, severity, timestamp } = notification;

  const getIcon = () => {
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

  return (
    <div className={`notification p-4 rounded-md shadow-md mb-4 flex items-center bg-white ${severity === 'info' ? 'text-blue-800' : severity === 'warning' ? 'text-yellow-800' : 'text-red-800'}`}>
      {getIcon()}
      <div className="notification__message flex-1 ml-2">{message}</div>
      <div className="notification__timestamp text-sm text-gray-500 ml-2">{timestamp}</div>
      <button className="notification__dismiss ml-2 text-gray-500 hover:text-gray-800 focus:outline-none" onClick={onDismiss}>
        &times;
      </button>
    </div>
  );
};

export default NotificationItem;
