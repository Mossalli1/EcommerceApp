import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Bottom Tab
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Cart from '../screens/Cart';
import Delivery from '../screens/Delivery';
import Account from '../screens/Account';

import HomeDemo from '../screens/HomeDemo'
import Demo from '../screens/Demo'

//Top Tab
import Men from '../screens/topTab/Men'



import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-elements'

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';


// const getTabBarIcon = (navigation, focused, tintColor) => {
//   const { routeName } = navigation.state;
//   let IconComponent = Ionicons;
  
//   let iconName;

  
//   if (routeName === 'Home') {
//     iconName = `ios-home`;
//     // We want to add badges to home tab icon
//     // IconComponent = HomeIconWithBadge;
//   } else if (routeName === 'Notifications') {
//     iconName = `md-notifications`;
//   }else if (routeName === 'Cart') {
//     iconName = `shopping-cart`;
//   }

//   // We can return any component that we like here!
//   return <IconComponent name={iconName} size={35} color={tintColor} />;

// };

// function renderIcon(iconComponent: Component, name: string, size: number) {
//   return (<iconComponent name={name} size={size}/>)
// }

// const tabq = createBottomTabNavigator({
//   // Home:{screen: Home},
//   Cart: {screen: Cart},
// })
const ProductNavigator = createStackNavigator({
    Home: {
      screen: HomeDemo,
      navigationOptions: {
          header: null
      }
    },
  
  Cart: {
    screen: Cart,
    navigationOptions: {
      header: null
    }
  },

  Men: {
    screen: Men,
    navigationOptions: {
      header: null
    }
  }
})


const BottomTabNav = createBottomTabNavigator({

  
  Home: {
    screen: ProductNavigator,  //Here call the StackNavigator as nested Navigator
    navigationOptions: {
            tabBarLabel:"Home",
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-home" size={20} color={tintColor}/>
            )
        },
  },

  Notifications: {
    screen: Notifications,
    navigationOptions: {
        tabBarLabel:"Notifications",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-notifications-outline" size={20} color={tintColor}/>
        )
    },
  },



  Delivery: {
    screen: Delivery,
    navigationOptions: {
        tabBarLabel:"Delivery",
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="local-shipping" size={20} color={tintColor}/>
        )
    },
  },

  Account: {
    screen: Account,
    navigationOptions: {
        tabBarLabel:"Account",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-person" size={20} color={tintColor}/>
        )
    },
  },

},

//Getting getTabBarIcon

{
  // defaultNavigationOptions: ({ navigation }) => ({
  //   tabBarIcon: ({ focused, tintColor }) =>
  //     getTabBarIcon(navigation, focused, tintColor),
  // }),
  tabBarOptions: {
    activeTintColor: '#00b8d4',
    inactiveTintColor: 'gray',
    style: {
      height: 40,
      paddingVertical: 5,
      //paddingTop: 10,
      // backgroundColor: "#006064"
    },
    labelStyle: {
      // fontSize: 11,
      lineHeight: 12,
    }
  },

}


);


const AppContainerBottom = createAppContainer(BottomTabNav);

class NavScreen extends React.Component {

    static navigationOptions = {
        headerStyle :{
            height : 0,
        }
    }
    
  render() {
    return (
      <View style={{flex: 1}}>
        
          <AppContainerBottom/>
        
      </View>
      
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
