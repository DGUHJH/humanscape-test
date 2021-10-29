import Todo from 'components/Todo';
import { ReducerType } from 'features';
import { onTodoCreate, TodoInitialStateType } from 'features/todo/todoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';

const Main = () => {
  const dispatch = useDispatch();
  const todo = useSelector<ReducerType, TodoInitialStateType>(
    (state) => state.todo
  );
  const onAddButtonClick = () => dispatch(onTodoCreate());

  return (
    <Styled.Root>
      <Styled.TitleTypo>투두리스트</Styled.TitleTypo>
      <Styled.DescriptionTypo>
        클릭 : 수정, input 엔터 : 수정 완료, - 버튼 : delete, 버튼 : toggle
      </Styled.DescriptionTypo>
      {todo.todoListData?.map((todoData, index: number) => (
        <Todo
          id={todoData.id}
          isDone={todoData.isDone}
          value={todoData.value}
          key={`todo_${index}`}
        />
      ))}
      <Styled.AddButton onClick={onAddButtonClick}>추가</Styled.AddButton>
    </Styled.Root>
  );
};

export default Main;
