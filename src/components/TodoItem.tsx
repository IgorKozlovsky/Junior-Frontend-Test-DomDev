import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { ITodo } from "../types/types";
import { useState } from "react";

const StyledItem = styled.li`
  display: flex;
  width: 100%;
  font-size: 28px;
  padding: 10px 0px;
  gap: 10px;
  border-bottom: 1px solid $secondary-color;
  p {
    width: 100%;
  }
  input[type="checkbox"] {
    width: 35px;
    height: auto;
    margin-right: 10px;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  button {
    width: 80px;
  }
`;
interface TodoItemProps {
  todo: ITodo;
  onChecked: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string) => void;
}

const TodoItem = ({ todo, onDelete, onChecked, onUpdate }: TodoItemProps) => {
  const [value, setValue] = useState<string>(todo.title);
  const [isNowUpdating, setIsNowUpdating] = useState<boolean>(false);

  return (
    <StyledItem>
      <Input type="checkbox" checked={todo.isCompleted} onChange={() => onChecked(todo.id)} />
      {isNowUpdating ? (
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      ) : (
        <p style={{ textDecoration: `${todo.isCompleted ? "line-through" : "none"}` }}>{value}</p>
      )}
      <StyledButtonWrapper>
        <Button
          datatype="success"
          onClick={() => {
            if (isNowUpdating) onUpdate(todo.id, value);
            setIsNowUpdating(!isNowUpdating);
          }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
          {isNowUpdating ? "Save" : "Edit"}
        </Button>
        <Button datatype="error" onClick={() => onDelete(todo.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </StyledButtonWrapper>
    </StyledItem>
  );
};

export default TodoItem;
