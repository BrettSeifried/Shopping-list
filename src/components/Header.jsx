import React from 'react';
import { useWorkOuts } from '../WorkContext/workContext';

export default function Header() {
  const { work } = useWorkOuts();

  return <div>{` Exercises in Workout: ${work.length}`}</div>;
}
