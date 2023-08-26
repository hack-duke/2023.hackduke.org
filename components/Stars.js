import React, { useEffect, useState } from "react";

const Stars = ({ children }) => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const createCircles = () => {
      const newCircles = [];
      const numCircles = 150;
      const maxCircleSize = 6;
      const minCircleSize = 2;
      const minDistance = 2 * maxCircleSize;
      const existingCoordinates = new Set();
      for (let i = 0; i < numCircles; i++) {
        let x, y, distance;
        do {
          x = Math.floor(Math.random() * window.innerWidth);
          y = Math.floor(Math.random() * window.innerHeight);
          distance = Infinity;
          for (const [existingX, existingY] of existingCoordinates) {
            const dx = x - existingX;
            const dy = y - existingY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            distance = Math.min(distance, dist);
          }
        } while (distance < minDistance);
        const circleSize = Math.floor(Math.random() * maxCircleSize) + minCircleSize;
        const animationDelay = Math.random() * 5;
        const animationDuration = Math.floor(Math.random() * 5) + 5;
        newCircles.push({ circleSize, x, y, animationDelay, animationDuration });
        existingCoordinates.add([x, y]);
      }
      setCircles(newCircles);
    };
    createCircles();
    window.addEventListener("resize", createCircles);
    return () => window.removeEventListener("resize", createCircles);
  }, []);

  return (
    <div style={{ position: "relative"}}>
      {children}
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "white",
            width: circle.circleSize,
            height: circle.circleSize,
            top: circle.y,
            left: circle.x,
            opacity: 1,
            animationName: "circle-animation",
            animationDelay: `${circle.animationDelay}s`,
            animationDuration: `${circle.animationDuration}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-out",
            zIndex: 2
          }}
        />
      ))}
      <style>{`
        @keyframes circle-animation {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.1;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Stars;
