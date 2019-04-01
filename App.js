/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Platform, StyleSheet, Text, View , Image, TextInput, Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Button, CheckBox, Icon, ButtonGroup } from 'react-native-elements';
import { TouchableOpacity, Directions } from 'react-native-gesture-handler';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

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
      height: ScreenHeight / 100 * 9,
    },
  };

  constructor(props) {
    super(props);
    this.state = {username: '', mailaddress: '', pass1: '', pass2: '', checked: false, };
  }

  render() {
    return (
      <View style={styles.registrationscreen}>
        <Text style={styles.message1}>ABCチェックインに新規登録</Text>
        <View style={{
          height: ScreenHeight / 100 * 49,
          width: ScreenWidth / 100 * 47,
          padding: '3%',
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
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <CheckBox
              size={36}
              title=' '
              checkedIcon='check-square-o'
              uncheckedIcon='square-o'
              checkedColor='#feab2b'
              checked={this.state.checked}
              onPress={this.do4Action}
              containerStyle={{
                backgroundColor: 'white',
                borderColor: 'white',
                width: 36,
              }}
            />
            <Button 
              onPress={this.do3Action}
              title='利用規約'
              type='clear'
              titleStyle={{
                fontSize: 26,
                color: '#797979',
                textDecorationColor: '#797979',
                textDecorationLine: 'underline',
              }}
            />
            <Text style={{
              color: '#797979',
              fontSize: 20,
              textAlign: 'left',
              //padding: 20,
              //flex: 3,
            }}>
              に同意する
            </Text>
          </View>
        </View>
        <Button
            onPress={this.doAction}
            title="次へ"
            buttonStyle={styles.nextbutton}
            titleStyle={{
              fontSize: 30,
            }}
        />
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{
            fontSize: 20,
          }}>
          アカウントお持ちの方はこちらから
          </Text>
          <Button
            onPress={this.do2Action}
            title='ログイン'
            type='clear'
            titleStyle={{
              color: 'blue',
              fontSize: 20,
              textAlign: 'left',
              textDecorationColor: 'blue',
              textDecorationLine: 'underline',
            }}
          />
        </View>
      </View>
    );

  }

  doAction = ()=>{
    this.props.navigation.navigate('Language')
  }

  do2Action = ()=>{
    this.props.navigation.navigate('Login')
  }

  do3Action = ()=>{
    
  }

  do4Action = ()=> this.setState ({
    checked: !this.state.checked
  });
}

class LoginScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: '#FFFFFF',
      height: ScreenHeight / 100 * 9,
    },
  };

  constructor(props) {
    super(props);
    this.state = { mailaddress: '', pass1: '' };
  }

  render() {
    return(
      <View style={styles.loginscreen}>
        <Text style={styles.message1}>ABCチェックインにログイン</Text>
        <View style={{
          height: ScreenHeight / 100 * 24,
          width: ScreenWidth / 100 * 47,
          padding: 20,
          backgroundColor: '#ffffff',
        }}>
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
          
        </View>
        <Button
            onPress={this.doAction}
            title="次へ"
            buttonStyle={styles.nextbutton}
            titleStyle={{
              fontSize: 30,
            }}
        />
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
          <Text style={{
            fontSize: 20,
          }}>
          登録がお済みでない方はこちらから
          </Text>
          <Button
            onPress={this.do2Action}
            title='新規登録'
            type='clear'
            titleStyle={{
              color: 'blue',
              fontSize: 20,
              textAlign: 'left',
              textDecorationColor: 'blue',
              textDecorationLine: 'underline',
            }}
          />
        </View>
      </View>
    );
  }

  doAction = ()=>{
    this.props.navigation.navigate('Language')
  }

  do2Action = ()=>{
    this.props.navigation.navigate('Registration')
  } 

}

const english = ()=> <Text style={styles.languageselect}>英語</Text>
const japanese = ()=> <Text style={styles.languageselect}>日本語</Text>
const chinese1 = ()=> <Text style={styles.languageselect}>中文簡体</Text>
const chinese2 = ()=> <Text style={styles.languageselect}>中文繁体</Text>
const korean = ()=> <Text style={styles.languageselect}>韓国語</Text>

class LanguageScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: '#FFFFFF',
      height: ScreenHeight / 100 * 9,
    },
  };

  constructor (){
    super()
    this.state = {
      selectedIndex: -1,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex ( selectedIndex ) {
    this.setState({selectedIndex})
  }

  render() {
    const buttons = [{ element: english}, { element: japanese}, { element: chinese1}, { element: chinese2}, { element: korean}]
    const { selectedIndex } = this.state
    return (
      <View style={styles.languagescreen}>
        <Text style={styles.message1}>
          言語を選択してください。
        </Text>
        <ButtonGroup 
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          buttons={buttons}
          selectedButtonStyle={{
            backgroundColor: '#feab2b'
          }}
          containerStyle={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: 1,
            width: ScreenWidth / 100 * 34,
          }}
        />
        <Button
            onPress={this.doAction}
            title="次へ"
            buttonStyle={styles.nextbutton}
            titleStyle={{
              fontSize: 30,
            }}
        />
      </View>
    );
  }

  doAction = ()=>{
    this.props.navigation.navigate('')
  }

  do2Action =( selectedIndex )=> setState({
    selectedIndex: selectedIndex
  });

}

const AppNavigator = createStackNavigator(
  {
    Registration: {screen: RegistrationScreen},
    Login: {screen: LoginScreen},
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
    margin: 30,
    height: ScreenHeight /100 * 11,
    width: ScreenWidth / 100 * 34,
    backgroundColor: '#feab2b',
  },
  registrationscreen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
  },
  loginscreen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
  },
  input: {
    flex: 1,
    //margin: 10,
    //padding: 5,
    fontSize: 24,
    borderBottomColor: '#EFEFF4',
    borderBottomWidth: 1,
  },
  languagescreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFF4',
  },
  languageselect: {
    fontSize: 36,
    borderColor: '#797979',
  }
});

export default createAppContainer(AppNavigator);