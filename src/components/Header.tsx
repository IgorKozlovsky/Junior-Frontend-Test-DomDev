import styled from "styled-components";
import { useAppSelector } from "../hook/hooks";

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  border-bottom: 5px solid ${(props) => props.theme.colors.highlight};
`;
export { StyledContainer };
const StyledHeader = styled(StyledContainer)`
  text-align: center;
  padding: 2px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Header = () => {
  const count = useAppSelector(({ todoState }) => todoState.todos.length);
  return (
    <StyledHeader>
      <h1>Todos({count})</h1>
    </StyledHeader>
  );
};

export default Header;
