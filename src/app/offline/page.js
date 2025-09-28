// src/app/offline/page.js
"use client";

import { useEffect, useState } from 'react';

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    updateOnlineStatus();

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  const retry = () => {
    window.location.reload();
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📡 You're Offline</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Please check your internet connection and try again.
      </p>
      
      <button 
        onClick={retry}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Try Again
      </button>
      
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '5px' }}>
        <p>Status: <strong>{isOnline ? 'Online' : 'Offline'}</strong></p>
        <p>This page will automatically reload when connection is restored.</p>
      </div>
    </div>
  );
}