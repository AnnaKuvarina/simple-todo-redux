import React, { FC } from 'react';

import TodoForm from './components/todo-form/todo-form.component';

import styles from './app.module.css';
import TodoList from './components/todo-list/todo-list.component';

const App: FC = () => (
  <section className={styles.app}>
    <TodoForm />
    <TodoList />
  </section>
);

export default App;
