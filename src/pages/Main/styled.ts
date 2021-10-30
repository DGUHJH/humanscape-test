import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const TitleTypo = styled.h1``;

export const TagTitleTypo = styled.h2``;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

type TagWrapperProps = {
  isSelected: boolean;
};

export const TagWrapper = styled.div<TagWrapperProps>`
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  background: ${(props) => (props.isSelected ? '#3ad2c4' : 'white')};
  padding: 8px;
  border: 1px #3ad2c4 solid;
  border-radius: 8px;
  margin: 5px;
  cursor: pointer;
`;

export const DescriptionTypo = styled.h4``;

export const AddButton = styled.button`
  width: 150px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchEditor = styled.input`
  width: 150px;
`;

export const SearchEditorButton = styled.button``;
