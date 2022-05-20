import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../api/auth.api';
import '../../styles/components/login.css';
import './script';

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
            <div className="signIn-signUp">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form>
                            <h1>Créer un compte</h1>
                            <br/>
                            <input type="text" placeholder="Pseudonyme" />
                            <input type="text" placeholder="Prénom et nom" />
                            <input type="email" placeholder="Adresse mail" />
                            <input type="password" placeholder="Mot de passe" />
                            <button>S'inscrire</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form>
                            <h1>Se connecter</h1>
                            <br />
                            <input type="email" placeholder="Adresse mail"/>
                            <input type="password" placeholder="Mot de passe" />
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