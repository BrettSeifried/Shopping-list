import React from 'react';

export default function WorkDetail({ work, onChangeWork, onDelete }) {
  return (
    <div>
      <h3>{work.text}</h3>
      {/* <button>Edit</button>
      <button>Delete</button> */}
      <button type="button" onClick={() => onDelete(work.id)}>
        Remove
      </button>
    </div>
  );
}
