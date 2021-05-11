import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function HomeScreen() {
  const session = useSelector(state => state.session);
  return (
    <View style={styles.container}>
      <Text>Welcome {session.userInfo.username}</Text>
      <Text>Open up Home.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
