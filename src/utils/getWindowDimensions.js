import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window?.innerWidth < 768 ? setMobile(true) : setMobile(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
}
