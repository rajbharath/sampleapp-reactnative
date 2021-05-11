import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import {login} from './actions';

class LoginScreen extends React.Component {
    componentDidMount() {
        if (this.props.loggedIn) {
            this.props.navigation.navigate('Home')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <Button
                    title="Login"
                    onPress={() =>
                        this.props.login({ username: "Murugan", password: "asdasdadasdasd" })
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => {
    const { session } = state
    console.log(session)
    return { ...session }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);