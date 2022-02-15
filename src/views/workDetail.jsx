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
        <h3>{work.text}</h3>
        <button className="editButton" type="button" onClick={() => setEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <div className="exercise">
      <p className="workContent">{workContent}</p>
      <button className="submitButton" type="button" onClick={() => onDelete(work.id)}>
        Remove
      </button>
    </div>
  );
}
