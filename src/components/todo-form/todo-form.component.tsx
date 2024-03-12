import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import { addTodo } from '../../features/todo/todo.slice';
import { useAppDispatch } from '../../store/hooks';

import styles from './todo-form.module.css';

const TodoForm: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<Element>) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodo(value));
      setValue('');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={styles.input}
        placeholder="Add a task"
      />
    </form>
  )
};

export default TodoForm;
