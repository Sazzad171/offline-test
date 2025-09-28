// src/app/offline-fallback/page.js
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OfflineFallback() {
  const [isOnline, setIsOnline] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check initial status
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      // Redirect to home page when connection is restored
      router.push('/');
    };

    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [router]);

  const tryAgain = () => {
    window.location.reload();
  };

  return (
    <div className="offline-screen">
      <div className="offline-content">
        <h1>📡 You&apos;re Offline</h1>
        <p>Please check your internet connection and try again.</p>
        
        <div className="offline-actions">
          <button onClick={tryAgain} className="retry-button">
            Try Again
          </button>
        </div>
        
        <div className="offline-info">
          <p><strong>Status:</strong> 
            <span className={isOnline ? 'status-online' : 'status-offline'}>
              {isOnline ? ' Online' : ' Offline'}
            </span>
          </p>
          <p>This page will automatically redirect when connection is restored.</p>
        </div>
      </div>
    </div>
  );
}