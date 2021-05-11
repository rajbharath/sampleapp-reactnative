import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './root_reducer';
import Auth from './Auth';

const Stack = createStackNavigator();

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={Auth}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

