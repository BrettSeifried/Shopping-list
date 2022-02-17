import React from 'react';
import AddWork from '../views/AddWork';
import ListWork from '../views/ListWork';
import './workout.css';
import { useWorkOuts } from '../WorkContext/workContext';

export default function Workout() {
  const { work, handleAddWork, handleChangeWork, handleDeleteWork } = useWorkOuts();

  return (
    <>
      <h1> Add Your exercise!</h1>
      <AddWork onAddWork={handleAddWork} />
      <ListWork exercises={work} onChangeWork={handleChangeWork} onDeleteWork={handleDeleteWork} />
    </>
  );
}
