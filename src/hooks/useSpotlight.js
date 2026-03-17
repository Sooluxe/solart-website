import { useRef, useState, useCallback } from 'react';

export default function useSpotlight() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const onMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setVisible(false);
  }, []);

  return { ref, pos, visible, onMouseMove, onMouseLeave };
}
