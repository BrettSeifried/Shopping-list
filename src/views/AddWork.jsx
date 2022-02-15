import React from 'react';
import { useState } from 'react';

export default function AddWork({ onAddWork }) {
  const [newWork, setNewWork] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewWork('');
    onAddWork(newWork);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newWork}
        placeholder="Add exercise here"
        onChange={(e) => setNewWork(e.target.value)}
      />
      <button type="submit">Add to Workout</button>
    </form>
  );
}
