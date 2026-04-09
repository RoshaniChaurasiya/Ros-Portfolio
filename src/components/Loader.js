import React, { memo } from 'react';
import '../styles/Loader.css';

const Loader = memo(() => {
  return (
    <div className="loader-container" role="status" aria-live="polite">
      <div className="loader">
        <div className="loader-circle" aria-hidden="true"></div>
        <div className="loader-circle" aria-hidden="true"></div>
        <div className="loader-circle" aria-hidden="true"></div>
      </div>
    </div>
  );
});

Loader.displayName = 'Loader';
export default Loader;