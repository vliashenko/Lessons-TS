import {FC, useState, useEffect} from "react";
import Card, {CardVariant} from "./components/Card";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExamples from "./components/EventsExamples";

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(response.data)
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
      setTodos(response.data)
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="root">
      <Card onClick={(num: number) => console.log(num)} width="200px" height="200px" variant={CardVariant.outlined}>
        <button className="card-button">Button</button>
      </Card>

      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>

      <EventsExamples/>
    </div>
  );
};

export default App;
