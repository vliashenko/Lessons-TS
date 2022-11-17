import {FC} from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
    return (
        <div onClick={() => onClick(user)} className="user-item" key={user.id}>
            {user.id}. {user.name} проживає в місті {user.address.city} по вулиці {user.address.street}
        </div>
    );
};

export default UserItem;