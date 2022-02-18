import React from 'react';
import { useWorkOuts } from '../WorkContext/workContext';
import './header.css';

export default function Header() {
  const { work, handleClear } = useWorkOuts();

  return (
    <div className="header">
      <h2>{` Exercises in Workout: ${work.length}`}</h2>
      <button
        className="header-button"
        type="button"
        onClick={() => handleClear({ type: 'clear' })}
      >
        Refresh
      </button>
    </div>
  );
}
