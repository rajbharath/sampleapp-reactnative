import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './actions';



export default function LoginScreen(props) {
    const session = useSelector(state => state.session);
    
    const dispatch = useDispatch();
    const onLogin = (credentials) => dispatch(login(credentials));

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
                title="Login"
                onPress={() =>
                    onLogin({ username: "Murugan", password: "asdasdadasdasd" })
                }
            />
            { session.loggingIn && <Text>Please wait logging in</Text> } 
            { session.error && <Text>Something went wrong</Text> } 
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
