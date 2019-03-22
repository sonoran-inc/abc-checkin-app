/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.homescreen}>
        <Text>Home Screen</Text>
        <Button title="言語選択へ" onPress={() =>
        this.props.navigation.navigate('Language')} />
      </View>
    );
  }
}

class LanguageScreen extends React.Component {
  render() {
    return (
      <View style={styles.languagescreen}>
        <Text>Please choose Language</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Language: {screen: LanguageScreen}
  },
  {
    initialRouteName: 'Home'
  }
);

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  languagescreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default createAppContainer(AppNavigator);