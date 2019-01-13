import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, Foundation, Entypo } from '@expo/vector-icons';
import { Header, Rating, List, ListItem } from 'react-native-elements';

import {Left,Container, Body, Right,Button} from 'native-base';
import Modal from "react-native-modal";
import Accordion from 'react-native-collapsible/Accordion';
import SearchBar from 'react-native-searchbar';


import Cart from '../screens/Cart'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation';




class Home extends React.Component {

    

    state = {
      items,
      results: []
    };
    

  _handleResults(results) {
    this.setState({ results });
  }

   
  
    render() {
  
      return (
        
        <View style={styles.container}>
          <Header 
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />



          <View>

          <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={items}
          handleResults={this._handleResults}
          showOnLoad
        />

            <Text>Grand Total</Text>
          </View>

          <View >
            <ScrollView>

              <View>
                <Text>Items</Text>
              </View>

              <View>
                <Text>Items Details</Text>
              </View>

              <View>
                <Text>Quantity</Text>
              </View> 
            </ScrollView>
          </View>

          
        
          
        </View>
      );
    }
  
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  elements: {
    flexWrap : 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems : 'center',
    paddingLeft: 15,

  },

  text_element_id : {
    fontSize: 15,
    // textAlign: "center",
    // color: "#FFFFFF",
  },

  text_element_item : {
    fontSize: 11,
    // textAlign: "center",
    // color: "#FFFFFF",
  },
  text_element_type : {
    fontSize: 12,
    // textAlign: "center",
    // color: "#FFFFFF",
  },

  text_element_price : {
    fontSize: 15,
    // textAlign: "center",
    color: "red",
  },

  images :{
    height : 110,
    width : 110,
    marginBottom : 5,
  },

  texes :{
    height : 110,
    width : 180,
    marginBottom : 5,
    paddingLeft: 30,
  },

  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },

  myEmptyStarStyle: {
    // tintColor: 'white',
  },

  HeaderStyle:{
    height: 40,
    backgroundColor: '#006064',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },

  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },

  header:{
    backgroundColor: '#F5FCFF',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
    // flexWrap: 'wrap'
  },

  content:{
    padding: 20,
    backgroundColor: '#fff',
  },

  headerText:{
    // textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',

  }

});


