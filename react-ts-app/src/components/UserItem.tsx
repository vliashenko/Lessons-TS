import {FC} from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user: {id, name, address} }) => {
    return (
        <div className="user-item" key={id}>
            {id}. {name} проживає в місті {address.city} по вулиці {address.street}
        </div>
    );
};

export default UserItem;