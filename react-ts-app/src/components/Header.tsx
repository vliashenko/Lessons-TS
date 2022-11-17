import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
    return (
        <header className='header'>
            <div className="left">
            <NavLink to={"/"} className="rightItem">
                    ReactTS App
                </NavLink>
            </div>
            <div className="right">
                <NavLink to={"/user"} className="rightItem">
                    Users
                </NavLink>

                <NavLink to={"/todo"} className="rightItem">
                    Todos
                </NavLink>
            </div>
        </header>
    );
};

export default Header;