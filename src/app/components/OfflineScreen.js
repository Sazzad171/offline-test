// src/app/components/OfflineScreen.jsx
"use client";

import { useEffect } from 'react';

const OfflineScreen = ({ currentPath, isOnline }) => {
  useEffect(() => {
    // Prevent navigation when offline
    const handleClick = (e) => {
      if (!isOnline) {
        const target = e.target.closest('a');
        if (target && target.href) {
          e.preventDefault();
          alert('Navigation disabled while offline. Please check your internet connection.');
        }
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [isOnline]);

  const tryAgain = () => {
    window.location.reload();
  };

  return (
    <div className="offline-screen">
      <div className="offline-content">
        <h1>📡 No Internet Connection</h1>
        <p>You are currently offline. Please check your internet connection.</p>
        
        <div className="offline-actions">
          <button onClick={tryAgain} className="retry-button">
            Try Again
          </button>
        </div>
        
        <div className="offline-info">
          <p><strong>Current Page:</strong> {currentPath}</p>
          <p><strong>Connection Status:</strong> 
            <span className={isOnline ? 'status-online' : 'status-offline'}>
              {isOnline ? ' Online' : ' Offline'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfflineScreen;