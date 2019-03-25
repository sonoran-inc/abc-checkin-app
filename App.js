/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class LogoTitle extends React.Component {
  render() {
    return (
      <Image 
        source={require('./assets/ABC_logo.png')}
        style={{ width: 120, height: 40}}
      />
    );
  }
}

class RegistrationScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: '#FFFFFF',
      height: 70,
    },
  };

  constructor(props) {
    super(props);
    this.state = {username: '', mailaddress: '', pass1: '', pass2:'' };
  }

  render() {
    return (
      <View style={styles.registrationscreen}>
        <Text style={styles.message1}>ABCチェックインに新規登録</Text>
        <View style={{
          height: 360,
          width: 500,
          padding: 20,
          backgroundColor: '#ffffff',
        }}>
          <TextInput 
            style={styles.input}
            placeholder="名前"
            value={this.state.username}
          />
          <TextInput 
            style={styles.input}
            placeholder="メールアドレス"
            value={this.state.mailaddress}
          />
          <TextInput 
            style={styles.input}
            placeholder="パスワード"
            value={this.state.pass1}
          />
          <TextInput 
            style={styles.input}
            placeholder="パスワード確認"
            value={this.state.pass2}
          />
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            padding: 20,
          }}>
            □ 利用規約に同意する
          </Text>
        </View>
        <View style={styles.nextbutton}>
          <Button
            onPress={this.doAction}
            title="次へ"
            color="#ffffff"
            fontSize="40"
          />
        </View>
      </View>
    );

  }

  doAction = ()=>{
    this.props.navigation.navigate('Language')
  }
}

class LanguageScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: '#FFFFFF',
      height: 70,
    },
  };

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
    Registration: {screen: RegistrationScreen},
    Language: {screen: LanguageScreen}
  },
  {
    initialRouteName: 'Registration'
  }
);

const styles = StyleSheet.create({
  message1: {
    padding: 30,
    fontSize: 44,
    fontWeight: 'bold',
    color: '#5C5C5C',
  },
  nextbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 300,
    padding: 10,
    margin: 20,
    backgroundColor: '#feab2b'
  },
  registrationscreen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
  },
  input: {
    flex: 1,
    margin: 10,
    padding: 5,
    fontSize: 24,
    borderBottomColor: '#EFEFF4',
    borderBottomWidth: 1,
  },
  languagescreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
  }
});

export default createAppContainer(AppNavigator);