import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import HomePage from "./components/HomePage";
import NotFound from "./components/404";
import Layout from "./components/Layout";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<HomePage title="React App using TypeScript 👨🏻‍💻" />}
          />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/:id" element={<UserItemPage/>}/>
          <Route path="/todo" element={<TodosPage />} />
          <Route path="/todo/:id" element={<TodoItemPage/>}/>
          <Route
            path="*"
            element={<NotFound title="404 Something is going wrong..." />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
