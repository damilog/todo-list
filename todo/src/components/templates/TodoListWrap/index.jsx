import React from "react";
import TodoListColumn from "../../organisms/TodoListColumn";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  border: 3px solid #000;
  width: max-content;
  margin: 0 0px 10px 5px;
  background:	#d9ffea;
  border-radius:10px;
`;

const TodoContent = ({ todos }) => {
  return (
    <Wrap>
      {todos.map(({ columnId, columnName, items }) => {
        return (<TodoListColumn key={columnId} {...{ columnId, columnName, items }} />);
      })}
    </Wrap>
  );
};

export default TodoContent;
