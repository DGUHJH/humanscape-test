<<<<<<< HEAD
import Todo from 'components/Todo';
import { ReducerType } from 'features';
import { TodoInitialStateType } from 'features/todo/todoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';

const Main = () => {
  const dispatch = useDispatch();
  const todo = useSelector<ReducerType, TodoInitialStateType>(
    (state) => state.todo
  );

  return (
    <Styled.Root>
      <Styled.TitleTypo>투두리스트</Styled.TitleTypo>
      {todo.todoListData?.map((todoData, index: number) => (
        <Todo
          id={todoData.id}
          isDone={todoData.isDone}
          value={todoData.value}
          key={`todo_${index}`}
        />
      ))}
    </Styled.Root>
  );
=======
import React from 'react';
import * as Styled from './styled';

const Main = () => {
  return <Styled.Root></Styled.Root>;
>>>>>>> eaef5761303bd5542937c4a497e7e448bafd4895
};

export default Main;
