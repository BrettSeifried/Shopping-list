import React, { useEffect, useState } from 'react';
import './timer.css';

export default function Timer({ seconds = 0 }) {
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(false);
  const [[s], setTime] = useState([seconds]);

  const tick = () => {
    if (paused || over) return;
    if (s === 0) setOver(true);
    else {
      setTime([s - 1]);
    }
  };

  const reset = () => {
    setTime([parseInt(seconds)]);
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="timer">
      <h1>Remove after completed</h1>
      <h1>{`${s.toString().padStart(2, '0')}`}</h1>
      <div>{over ? "Time's up!" : ''}</div>
      <button onClick={() => setPaused(!paused)}>{paused ? 'Start' : 'Pause'}</button>
      <button onClick={() => reset()}>Restart</button>
    </div>
  );
}
