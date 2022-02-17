import React from 'react';
import { useWorkOuts } from '../WorkContext/workContext';

export default function Header() {
  const { work, handleClear } = useWorkOuts();

  return (
    <div>
      <h2>{` Exercises in Workout: ${work.length}`}</h2>
      <button type="button" onClick={() => handleClear({ type: 'clear' })}>
        Refresh
      </button>
    </div>
  );
}
