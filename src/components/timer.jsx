import React, { useEffect, useState } from 'react';

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
    <div>
      <p>{`${s.toString().padStart(2, '0')}`}</p>
      <div>{over ? "Time's up!" : ''}</div>
      <button onClick={() => setPaused(!paused)}>{paused ? 'Resume' : 'Pause'}</button>
      <button onClick={() => reset()}>Restart</button>
    </div>
  );
}
