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

type BubbleSim = Bubble & { xPx: number; yPx: number; vxPx: number; vyPx: number };

const MovingBubbles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const bubblesRef = useRef<Bubble[]>([]);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const tapRef = useRef<{
    x: number;
    y: number;
    moved: boolean;
    ignore: boolean;
  } | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const lastRenderRef = useRef<number>(0);
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

    beatTimeoutRef.current = setTimeout(() => {
      setSelectedBubbleId(null);
      selectedBubbleRef.current = null;
    }, 1200);
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointerRef.current = { x: e.clientX, y: e.clientY, active: true };

      const t = tapRef.current;
      if (t && !t.moved) {
        const dx = e.clientX - t.x;
        const dy = e.clientY - t.y;
        if (dx * dx + dy * dy > 12 * 12) {
          t.moved = true;
        }
      }
    };

    const shouldIgnorePointerDown = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      const interactive = target.closest('a,button,input,textarea,select,label,[role="button"],[role="link"],summary');
      return Boolean(interactive);
    };

    const onDown = (e: PointerEvent) => {
      onMove(e);
      tapRef.current = {
        x: e.clientX,
        y: e.clientY,
        moved: false,
        ignore: shouldIgnorePointerDown(e.target),
      };
    };

    const burst = (x: number, y: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const width = rect.width || window.innerWidth;
      const height = rect.height || window.innerHeight;

      const radiusPx = 170;
      const strength = 2.6;

      bubblesRef.current = bubblesRef.current.map((b) => {
        const bx = (b.x / 100) * width;
        const by = (b.y / 100) * height;
        const dx = bx - x;
        const dy = by - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 0.001 && dist < radiusPx) {
          const t = 1 - dist / radiusPx;
          const force = t * t * strength;
          return {
            ...b,
            vx: b.vx + ((dx / dist) * force * 100) / width,
            vy: b.vy + ((dy / dist) * force * 100) / height,
          };
        }

        return b;
      });

      setBubbles([...bubblesRef.current]);
    };

    const onLeave = () => {
      pointerRef.current.active = false;
      tapRef.current = null;
    };

    const onUp = (e: PointerEvent) => {
      const t = tapRef.current;
      tapRef.current = null;

      if (t && !t.ignore && !t.moved) {
        burst(e.clientX, e.clientY);
      }

      onLeave();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    window.addEventListener('blur', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('blur', onLeave);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (beatTimeoutRef.current) clearTimeout(beatTimeoutRef.current);
    };
  }, []);

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
    const step = (time: number) => {
      if (!containerRef.current || bubblesRef.current.length === 0) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width || window.innerWidth;
      const height = rect.height || window.innerHeight;

      const prev = lastTimeRef.current || time;
      const dt = Math.min((time - prev) / 16.67, 2);
      lastTimeRef.current = time;

      const friction = 0.985;
      const bounce = 0.98;
      const maxSpeed = 4.5;

      const pointer = pointerRef.current;
      const influenceRadius = 140;
      const repelStrength = 0.9;

      const px: BubbleSim[] = bubblesRef.current.map((b) => {
        const xPx = (b.x / 100) * width;
        const yPx = (b.y / 100) * height;
        const vxPx = (b.vx / 100) * width;
        const vyPx = (b.vy / 100) * height;
        return { ...b, xPx, yPx, vxPx, vyPx };
      });

      for (const b of px) {
        b.vxPx *= Math.pow(friction, dt);
        b.vyPx *= Math.pow(friction, dt);

        if (pointer.active) {
          const dx = b.xPx - pointer.x;
          const dy = b.yPx - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 0.001 && dist < influenceRadius) {
            const t = 1 - dist / influenceRadius;
            const force = t * t * repelStrength;
            b.vxPx += (dx / dist) * force * dt;
            b.vyPx += (dy / dist) * force * dt;
          }
        }

        const sp = Math.sqrt(b.vxPx * b.vxPx + b.vyPx * b.vyPx);
        if (sp > maxSpeed) {
          b.vxPx = (b.vxPx / sp) * maxSpeed;
          b.vyPx = (b.vyPx / sp) * maxSpeed;
        }

        b.xPx += b.vxPx * dt;
        b.yPx += b.vyPx * dt;

        const r = b.size / 2;
        if (b.xPx - r < 0) {
          b.xPx = r;
          b.vxPx = Math.abs(b.vxPx) * bounce;
        } else if (b.xPx + r > width) {
          b.xPx = width - r;
          b.vxPx = -Math.abs(b.vxPx) * bounce;
        }

        if (b.yPx - r < 0) {
          b.yPx = r;
          b.vyPx = Math.abs(b.vyPx) * bounce;
        } else if (b.yPx + r > height) {
          b.yPx = height - r;
          b.vyPx = -Math.abs(b.vyPx) * bounce;
        }
      }

      for (let i = 0; i < px.length; i++) {
        for (let j = i + 1; j < px.length; j++) {
          const a = px[i];
          const b = px[j];
          const dx = b.xPx - a.xPx;
          const dy = b.yPx - a.yPx;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = a.size / 2 + b.size / 2;

          if (dist > 0.001 && dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = (minDist - dist) * 0.5;

            a.xPx -= nx * overlap;
            a.yPx -= ny * overlap;
            b.xPx += nx * overlap;
            b.yPx += ny * overlap;

            const relVx = a.vxPx - b.vxPx;
            const relVy = a.vyPx - b.vyPx;
            const rel = relVx * nx + relVy * ny;

            if (rel > 0) continue;

            a.vxPx -= rel * nx;
            a.vyPx -= rel * ny;
            b.vxPx += rel * nx;
            b.vyPx += rel * ny;
          }
        }
      }

      bubblesRef.current = px.map((b) => {
        const { xPx, yPx, vxPx, vyPx, ...rest } = b;
        return {
          ...rest,
          x: (xPx / width) * 100,
          y: (yPx / height) * 100,
          vx: (vxPx / width) * 100,
          vy: (vyPx / height) * 100,
        };
      });

      if (!lastRenderRef.current || time - lastRenderRef.current > 33) {
        lastRenderRef.current = time;
        setBubbles([...bubblesRef.current]);
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
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
            touchAction: 'pan-y',
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
