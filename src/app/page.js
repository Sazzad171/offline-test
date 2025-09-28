// src/app/page.js
"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateStatus = () => {
      setIsOnline(navigator.onLine);
    };

    updateStatus();
    
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);

    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  }, []);

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem 20px',
      textAlign: 'center' 
    }}>
      <h1 style={{ marginBottom: '1rem' }}>Offline Functionality Test</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        This app demonstrates offline functionality in Next.js
      </p>

      <div style={{ 
        padding: '2rem', 
        background: isOnline ? '#d4edda' : '#f8d7da',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h2>Current Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</h2>
        <p>Disconnect your internet and reload the page to test offline functionality.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '8px' }}>
          <h3>Test Steps:</h3>
          <ol style={{ textAlign: 'left' }}>
            <li>Disconnect from internet</li>
            <li>Reload this page</li>
            <li>You should see the offline page</li>
            <li>Reconnect to internet</li>
            <li>Click &quot;Try Again&quot;</li>
          </ol>
        </div>
      </div>
    </div>
  );
}