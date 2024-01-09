import React from 'react';
import { animated, useSprings } from 'react-spring';
import style from "../Circles/Circles.module.css";
export function Circles () {
  const numCircles = 10; // Número de círculos que deseas generar

  const circleAnimations = useSprings(numCircles, Array.from({ length: numCircles }, () => ({
    from: { left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, opacity: 0 },
    to: async (next) => {
      while (true) {
        await next({ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, opacity: 1 });
        await next({ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, opacity: 0 });
      }
    },
    config: { duration: 2000 },
    reset: true,
    reverse: true,
    loop: true,
  })));

  return (
    <div className={style.container}>
      {circleAnimations.map((props, index) => (
        <animated.div
          key={index}
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'orange',
            ...props,
          }}
        />
      ))}
    </div>
  );
};


export default Circles;
