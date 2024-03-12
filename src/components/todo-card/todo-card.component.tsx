import React, { FC } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { deleteTodo } from '../../features/todo/todo.slice';
import ActionsBar from '../actions-bar/actions-bar.component';

const TodoCard: FC<Props> = ({ id, text }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const actions = [
    { name: 'Delete', icon: 'x', onClick: handleDelete }
  ];

  return (
    <div>
      <div style={{ borderBottom: '1px solid #f4f4f4'}}>
        {text}
        <ActionsBar actions={actions} />
      </div>
    </div>
  );
};

type Props = {
  id: number;
  text: string;
}

export default TodoCard;
