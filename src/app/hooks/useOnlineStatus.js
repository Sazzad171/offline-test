// src/app/hooks/useOnlineStatus.js
import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  const [online, setOnline] = useState(true); // Default to true for SSR

  useEffect(() => {
    // Client-side only
    const updateOnlineStatus = () => {
      setOnline(navigator.onLine);
    };

    // Set initial status
    updateOnlineStatus();

    // Add event listeners
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return online;
};

export default useOnlineStatus;