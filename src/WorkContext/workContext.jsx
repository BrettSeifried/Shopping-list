import React, { createContext, useContext, useReducer } from 'react';
import { initialData } from '../data/initialData';

const nextId = 3;
const workOut = initialData;
const refresh = [];

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
    case 'clear': {
      return refresh;
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

export const PlannerContext = createContext();

// export default function Workout() {
const PlannerProvider = ({ children }) => {
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

  const handleClear = (taskId) => {
    dispatch({
      type: 'clear',
      id: taskId,
    });
  };
  return (
    <PlannerContext.Provider
      value={{
        work,
        handleAddWork,
        handleChangeWork,
        handleDeleteWork,
        handleClear,
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};

const useWorkOuts = () => {
  const context = useContext(PlannerContext);

  if (context === undefined) {
    throw new Error('useEntries must be used within a PlannerProvider, dummy');
  }

  return context;
};

export { PlannerProvider, useWorkOuts };
