import { onTodoTagDelete } from 'features/todo/todoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './styled';

type Props = {
  id: string;
  tagId: string;
  value: string;
};

const Tag: React.FC<Props> = ({ id, tagId, value }) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(onTodoTagDelete({ id, tagId }));
  return (
    <Styled.Root>
      <Styled.ValueTypo>#{value}</Styled.ValueTypo>
      <Styled.Button onClick={onDelete}>-</Styled.Button>
    </Styled.Root>
  );
};

export default Tag;
