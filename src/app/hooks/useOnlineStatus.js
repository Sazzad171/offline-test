// src/app/hooks/useOnlineStatus.js
import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => {
      const isOnline = navigator.onLine;
      setOnline(isOnline);
      console.log('Online status changed:', isOnline);
    };

    // Set initial status
    updateOnlineStatus();

    // Add event listeners
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Additional check: try to fetch a small resource to verify real connectivity
    const checkRealConnectivity = async () => {
      try {
        await fetch('/?cache-buster=' + Date.now(), {
          method: 'HEAD',
          cache: 'no-cache',
          mode: 'no-cors'
        });
        setOnline(true);
      } catch (error) {
        setOnline(false);
      }
    };

    // Check real connectivity every 30 seconds
    const interval = setInterval(checkRealConnectivity, 30000);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      clearInterval(interval);
    };
  }, []);

  return online;
};

export default useOnlineStatus;