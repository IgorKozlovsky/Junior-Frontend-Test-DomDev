import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hook/hooks";
import { deleteTodo, setCompletedTodo, updateTodo } from "../redux/slices/todoSlice";
import { StyledContainer } from "./Header";
import TodoItem from "./TodoItem";

const StyledList = styled(StyledContainer)`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px;
`;

const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(({ todoState }) => todoState.todos);

  const onDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };
  const onChecked = (id: number) => {
    dispatch(setCompletedTodo(id));
  };
  const onUpdate = (id: number, title: string) => {
    dispatch(updateTodo({ id, title }));
  };
  return (
    <StyledList>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onChecked={onChecked} onUpdate={onUpdate} />
        ))}
      </ul>
    </StyledList>
  );
};

export default TodoList;
