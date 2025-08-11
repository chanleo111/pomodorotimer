import Box from '@mui/material/Box';
import { useState,useEffect } from 'react';
const Timer = () => {
    const [startTimer, setStartTimer] = useState(false);
    const TIME_SECONDS = 25*60;
    const [time, setTime] = useState(TIME_SECONDS);

    useEffect(() => {
    if (startTimer && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime)=> prevTime -1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTimer, time]);
  
    return (
      <div>
        <h1>{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</h1>
        <button onClick={() => setStartTimer(!startTimer)}>
          {startTimer ? '暫停' : '開始'}
        </button>
    </div>
            );
        }
export default Timer;