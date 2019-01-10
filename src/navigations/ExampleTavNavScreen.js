
//This Page Not use in this app


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Cart from '../screens/Cart';
import Delivery from '../screens/Delivery';
import Account from '../screens/Account';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-elements'

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;

  // Net Example

  //Start

  // if (routeName === 'Home') {
  //   iconName = `ios-home${focused ? '' : '-outline'}`;
  //   // We want to add badges to home tab icon
  //   // IconComponent = HomeIconWithBadge;
  // } else if (routeName === 'Settings') {
  //   iconName = `ios-options${focused ? '' : '-outline'}`;
  // }

  // // We can return any component that we like here!
  // return <IconComponent name={iconName} size={35} color={tintColor} />;

  //End
};


const TabNav = createBottomTabNavigator({

  Home: { screen: Home}




  //Another way to show tab navigation with icon

  //Start

  // Home:{
  //   screen: Home,
  //   navigationOptions: {
  //       tabBarLabel:"Home",
  //       tabBarIcon: ({ tintColor }) => (
  //         <Ionicons name="ios-home" size={30} color={tintColor}/>
  //       )
  //   },
  // },

  // Notifications: {
  //   screen: Notifications,
  //   navigationOptions: {
  //       tabBarLabel:"Notifications",
  //       tabBarIcon: ({ tintColor }) => (
  //         <Ionicons name="md-notifications-outline" size={30} color={tintColor}/>
  //       )
  //   },
  // },

  // Cart: {
  //   screen: Cart,
  //   navigationOptions: {
  //       tabBarLabel:"Cart",
  //       tabBarIcon: ({ tintColor }) => (
  //         <Ionicons name="md-cart" size={30} color={tintColor}/>
  //       )
  //   },
  // },

  // Delivery: {
  //   screen: Delivery,
  //   navigationOptions: {
  //       tabBarLabel:"Delivery",
  //       tabBarIcon: ({ tintColor }) => (
  //         <MaterialIcons name="local-shipping" size={30} color={tintColor}/>
  //       )
  //   },
  // },

  // Account: {
  //   screen: Account,
  //   navigationOptions: {
  //       tabBarLabel:"Account",
  //       tabBarIcon: ({ tintColor }) => (
  //         <Ionicons name="md-person" size={30} color={tintColor}/>
  //       )
  //   },
  // },

  //End

},


// Net Example

//Start

//Getting getTabBarIcon

// {
//   defaultNavigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, tintColor }) =>
//       getTabBarIcon(navigation, focused, tintColor),
//   }),
//   tabBarOptions: {
//     activeTintColor: '#00b8d4',
//     inactiveTintColor: 'gray',
//   },
// }

//End

);


const AppContainer = createAppContainer(TabNav);



class NavScreen extends React.Component {

    static navigationOptions = {
        headerStyle :{
            height : 0,
        }
    }
    
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
