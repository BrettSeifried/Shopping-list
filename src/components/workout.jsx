import React from 'react';
import { initialData } from '../data/initialData';

export default function Workout() {
  const exerciseInput = (
    <div>
      <div>
        <h1>Add to your workout list</h1>
      </div>
      <div>
        <input type="text" value placeholder="Add exercise here" />
      </div>
      <button type="submit">Submit</button>
    </div>
  );

  return (
    <div>
      <div>{exerciseInput}</div>
      <div>{initialData}</div>
    </div>
  );
}
