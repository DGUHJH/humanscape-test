import { onTodoTagChange, onTodoTagDelete } from 'features/todo/todoSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './styled';

type Props = {
  id: string;
  tagId: string;
  value: string;
};

const Tag: React.FC<Props> = ({ id, tagId, value }) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onChange = (e: any) =>
    dispatch(onTodoTagChange({ id, tagId, value: e.target.value }));
  const onDelete = () => dispatch(onTodoTagDelete({ id, tagId }));
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
        <Styled.ValueTypo onClick={toggleIsFocus}>#{value}</Styled.ValueTypo>
      )}
      <Styled.Button onClick={onDelete}>-</Styled.Button>
    </Styled.Root>
  );
};

export default Tag;
