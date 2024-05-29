import { useEffect } from 'react';
import '../styles/customCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const onMouseMove = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    const onMouseDown = () => {
      cursor.classList.add('custom-cursor-clicked');
    };

    const onMouseUp = () => {
      cursor.classList.remove('custom-cursor-clicked');
    };

    const onMouseEnter = () => {
      cursor.classList.add('custom-cursor-hover');
    };

    const onMouseLeave = () => {
      cursor.classList.remove('custom-cursor-hover');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    document.querySelectorAll('a, button, input, textarea').forEach((element) => {
      element.addEventListener('mouseenter', onMouseEnter);
      element.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);

      document.querySelectorAll('a, button, input, textarea').forEach((element) => {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return <div className="custom-cursor"></div>;
};

export default CustomCursor;
