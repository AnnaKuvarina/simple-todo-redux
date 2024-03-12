import React, { FC } from 'react';

import { useAppSelector } from '../../store/hooks';
import TodoCard from '../todo-card/todo-card.component';

const TodoList: FC = () => {
  const todoItems = useAppSelector((state) => state.todo.tasks);

  return (
    <div style={{ borderTop: '1px solid #ccc', padding: '12px', margin: '12px 0'}}>
      {todoItems.map(item => (
        <TodoCard id={item.id} text={item.text} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
