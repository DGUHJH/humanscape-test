import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodoContainer = styled.div`
  display: flex;
  align-items: center;
`;

type ValueTypoProps = {
  isDone: boolean;
};

export const ValueTypo = styled.span<ValueTypoProps>`
  width: 150px;
  height: 20px;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
  cursor: pointer;
`;

export const Editor = styled.input`
  width: 150px;
  height: 20px;
`;

export const Button = styled.button``;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
