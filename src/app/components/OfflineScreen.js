// components/OfflineScreen.jsx
"use client";
import { useEffect, useState } from 'react';

const OfflineScreen = ({ currentPath }) => {
  const [isChecking, setIsChecking] = useState(false);

  const checkConnection = async () => {
    setIsChecking(true);
    try {
      // Try to fetch a small resource to verify real connectivity
      await fetch('/api/health', { 
        method: 'HEAD',
        cache: 'no-cache'
      });
      window.location.reload();
    } catch (error) {
      console.log('Still offline');
    } finally {
      setIsChecking(false);
    }
  };

  const tryAgain = () => {
    checkConnection();
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="offline-screen">
      <div className="offline-content">
        <h1>No Internet Connection</h1>
        <p>Please check your network connection and try again.</p>
        
        <div className="offline-actions">
          <button 
            onClick={tryAgain} 
            disabled={isChecking}
            className="retry-button"
          >
            {isChecking ? 'Checking...' : 'Try Again'}
          </button>
          <button 
            onClick={reloadPage}
            className="reload-button"
          >
            Reload Page
          </button>
        </div>
        
        <div className="offline-info">
          <p>Current path: {currentPath}</p>
          <p>You'll be able to continue browsing once connection is restored.</p>
        </div>
      </div>
      
      <style jsx>{`
        .offline-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          padding: 2rem;
        }
        
        .offline-content {
          text-align: center;
          max-width: 500px;
        }
        
        .offline-actions {
          margin: 2rem 0;
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .retry-button, .reload-button {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        
        .retry-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .offline-info {
          margin-top: 2rem;
          padding: 1rem;
          background: #f5f5f5;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default OfflineScreen;