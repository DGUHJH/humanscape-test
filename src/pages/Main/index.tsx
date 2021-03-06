import Todo from 'components/Todo';
import { ReducerType } from 'features';
import {
  onTodoCreate,
  onTodoListCreate,
  TodoInitialStateType,
} from 'features/todo/todoSlice';
import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styled';

const Main = () => {
  const [editSearch, setEditSearch] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const todo = useSelector<ReducerType, TodoInitialStateType>(
    (state) => state.todo
  );
  const onAddButtonClick = () => dispatch(onTodoCreate());
  const onSearch = () => {
    setSearch(editSearch);
  };

  const onSearchEnterPress = (e: any) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  useEffect(() => {
    if (cookies.get('todo')) {
      dispatch(onTodoListCreate({ todo: cookies.get('todo') }));
    }
  }, []);

  useEffect(() => {
    cookies.set('todo', JSON.stringify(todo.todoListData));
    setSelectedTags([]);
  }, [JSON.stringify(todo.todoListData)]);

  const tagList = () => {
    let tagListData: string[] = [];

    todo.todoListData.forEach((todoData) =>
      todoData.tags.forEach((tag) => tagListData.push(tag.value))
    );

    return tagListData.filter(
      (tag, index) => tagListData.indexOf(tag) === index
    );
  };

  const onTagClick = (tag: string) => () => {
    if (selectedTags.indexOf(tag) !== -1) {
      setSelectedTags((prev) => prev.filter((tagValue) => tagValue !== tag));
    } else {
      setSelectedTags((prev) => [...prev, tag]);
    }
  };
  return (
    <Styled.Root>
      <Styled.TitleTypo>투두리스트</Styled.TitleTypo>
      <Styled.TagTitleTypo>태그</Styled.TagTitleTypo>
      <Styled.TagContainer>
        {tagList().map((tag, index: number) => (
          <Styled.TagWrapper
            isSelected={selectedTags.indexOf(tag) !== -1}
            onClick={onTagClick(tag)}
            key={`tag_wrapper_${index}`}
          >
            #{tag}
          </Styled.TagWrapper>
        ))}
      </Styled.TagContainer>
      <Styled.SearchContainer>
        <Styled.SearchEditor
          onKeyPress={onSearchEnterPress}
          type="text"
          value={editSearch}
          onChange={(e) => setEditSearch(e.target.value)}
        />
        <Styled.SearchEditorButton onClick={onSearch}>
          검색
        </Styled.SearchEditorButton>
      </Styled.SearchContainer>
      <Styled.DescriptionTypo>
        클릭 : 수정, input 엔터 : 수정 완료, + 버튼 : 태그 추가, - 버튼 :
        delete, &#10003; 버튼 : toggle
      </Styled.DescriptionTypo>
      {todo.todoListData?.map(
        (todoData, index: number) =>
          (selectedTags.length === 0 ||
            todoData.tags.filter(
              (tag) => selectedTags.indexOf(tag.value) !== -1
            ).length !== 0) &&
          (search === '' || todoData.value.indexOf(search) !== -1) && (
            <Todo
              id={todoData.id}
              isDone={todoData.isDone}
              value={todoData.value}
              tags={todoData.tags}
              key={`todo_${index}`}
            />
          )
      )}
      <Styled.AddButton onClick={onAddButtonClick}>todo 추가</Styled.AddButton>
    </Styled.Root>
  );
};

export default Main;
