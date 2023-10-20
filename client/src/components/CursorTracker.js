import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CursorTracker = () => {
  const [cursorActiveTime, setCursorActiveTime] = useState(0);

  useEffect(() => {
    let lastActivityTime = Date.now();
    
    const handleMouseMove = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastActivityTime) / 1000;
      setCursorActiveTime((prevTime) => prevTime + deltaTime);
      lastActivityTime = currentTime;
    };

    window.addEventListener('mousemove', handleMouseMove);

    
    const sendCursorActivityToServer = () => {
      axios.post('https://localhost:5000/time', { time: cursorActiveTime });
    };

    const activityInterval = setInterval(sendCursorActivityToServer, 60000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(activityInterval);
    };
  }, [cursorActiveTime]);

  return (
    <div>
      <p>Time with cursor active: {Math.floor(cursorActiveTime)} seconds</p>
    </div>
  );
};

export default CursorTracker;
