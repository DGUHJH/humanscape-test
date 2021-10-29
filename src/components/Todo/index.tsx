import {
  onTodoChange,
  onTodoDelete,
  onTodoToggle,
} from 'features/todo/todoSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './styled';

const Todo: React.FC<any> = ({ id, isDone, value }) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const dispatch = useDispatch();

  const onChange = (e: any) =>
    dispatch(onTodoChange({ id, value: e.target.value }));
  const onDelete = () => dispatch(onTodoDelete({ id }));
  const onToggle = () => dispatch(onTodoToggle({ id }));
  const toggleIsFocus = () => setIsFocus((prev) => !prev);
  const onEnterPress = (e: any) => {
    if (e.key === 'Enter') {
      toggleIsFocus();
    }
  };

  return (
    <Styled.Root>
      {isFocus ? (
        <Styled.Editor
          onKeyPress={onEnterPress}
          type="text"
          value={value}
          onChange={onChange}
        />
      ) : (
        <Styled.ValueTypo isDone={isDone} onClick={toggleIsFocus}>
          {value}
        </Styled.ValueTypo>
      )}
      <Styled.Button onClick={onToggle}>&#10003;</Styled.Button>
      <Styled.Button onClick={onDelete}>-</Styled.Button>
    </Styled.Root>
  );
};

export default Todo;
