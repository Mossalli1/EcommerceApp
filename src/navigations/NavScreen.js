import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from '../users/Login';
import SignUp from '../users/SignUp';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import TabNavScreen from '../navigations/TabNavScreen';
import HomeDemo from '../screens/HomeDemo'
import { createStackNavigator, createAppContainer } from 'react-navigation';


const NavApp = createStackNavigator({
  Login: { screen: Login},
  SignUp: { screen: SignUp },
  Home: { screen: Home },
  Cart: { screen: Cart },
  TabNavScreen: {screen: TabNavScreen},
  HomeDemo: {screen: HomeDemo}

});

const AppContainer = createAppContainer(NavApp);



class NavScreen extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

export default NavScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
