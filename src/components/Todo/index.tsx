import { onTodoChange, onTodoDelete } from 'features/todo/todoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './styled';

const Todo: React.FC<any> = ({ id, isDone, value }) => {
  const dispatch = useDispatch();

  const onChange = (e: any) => {
    dispatch(onTodoChange({ id, value: e.target.value }));
  };
  const onDelete = () => {
    dispatch(onTodoDelete({ id }));
  };

  return (
    <Styled.Root>
      <Styled.Editor type="text" value={value} onChange={onChange} />
      <Styled.Button onClick={onDelete}>-</Styled.Button>
    </Styled.Root>
  );
};

export default Todo;
