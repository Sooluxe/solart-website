import { useRef, useState, useCallback } from 'react';

export default function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const onMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => setVisible(false), []);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="absolute w-[250px] h-[250px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 z-0"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 1 : 0,
          background: 'radial-gradient(circle, rgba(0,250,255,0.1), transparent 70%)',
        }}
      />
      {children}
    </div>
  );
}
