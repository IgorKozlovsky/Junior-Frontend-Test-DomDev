import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 150px;
  padding: 10px 8px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  font-size: 24px;
  color: ${(props) => props.theme.colors.secondary};
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledErrorButton = styled(StyledButton)`
  border-color: ${(props) => props.theme.colors.error};
  color: ${(props) => props.theme.colors.error};
  &:hover {
    background-color: ${(props) => props.theme.colors.error};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledSuccessButton = styled(StyledButton)`
  border-color: ${(props) => props.theme.colors.success};
  color: ${(props) => props.theme.colors.success};
  &:hover {
    background-color: ${(props) => props.theme.colors.success};
    color: ${(props) => props.theme.colors.primary};
  }
`;
interface ButtonProps {
  children: React.ReactNode;
  datatype?: "error" | "success";
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  if (props.datatype === "error") return <StyledErrorButton {...props} />;
  if (props.datatype === "success") return <StyledSuccessButton {...props} />;
  return <StyledButton {...props} />;
};

export default Button;

