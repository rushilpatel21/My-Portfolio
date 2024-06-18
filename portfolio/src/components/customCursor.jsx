import { useEffect } from 'react';
import '../styles/customCursor.css';

const CustomCursor = () => {
  useEffect(() => {

    const supportsHover = matchMedia('(hover: hover)').matches;

    if (!supportsHover) {
      return;
    }

    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

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

    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', onMouseEnter);
      element.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);

      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
      });

      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CustomCursor;
