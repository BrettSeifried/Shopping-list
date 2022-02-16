import React, { useState } from 'react';
import './workDetail.css';

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

        <button className="editButton" type="button" onClick={() => setEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    workContent = (
      <>
        <div>{work.text}</div>
        <button
          data-testid={`edit-${work.text}`}
          className="editButton"
          type="button"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <div className="exercise">
      {workContent}
      <button
        data-testid={`${work.id}`}
        className="submitButton"
        type="button"
        onClick={() => onDelete(work.id)}
      >
        Remove
      </button>
    </div>
  );
}
