import React from 'react';
import { initialData } from '../data/initialData';
import AddWork from '../views/AddWork';
import ListWork from '../views/ListWork';

const workOut = initialData;
console.log('workOut', workOut);

export default function Workout() {
  return (
    <>
      <h1> Add Your exercise!</h1>
      {/* <AddWork /> */}
      <ListWork exercises={workOut} />
    </>
  );
}
