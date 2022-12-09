import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hook/hooks";
import { newTodo } from "../redux/slices/todoSlice";
import Button from "./Button";
import { StyledContainer } from "./Header";
import Input from "./Input";

const StyledPanel = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
  div {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    width: 100%;
    label {
      font-size: 28px;
      width: 100%;
    }
  }
`;

const ControllPanel = () => {
  const dispatch = useAppDispatch();

  const [taskInput, setTaskInput] = useState<string>("");
  const clickHandler = () => {
    dispatch(newTodo({ id: Date.now(), title: taskInput, isCompleted: false }));
    setTaskInput("");
  };
  return (
    <StyledPanel>
      <div>
        <label>
          Enter a task name:
          <Input value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
        </label>
        <Button onClick={clickHandler}>New todo</Button>
      </div>
    </StyledPanel>
  );
};

export default ControllPanel;
