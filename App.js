import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavScreen from './src/navigations/NavScreen';


import { Font } from 'expo';
// import FontAwesome  
// from './node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
// import MaterialIcons  
// from './node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';
// import Entypo  
// from './node_modules/@expo/vector-icons/fonts/Entypo.ttf';



export default class App extends React.Component {

  //Font Type Add Start

  async componentDidMount() {
    await Font.loadAsync({
      // FontAwesome,    //Adding FontAwesome
      MaterialIcons: require('./node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf')
      // Entypo          //Adding Entypo
    });
    this.setState({fontLoaded: true});
  }

  //Font Type Add End

  render() {
    return (
      <NavScreen/>
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
