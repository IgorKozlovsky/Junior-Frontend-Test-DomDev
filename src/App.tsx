import { useEffect } from "react";
import styled from "styled-components";
import ControllPanel from "./components/ControllPanel";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useAppDispatch } from "./hook/hooks";
import { initTodo } from "./redux/slices/todoSlice";

const AppWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initTodo(JSON.parse(localStorage.getItem("todos") || "{}")));
  }, []);
  return (
    <AppWrapper>
      <Header />
      <ControllPanel />
      <TodoList />
    </AppWrapper>
  );
}

export default App;
