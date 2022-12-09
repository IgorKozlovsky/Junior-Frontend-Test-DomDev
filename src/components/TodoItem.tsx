import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

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

const TodoItem = () => {
  return (
    <StyledItem>
      <Input type="checkbox" />
      <Input />
      <StyledButtonWrapper>
        <Button datatype="success">
          <FontAwesomeIcon icon={faPenToSquare} />
          Edit
        </Button>
        <Button datatype="error">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </StyledButtonWrapper>
    </StyledItem>
  );
};

export default TodoItem;
