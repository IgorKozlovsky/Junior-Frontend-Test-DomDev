import styled from "styled-components";
import { StyledContainer } from "./Header";
import TodoItem from "./TodoItem";

const StyledList = styled(StyledContainer)`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px;
`;

const TodoList = () => {
  return (
    <StyledList>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </StyledList>
  );
};

export default TodoList;
