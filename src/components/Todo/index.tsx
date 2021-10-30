import Tag from 'components/Tag';
import {
  onTodoChange,
  onTodoDelete,
  onTodoTagCreate,
  onTodoToggle,
} from 'features/todo/todoSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './styled';

const Todo: React.FC<any> = ({ id, isDone, value, tags }) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const dispatch = useDispatch();

  const onChange = (e: any) =>
    dispatch(onTodoChange({ id, value: e.target.value }));
  const onDelete = () => dispatch(onTodoDelete({ id }));
  const onToggle = () => dispatch(onTodoToggle({ id }));
  const onTagCreate = () => dispatch(onTodoTagCreate({ id }));
  const toggleIsFocus = () => setIsFocus((prev) => !prev);
  const onEnterPress = (e: any) => {
    if (e.key === 'Enter') {
      toggleIsFocus();
    }
  };

  return (
    <Styled.Root>
      <Styled.TodoContainer>
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
        <Styled.Button onClick={onTagCreate}>+</Styled.Button>
        <Styled.Button onClick={onDelete}>-</Styled.Button>
      </Styled.TodoContainer>
      <Styled.TagsContainer>
        {tags?.map((tag: any) => (
          <Tag
            id={id}
            tagId={tag.id}
            value={tag.value}
            key={`todo_${id}_tag_${tag.id}`}
          />
        ))}
      </Styled.TagsContainer>
    </Styled.Root>
  );
};

export default Todo;
