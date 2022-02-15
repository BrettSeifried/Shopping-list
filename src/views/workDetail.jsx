import React, { useState } from 'react';

export default function WorkDetail({ work, onChangeWork, onDelete }) {
  const [editing, setEditing] = useState(false);

  let workContent;
  if (editing) {
    workContent = (
      <>
        <input
          value={work.text}
          onChange={(e) => {
            onChangeWork({
              ...work,
              text: e.target.value,
            });
          }}
        />

        <button type="button" onClick={() => setEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    workContent = (
      <>
        <h3>{work.text}</h3>
        <button type="button" onClick={() => setEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <div>
      <p>{workContent}</p>
      <button type="button" onClick={() => onDelete(work.id)}>
        Remove
      </button>
    </div>
  );
}
