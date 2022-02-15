import React from 'react';
import WorkDetail from './workDetail';

export default function ListWork({ exercises, onChangeWork, onDeleteWork }) {
  return (
    <ul>
      {exercises.map((work) => (
        <li key={work.id}>
          <WorkDetail work={work} onChangeWork={onChangeWork} onDelete={onDeleteWork} />
        </li>
      ))}
    </ul>
  );
}
