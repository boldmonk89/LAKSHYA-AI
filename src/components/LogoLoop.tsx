import { memo, ReactNode } from 'react';
import './LogoLoop.css';

interface LogoItem {
  node?: ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; // Duration in seconds
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  className?: string;
}

export const LogoLoop = memo(({
  logos,
  speed = 30,
  direction = 'left',
  logoHeight = 40,
  gap = 40,
  className = ""
}: LogoLoopProps) => {
  // Duplicate logos for seamless loop
  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <div 
      className={`logo-loop-container ${className}`}
      style={{ 
        '--logo-height': `${logoHeight}px`,
        '--logo-gap': `${gap}px`,
        '--animation-speed': `${speed}s`,
        '--direction': direction === 'left' ? 'normal' : 'reverse'
      } as any}
    >
      <div className="logo-loop-track">
        {displayLogos.map((logo, idx) => (
          <div key={idx} className="logo-item">
            {logo.src ? (
              <img src={logo.src} alt={logo.alt || logo.title} title={logo.title} />
            ) : (
              <div className="logo-node">{logo.node}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
