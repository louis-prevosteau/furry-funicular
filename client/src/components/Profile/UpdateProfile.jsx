import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../api/user.api';

const UpdateProfile = ({ user }) => {
    const [userData, setUserData] = useState({
        pseudo: user.pseudo,
        fullname: user.fullname,
        email: user.email,
        password: user.password
    });
    const navigate = useNavigate();
    const { updateUser } = useUser(); 

    const updateProfile = () => {
        updateUser(user._id, userData);
        navigate('/post')
    };
    return (
        <Fragment>
            <form onSubmit={updateProfile}></form>
        </Fragment>
    );
};

export default UpdateProfile;