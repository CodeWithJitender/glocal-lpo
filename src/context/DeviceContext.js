import React, { createContext, useContext, useState, useEffect } from 'react';

const DeviceContext = createContext(null);

export const DeviceProvider = ({
  value: initialValue,
  children,
}) => {
  const [device, setDevice] = useState(initialValue || { isMobile: false, isTablet: false, isDesktop: true });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      const isMobile = width < 900;
      const isTablet = width >= 900 && width < 1200;
      const isDesktop = width >= 1200;
      setDevice({
        ...(initialValue || {}),
        isMobile,
        isTablet,
        isDesktop,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initialValue]);

  return (
    <DeviceContext.Provider value={device}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  return context;
};

