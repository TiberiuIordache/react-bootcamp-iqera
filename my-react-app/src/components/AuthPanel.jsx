import React, { useState } from 'react';
import './AuthPanel.css';

function AuthPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="auth-panel">
      {!isLoggedIn ? (
        <button className="auth-btn" onClick={() => setIsLoggedIn(true)}>Login</button>
      ) : (
        <>
          <p>Benvenuto!</p>
          <button className="auth-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      )}
    </div>
  );
}

export default AuthPanel;
