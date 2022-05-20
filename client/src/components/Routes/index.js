import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import Home from '../../pages/Home';
// import Profil from '../../pages/Profil';
// import Post from '../../pages/Post';
import Navbar from '../Navbar';

const index = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            {/* <Routes> */}
                {/* <Route path="/" element={ <Home />} /> */}
                {/* <Route path="/profil" element={ <Profil />} /> */}
                {/* <Route path="/post" element={ <Post />} /> */}
            {/* </Routes> */}
        </div>
    );
};

export default index;
