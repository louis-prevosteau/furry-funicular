import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../api/auth.api';
import '../../styles/components/login.css';

const Login = () => {
    const [pseudo, setPseudo] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login, register } = useAuth()

    useEffect(() => {
        const signInButton = document.getElementById('signIn');
        const signUpButton = document.getElementById('signUp');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            const container = document.getElementById('container');
            container.classList.remove("right-panel-active");
        });

        return () => {
            signInButton.removeEventListener('click', () => {})
            signUpButton.removeEventListener('click', () => {})
        }
    }, [])

    const handleLogin = () => {
        login(email, password);
        navigate('/post');
    };

    const handleRegister = () => {
        register(pseudo, fullname, email, password);
        navigate('/post');
    };

    return (
        <Fragment>
            <div className="signIn-signUp">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form onSubmit={handleRegister}>
                            <h1>Créer un compte</h1>
                            <br/>
                            <input type="text" placeholder="Pseudonyme" onChange={(e) => setPseudo(e.target.value)} />
                            <input type="text" placeholder="Prénom et nom" onChange={(e) => setFullname(e.target.value)}/>
                            <input type="email" placeholder="Adresse mail" onChange={(e) => setEmail(e.target.value)}/>
                            <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}/>
                            <button>S'inscrire</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={handleLogin}>
                            <h1>Se connecter</h1>
                            <br />
                            <input type="email" placeholder="Adresse mail" onChange={(e) => setEmail(e.target.value)}/>
                            <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
                            <a href="#">Mot de passe oublié ?</a>
                            <button>Se conncter</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>De retour ?</h1>
                                <p> Pour rester connecter avec la communauté</p>
                                <button className="ghost" id="signIn">Se conncter</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Salut !</h1>
                                <p>Bienvenue sur notre blog !</p>
                                <button className="ghost" id="signUp">S'inscrire</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

    // return (
    //     <Fragment>
    //         <form className="login-form" onSubmit={handleLogin}>
    //             <input className="login-email" type="email" onChange={(e) => setEmail(e.target.value)}/>
    //             <br />
    //             <input className="login-password" type="password" onChange={(e) => setPassword(e.target.value)}/>
    //             <br />
    //             <button className="login-submit" type="submit">Login</button>
    //         </form>
    //     </Fragment>
    // );
};

export default Login;