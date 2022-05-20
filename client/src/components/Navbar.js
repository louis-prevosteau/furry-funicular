import React, { useContext } from 'react';
import '../styles/components/navbar.css';
import { useUser } from '../api/user.api';
import { NavLink } from 'react-router-dom';
import { UidContext } from './AppContext';
import Logout from './Profile/Logout';

const Navbar = () => {
    const uid = useContext(UidContext);
    const { getUser } = useUser();

    return (
        <header>
            <nav>
                <div className="nav-container">
                    <div className="logo">
                        <NavLink exact to="/">
                            <div className="logo">
                                <img src="./img/icon.png" alt="icon" />
                                <h3>Furry Funicular</h3>
                            </div>
                        </NavLink>
                    </div>
                    {uid ? (
                        <ul>
                            <li></li>
                            <li className="welcome">
                                <NavLink exact to="/profil">
                                    <h5>Bienvenue { getUser }</h5>
                                    <img src="./img/icons/user.svg" alt="user" />
                                </NavLink>
                            </li>
                            <Logout />
                        </ul>
                    ) : (
                        <ul>
                            <li></li>
                            <li>
                                <NavLink exact to="/login">
                                    <img src="./img/icons/login.svg" alt="login"/>
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
