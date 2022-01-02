import React from 'react';
import {TaskCard} from './TaskCard';
import {AddTaskCardButton} from '../task/button/AddTaskCardButton';

export const TaskCards = () => {
  return (
    <div>
      <TaskCard />
      <AddTaskCardButton />
    </div>
  )
}
