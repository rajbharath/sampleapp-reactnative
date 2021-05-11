import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { login } from './actions';



function LoginScreen(props) {

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
                title="Login"
                onPress={() =>
                    props.onLogin({ username: "Murugan", password: "asdasdadasdasd" })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (credentials) => dispatch(login(credentials)),
    }
}

export default connect(null, mapDispatchToProps)(LoginScreen)