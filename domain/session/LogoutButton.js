import 'react-native-gesture-handler';
import React from 'react';
import {connect, useSelector } from 'react-redux';
import { Button } from 'react-native';
import { logout } from './actions';

function LogoutButton(props) {
    const session = useSelector((state) => state.session);
    return (
        <Button title="Logout" onPress={() => {props.doLogout()}} />
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => dispatch(logout()),
    }
}

export default connect(null, mapDispatchToProps)(LogoutButton)