import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, Foundation, Entypo } from '@expo/vector-icons';
import { Header, Rating, List, ListItem} from 'react-native-elements';
import SearchBar from 'react-native-material-design-searchbar';
 

import {Left,Container, Body, Right,Button} from 'native-base';
import Modal from "react-native-modal";
import Accordion from 'react-native-collapsible/Accordion';
import Display from 'react-native-display';



class Home extends React.Component {

    

    state = {
      // items,
      // results: [],
      enable: false,
      enable2: true,
    };


    toggleDisplay() {
      let toggle = !this.state.enable;
      this.setState({enable: toggle});

      let toggle2 = this.state.enable;
      this.setState({enable2: toggle2});
      
    }
    

  // _handleResults(results) {
  //   this.setState({ results });
  // }

   
  
    render() {
  
      return (
        
        <View style={styles.container}>

          
          
              <Display 
                enable={this.state.enable} 
                enterDuration={500} 
                exitDuration={250}
                // exit="fadeOutLeft"
                // enter="fadeInLeft"
              >
                  <View>
                    <SearchBar
                      // onSearchChange={() => console.log('On Search Change')}
                      height={40}
                      // onFocus={() => console.log('On Focus')}
                      // onBlur={() => console.log('On Blur')}
                      placeholder={'Search...'}
                      // autoCorrect={false}
                      padding={5}
                      returnKeyType={'search'}
                      onBackPress={this.toggleDisplay.bind(this)}
                      // alwaysShowBackButton={true}
                      />

                   
                  </View>
              </Display>

              <Display 
                enable={this.state.enable2} 
                enterDuration={500} 
                exitDuration={250}
                // exit="fadeOutLeft"
                // enter="fadeInDown"
              >
             <Header outerContainerStyles={{ backgroundColor: '#006064', height:50, borderBottomWidth:0}}
                  // innerContainerStyles={{borderColor:'red'}}
                  leftComponent={{ icon: 'menu', color: '#fff' }}
                  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                  rightComponent={{ icon: 'search', color: '#fff', onPress:this.toggleDisplay.bind(this) }}
              />
          
                
              
              </Display>
          <View >
            <ScrollView>

              <View>

              {/* <Display 
                enable={this.state.enable2} 
                enterDuration={500} 
                exitDuration={250}
                exit="fadeOutLeft"
                enter="fadeInLeft"
              >
                <View style={[styles.circle, {backgroundColor: '#2ecc71'}]} />
              </Display> */}
              
             {/* <Button style={{height:60}} onPress={this.toggleDisplay.bind(this)}>
                      <Text>Cancel</Text>
                    </Button> */}
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

  },
  circle: {
    borderRadius: 50,
    height: 100,
    width: 100,
    margin: 15
  },

});


// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Button,
// } from 'react-native';

// import Display from 'react-native-display';

// export default class testdisplay extends Component {
  

//    state = {enable: false};
  

//   toggleDisplay() {
//     let toggle = !this.state.enable;
//     this.setState({enable: toggle});
//   }

//   render() {
//     return (
//       <View>
//         <View style={styles.button}>
//           <Button
//             onPress={this.toggleDisplay.bind(this)}
//             title="Toggle display"
//             color="#34495e"
//             accessibilityLabel="Toggle display for show/hide circles"
//           />
//         </View>
//         <View style={styles.center}>
//           <Display 
//             enable={this.state.enable} 
//             enterDuration={500} 
//             exitDuration={250}
//             exit="fadeOutLeft"
//             enter="fadeInLeft"
//           >
//             <View style={[styles.circle, {backgroundColor: '#2ecc71'}]} />
//           </Display>
          
//         </View>
//       </View>
//     );
//   }
// }

// const styles = {
//   button: {
//     padding: 10,
//     margin: 15,
//   },
//   center: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   circle: {
//     borderRadius: 50,
//     height: 100,
//     width: 100,
//     margin: 15
//   },
// }

// AppRegistry.registerComponent('testdisplay', () => testdisplay);