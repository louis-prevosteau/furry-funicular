import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../api/auth.api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth()

    const handleLogin = () => {
        login(email, password);
        navigate('/post');
    };

    return (
        <Fragment>
            <form onSubmit={handleLogin}>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </Fragment>
    );
};

export default Login;