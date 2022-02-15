import React from 'react';

export default function WorkDetail({ work, onChangeWork, onDeleteWork }) {
  return (
    <div>
      <h3>{work.text}</h3>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
