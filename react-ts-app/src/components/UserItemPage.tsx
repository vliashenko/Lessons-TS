import React, { FC, useState, useEffect, useCallback } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface UserItemPageProps {
  [key: string]: string;
  id: string;
}

const UserItemPage: FC = () => {
    const params = useParams<UserItemPageProps>();
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser | null>(null);

  const getUser = useCallback(() => {
    async function fetchUser() {
        try {
          const response = await axios.get<IUser>(
            "https://jsonplaceholder.typicode.com/users/" + params.id
          );
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      }
      return fetchUser()
  }, [params.id])

  useEffect(() => {
    getUser();
  }, [getUser]);



  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/user")
  }

  return (
    <div>
      <button onClick={onClickHandler}>Back</button>
      <h1>{user?.name?.toUpperCase()} user page </h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city}. {user?.address.street}. {user?.address.zipcode}.
      </div>
    </div>
  );
};

export default UserItemPage;
