import styled from "styled-components";
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
  return (
    <StyledPanel>
      <div>
        <label>
          Enter a task name:
          <Input />
        </label>
        <Button>New todo</Button>
      </div>
    </StyledPanel>
  );
};

export default ControllPanel;
