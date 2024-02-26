import { useState, useEffect } from 'react';

function useDeviceWidth(): number {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize(): void {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return (): void => window.removeEventListener('resize', handleResize);
  }, []); 

  return width;
}

export default useDeviceWidth;
