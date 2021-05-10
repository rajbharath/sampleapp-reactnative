import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function FriendsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Open up Friends.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
          title="Add some friends"
          onPress={() =>
            props.navigation.navigate('Home')
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
