import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserItem from "./UserItem";
import List from "./List";
import { IUser } from "../types/types";
import axios from "axios";

const UserPage: FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem onClick={(user: IUser) => navigate(`/user/${user.id}`)} user={user} key={user.id} />}
      />
    </>
  );
};

export default UserPage;
