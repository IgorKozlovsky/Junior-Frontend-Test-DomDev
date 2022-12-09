import styled from "styled-components";

const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  width: 100%;
  font-size: 24px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary};
  padding: 10px 8px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  &:focus-visible {
    outline-offset: unset;
    outline: unset;
  }
`;

interface InputProps {
  type?: string;
}

const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
