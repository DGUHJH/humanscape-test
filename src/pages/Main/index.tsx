import Todo from 'components/Todo';
import { ReducerType } from 'features';
import {
  onTodoCreate,
  onTodoListCreate,
  TodoInitialStateType,
} from 'features/todo/todoSlice';
import React, { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';

const Main = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const todo = useSelector<ReducerType, TodoInitialStateType>(
    (state) => state.todo
  );
  const onAddButtonClick = () => dispatch(onTodoCreate());

  useEffect(() => {
    console.log(cookies.get('todo'));
    if (cookies.get('todo')) {
      dispatch(onTodoListCreate({ todo: cookies.get('todo') }));
    }
  }, []);

  useEffect(() => {
    cookies.set('todo', JSON.stringify(todo.todoListData));
  }, [JSON.stringify(todo.todoListData)]);

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
