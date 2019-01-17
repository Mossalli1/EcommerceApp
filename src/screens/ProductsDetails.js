import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, Foundation, Entypo } from '@expo/vector-icons';
import {  Rating, List, ListItem } from 'react-native-elements';
import {Header, Left,Container, Body, Right} from 'native-base';
import Modal from "react-native-modal";
import Accordion from 'react-native-collapsible/Accordion';
// import SearchBar from 'react-native-searchbar';
import SearchBar from 'react-native-material-design-searchbar';
import Display from 'react-native-display';

//Redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Login from '../users/Login';
import SignUp from '../users/SignUp';
// import Home from '../screens/Home';
import Cart from '../screens/Cart';
import TabNavScreen from '../navigations/TabNavScreen';
import HomeDemo from '../screens/HomeDemo'

import { ManList } from '../data/Data';
import { productDetails } from '../redux/actions';



class ProductsDetails extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     items: [],
  //   };

  //   store.subscribe(() => {
  //     // When state will be updated(in our case, when items will be fetched), 
  //     // we will update local component state and force component to rerender 
  //     // with new data.

  //     this.setState({
  //       items: store.getState().items
  //     });
  //   });
  // }
  
    state = {
      enable: false,
      enable2: true,
      isModalVisible: false,
      starCount: 3.5,
      query: "",
      results: [],
      menList: ManList,
      items: [],
    }
    

    toggleDisplay() {
      let toggle = !this.state.enable;
      this.setState({enable: toggle});

      let toggle2 = this.state.enable;
      this.setState({enable2: toggle2});
      
    }
  

    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }

    
  

    //Search Methods

    // _handleResults(results) {
    //   this.setState({ results });
    // }

    // handleQueryChange = query =>
    //     this.setState(state => ({ ...state, query: query || "" }));

    // handleSearchCancel = () => this.handleQueryChange("");
    // handleSearchClear = () => this.handleQueryChange(""); 

  // lapsList(){
  //   return this.props.product_details.map((data,i) =>{
  //     return(
        
  //       <View key={i}>

  //               <View style={styles.elements}>
  //                   <View style={styles.images}>
  //                     <Image
  //                       style={{width: 100, height: 100}}
  //                       source={{uri: data.image}}
  //                     />
  //                   </View>


  //                   <View style= {styles.texes}>
  //                       <Text style={styles.text_element_id}>{data.id}</Text>
  //                   </View>
  //               </View>


  //       </View>
  //     )
  //   })
  // }
    
  
  
    render() {
      console.log("Product Details,,,,", this.props.ProductState)
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
                      height={30}
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


              

                  <Header style={styles.HeaderStyle}>
                      <Left>
                          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                            <Ionicons name="ios-arrow-round-back" size={30}/> 
                          </TouchableOpacity>
                      </Left>


                      <Body style={{ alignItems:'center'}}>
                          <Text style={{fontSize:18, fontWeight: 'bold'}}>New Items</Text>
                      </Body>


                      <Right>
                          <View style={{paddingRight:10}}>
                            <TouchableOpacity onPress={this.toggleDisplay.bind(this)}>
                              <MaterialIcons name="search" size={30}/> 
                            </TouchableOpacity>
                          </View>

                          <View>
                            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Cart')}>
                              <Ionicons name="md-cart" size={30}/> 
                            </TouchableOpacity>
                          </View>
                      </Right>
                  </Header> 
          <View>
            {/* <SearchBar
              ref={(ref) => this.searchBar = ref}
              // data={items}
              // handleResults={this._handleResults}
              // showOnLoad
              heightAdjust={0}

            /> */}
          </View>

          <View style={{flex:4}}>
                    {/* <View style= {styles.texes}>
                      <Text>Hello {this.props.ProductState && this.props.ProductState.id}</Text>
                        <Text>Details</Text>
                    </View> */}

              <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  style={{width: 300, height: 190}}
                  source={{uri: this.props.ProductState && this.props.ProductState.image}}
                />
              </View>
              <View style={{flex:1}}>
              <ScrollView>
                  <Text style={styles.text_element_id}>{this.props.ProductState && this.props.ProductState.id}</Text>
                  <Text style={styles.text_element_item}>by {this.props.ProductState && this.props.ProductState.item}</Text>
                  <Text style={styles.text_element_item}>Type: {this.props.ProductState && this.props.ProductState.type}</Text>
                  <Text style={styles.text_element_price}>Price : {this.props.ProductState && this.props.ProductState.price}</Text>
                  <Text style={styles.text_element_price}>Abilability : {this.props.ProductState && this.props.ProductState.abilableStatus}</Text>
              </ScrollView>
                  

              </View>


          </View>
        
          
        </View>
      );
    }
  
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

// export default Home;
function mapStateToProps(state) {
  // console.log("Hello....", state)
  return {
    ProductState: state.productDetails
  }
}
// function mapDispatchToProps(dispatch) {
//   const actions = {
//     test: () => ({type: "TEST"}),
//     addProduct: (value) => ({
//       type: "Add_To_ProductDetails",
//       payload: {
//         products: value
//       }
//     })
//   }
//   return bindActionCreators(actions, dispatch)
// }
export default connect(mapStateToProps)(ProductsDetails)

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
    justifyContent: 'space-between',
    paddingLeft: 5
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


