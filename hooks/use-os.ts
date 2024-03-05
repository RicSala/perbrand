// TODO: use mantime if possible

import React, { useState, useEffect } from 'react';

// A simplified way to detect OS (not full-proof, due to user agent string variability)
const getOperatingSystem = (userAgent) => {
    if (userAgent.includes('Win')) return 'Windows';
    if (userAgent.includes('Mac')) return 'MacOS';
    if (userAgent.includes('Linux')) return 'Linux';
    // Add more checks as needed...
    return 'Unknown OS';
};

const useOperatingSystem = () => {
    const [os, setOs] = useState('Unknown OS'); // (A)

    useEffect(() => {
        // (B)
        const userAgent = window.navigator.userAgent; // (C)
        const detectedOs = getOperatingSystem(userAgent); // (D)
        setOs(detectedOs); // (E)
    }, []); // (F)

    return os; // (G)
};

export default useOperatingSystem;
