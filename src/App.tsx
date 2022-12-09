import styled from "styled-components";
import ControllPanel from "./components/ControllPanel";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const AppWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <ControllPanel />
      <TodoList />
    </AppWrapper>
  );
}

export default App;
