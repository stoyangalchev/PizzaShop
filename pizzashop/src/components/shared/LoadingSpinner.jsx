import React from 'react';


const LoadingSpinner = ({ show }) => {
    return (
        <div className={`loading-spinner ${show ? 'show' : ''}`}>
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingSpinner;