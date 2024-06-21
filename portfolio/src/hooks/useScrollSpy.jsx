import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollSpy = (ids, offset = 0) => {
  const [activeId, setActiveId] = useState('');
  const { hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      let activeSection = '';

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          activeSection = id;
        }
      }

      setActiveId(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids, offset]);

  useEffect(() => {
    if (hash) {
      setActiveId(hash.substring(1));
    }
  }, [hash]);

  return activeId;
};

export default useScrollSpy;
