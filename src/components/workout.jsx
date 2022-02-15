import React, { useReducer } from 'react';
import { initialData } from '../data/initialData';
import AddWork from '../views/AddWork';
import ListWork from '../views/ListWork';

const nextId = 3;
const workOut = initialData;

function workReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
        },
      ];
    }
    case 'edit': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'delete': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`you confused the Matrix with ${action.id}`);
    }
  }
}

export default function Workout() {
  const [work, dispatch] = useReducer(workReducer, workOut);

  const handleAddWork = (text) => {
    dispatch({
      type: 'added',
      id: nextId + 1,
      text,
    });
  };

  const handleChangeWork = (task) => {
    dispatch({
      type: 'edit',
      task,
    });
  };

  const handleDeleteWork = (taskId) => {
    dispatch({
      type: 'delete',
      id: taskId,
    });
  };

  return (
    <>
      <h1> Add Your exercise!</h1>
      <AddWork onAddWork={handleAddWork} />
      <ListWork exercises={work} onChangeWork={handleChangeWork} onDeleteWork={handleDeleteWork} />
    </>
  );
}
