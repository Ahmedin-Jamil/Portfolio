import React, { useEffect, useRef, useState } from 'react';

interface Bubble {
  id: string;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
  opacity: number;
}

const MovingBubbles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const bubblesRef = useRef<Bubble[]>([]);
  const [selectedBubbleId, setSelectedBubbleId] = useState<string | null>(null);
  const selectedBubbleRef = useRef<string | null>(null);
  const beatTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleBubbleClick = (e: React.MouseEvent, bubbleId: string) => {
    e.stopPropagation();

    if (beatTimeoutRef.current) {
      clearTimeout(beatTimeoutRef.current);
    }

    setSelectedBubbleId(bubbleId);
    selectedBubbleRef.current = bubbleId;

    const selectedBubble = bubblesRef.current.find((b) => b.id === bubbleId);
    if (!selectedBubble) return;

    const beatStrength = 3 + Math.random() * 2;
    bubblesRef.current = bubblesRef.current.map((bubble) => {
      if (bubble.id === bubbleId) {
        const randomAngle = Math.random() * Math.PI * 2;
        return {
          ...bubble,
          vx: Math.cos(randomAngle) * beatStrength,
          vy: Math.sin(randomAngle) * beatStrength,
        };
      } else {
        const dx = bubble.x - selectedBubble.x;
        const dy = bubble.y - selectedBubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
          const angle = Math.atan2(dy, dx);
          const pushForce = 2.5 + Math.random() * 1.5;
          return {
            ...bubble,
            vx: bubble.vx + Math.cos(angle) * pushForce,
            vy: bubble.vy + Math.sin(angle) * pushForce,
          };
        }
      }
      return bubble;
    });

    setBubbles([...bubblesRef.current]);

    let elapsedTime = 0;
    const decayInterval = setInterval(() => {
      elapsedTime += 100;
      const progress = Math.min(elapsedTime / 3000, 1);
      const decayFactor = 0.85 + progress * 0.15;

      bubblesRef.current = bubblesRef.current.map((bubble) => ({
        ...bubble,
        vx: bubble.vx * decayFactor,
        vy: bubble.vy * decayFactor,
      }));

      setBubbles([...bubblesRef.current]);

      if (progress >= 1) {
        clearInterval(decayInterval);
        setSelectedBubbleId(null);
        selectedBubbleRef.current = null;
      }
    }, 100);
  };

  useEffect(() => {
    const colors = [
      'from-emerald-100 to-emerald-300',
      'from-emerald-50 to-teal-200',
      'from-lime-100 to-emerald-200',
      'from-emerald-50 to-white',
      'from-slate-50 to-emerald-100',
    ];

    const initialBubbles: Bubble[] = Array.from({ length: 22 }, (_, i) => ({
      id: `bubble${i + 1}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 12 + Math.random() * 16, // smaller, closer to UC Alwan+ dots
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      color: colors[i % colors.length],
      opacity: 0.16 + Math.random() * 0.12, // soft but still clearly visible
    }));

    setBubbles(initialBubbles);
    bubblesRef.current = initialBubbles;
  }, []);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      bubblesRef.current = bubblesRef.current.map((bubble) => {
        let newX = bubble.x + bubble.vx;
        let newY = bubble.y + bubble.vy;
        let newVx = bubble.vx;
        let newVy = bubble.vy;

        if (newX - bubble.size / 2 < 0 || newX + bubble.size / 2 > 100) {
          newVx = -bubble.vx;
          newX = Math.max(bubble.size / 2, Math.min(100 - bubble.size / 2, newX));
        }

        if (newY - bubble.size / 2 < 0 || newY + bubble.size / 2 > 100) {
          newVy = -bubble.vy;
          newY = Math.max(bubble.size / 2, Math.min(100 - bubble.size / 2, newY));
        }

        return {
          ...bubble,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
        };
      });

      setBubbles([...bubblesRef.current]);
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{
        background: 'transparent',
        zIndex: 0,
      }}
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full bg-gradient-to-br ${bubble.color} transition-all duration-100 cursor-pointer hover:opacity-60`}
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            transform: `translate(-50%, -50%) scale(${selectedBubbleId === bubble.id ? 1.3 : 1})`,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: `1px solid rgba(255, 255, 255, 0.3)`,
            boxShadow:
              selectedBubbleId === bubble.id
                ? `0 0 ${bubble.size * 1.5}px rgba(255, 255, 255, 1),
                  0 0 ${bubble.size * 2}px rgba(16, 185, 129, 0.8),
                  inset -${bubble.size / 4}px -${bubble.size / 4}px ${bubble.size / 2}px rgba(0, 0, 0, 0.2),
                  inset ${bubble.size / 6}px ${bubble.size / 6}px ${bubble.size / 3}px rgba(255, 255, 255, 0.5),
                  0 ${bubble.size / 3}px ${bubble.size / 2}px rgba(0, 0, 0, 0.15)`
                : `0 0 ${bubble.size}px rgba(255, 255, 255, 0.6),
                  inset -${bubble.size / 4}px -${bubble.size / 4}px ${bubble.size / 2}px rgba(0, 0, 0, 0.2),
                  inset ${bubble.size / 6}px ${bubble.size / 6}px ${bubble.size / 3}px rgba(255, 255, 255, 0.5),
                  0 ${bubble.size / 3}px ${bubble.size / 2}px rgba(0, 0, 0, 0.15)`,
            filter: `drop-shadow(0 ${bubble.size / 5}px ${bubble.size / 2.5}px rgba(0, 0, 0, 0.2))`,
            pointerEvents: 'auto',
          }}
          onClick={(e) => handleBubbleClick(e, bubble.id)}
        >
          <div
            className="absolute rounded-full"
            style={{
              top: '10%',
              left: '15%',
              width: `${bubble.size * 0.3}px`,
              height: `${bubble.size * 0.3}px`,
              background:
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent)',
              filter: 'blur(2px)',
            }}
          ></div>

          <div
            className="absolute rounded-full"
            style={{
              bottom: '15%',
              right: '20%',
              width: `${bubble.size * 0.2}px`,
              height: `${bubble.size * 0.2}px`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.6), transparent)',
              filter: 'blur(1px)',
            }}
          ></div>
        </div>
      ))}

      <style>{`
        @keyframes float-bubble {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default MovingBubbles;
