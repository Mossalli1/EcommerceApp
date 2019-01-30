import React from 'react';
import { Dimensions, Button, StyleSheet, Text, View, ScrollView, Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
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
import Cart from './Cart';
import TabNavScreen from '../navigations/TabNavScreen';
import HomeDemo from './Home'

import { ManList } from '../data/Data';
import { addProducts , productDetails } from '../redux/actions';


var {width} = Dimensions.get('window');
const SECTIONS = [
  {
    title: 'Men',
    content: ['Shirt','Pant','Panjabi','Fotua'],
  },
  {
    title: 'Women',
    content: ['Shari','3 pcs', 'Borka',],
  },
  {
    title: 'Kids',
    content: ['Toy','Cloaths', 'Doll',],
  },
  {
    title: 'Sports',
    content: ['Football','Tennis', 'Cricket','Rugby'],
  },
  {
    title: 'Bags',
    content: ['Football','Tennis', 'Cricket','Rugby'],
  },
  {
    title: 'Books',
    content: ['Football','Tennis', 'Cricket','Rugby'],
  },
  {
    title: 'Computers',
    content: ['Football','Tennis', 'Cricket','Rugby'],
  },
  {
    title: 'Electronics',
    content: ['Mobile','Charger', 'Cable'],
  },
  {
    title: 'Kitchen and Home',
    content: ['Football','Tennis', 'Cricket','Rugby'],
  },
  {
    title: 'Jwellery',
    content: ['Football','Tennis', 'Cricket','Rugby'],
  },
  {
    title: 'Health and Household',
    content: ['Football','Tennis', 'Cricket','Rugby'],
  },
  {
    title: 'Beauty and Personal Care',
    content: ['Football','Tennis', 'Cricket','Rugby'],
  },
];

type Props = {
  addProductList: (value: []) => void,
  ProductState: any

}
class Home extends React.Component<Props> {
  
    state = {
      enable: false,
      enable2: true,
      isModalVisible: false,
      starCount: 3.5,
      activeSections: [],
      query: "",
      SECTIONS,
      results: [],
      menList: ManList,
    }

    // _renderSectionTitle = section => {
    //   return (
    //     <View style={styles.content}>
    //       {/* <Text>{section.content}</Text> */}
    //     </View>
    //   );
    // };
    componentDidMount() {
      this.props.addProductList(ManList)
    }

    toggleDisplay() {
      let toggle = !this.state.enable;
      this.setState({enable: toggle});

      let toggle2 = this.state.enable;
      this.setState({enable2: toggle2});
      
    }
  
    _renderHeader = section => {
      return (
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
          <View>
            <Ionicons name="md-arrow-dropdown" size={20}/>
          </View>
        </View>
      );
    };
  
    _renderContent = section => {
      return (
        <View style={styles.content}>
          <Text>{section.content[0]}</Text>
          <Text>{section.content[1]}</Text>
          <Text>{section.content[2]}</Text>
          <Text>{section.content[3]}</Text>
        </View>
      );
    };
  
    _updateSections = activeSections => {
      this.setState({ activeSections });
    };

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }

    alt1 = alt1 => {
      alert('Gf')
    };

    
  

    //Search Methods

    // _handleResults(results) {
    //   this.setState({ results });
    // }

    // handleQueryChange = query =>
    //     this.setState(state => ({ ...state, query: query || "" }));

    // handleSearchCancel = () => this.handleQueryChange("");
    // handleSearchClear = () => this.handleQueryChange(""); 

  lapsList(){

    return this.state.menList.map((data,i) =>{
      return(
            <View key={i}>
                <TouchableOpacity onPress={()=> this.props.product_details(i)} onPressIn={()=> this.props.navigation.navigate('ProductsDetails')}>

                    <View style={styles.elements}>
                    
                        <View style={styles.images}>
                          <Image
                            style={{width: 90, height: 100 ,resizeMode:"contain"}}
                            source={{uri: data.image[0]}}
                            // onPress={()=> this.props.product_details(i)} 
                            onPress={this.alt1}
                          />
                        </View>


                        <View style= {styles.texes}>
                            <Text style={styles.text_element_id}>{data.title}</Text>
                            <Text style={styles.text_element_item}>Colors : {data.color.join(', ')}</Text>
                            <Text style={styles.text_element_item}>Type: {data.type}</Text>
                            <Text style={styles.text_element_price}>Price : {data.price}</Text>
                            
                            {/* <Rating                                                 //------Rating Add
                              // fractions={1}
                              startingValue={2.6}
                              readonly
                              imageSize={20}
                              onFinishRating={this.ratingCompleted}
                              onStartRating={this.ratingStarted}
                              style={{ paddingVertical: 10 }}
                            />  */}
                            
                        </View>

                        <View style={styles.discount}>
                          <Image
                            style={{width: 90, height: 50, resizeMode:"contain"}}
                            source={require('../../assets/discount.png')}
                            // onPress={()=> this.props.product_details(i)} 
                            // onPress={this.alt1}
                          />

                        </View>


                    </View>

                  </TouchableOpacity>
            </View>
      )
    })
  }
    
  
  
    render() {
      console.log("Print props===========> ", this.props)
      this.props.addProduct()
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


              <Display 
                enable={this.state.enable2} 
                enterDuration={500} 
                exitDuration={250}
                // exit="fadeOutLeft"
                // enter="fadeInLeft"
              >

                  <Header style={styles.HeaderStyle}>
                      <Left>
                          <TouchableOpacity onPress={this._toggleModal}>
                            <Ionicons name="ios-menu" size={30}/> 
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
                 
              </Display>


          <View style={{flex:4}}>
            <ScrollView>
              {this.lapsList()}
            </ScrollView>
          </View>

          <Modal isVisible={this.state.isModalVisible}>
              <View style={{ height: 35,flexDirection: 'row', justifyContent:'space-between'}}>
                <View style={{paddingLeft: width*.3}}>
                  <Text style={{color:'#fff', fontSize: 18, fontWeight:'bold'}}>Menu</Text>
                </View>
                <TouchableOpacity onPress={this._toggleModal}>
                  <Entypo name="cross" size={30} color='#fff'/>
                </TouchableOpacity> 
              </View>

              <ScrollView >
                  <View >
                    <Accordion
                      sections={SECTIONS}
                      activeSections={this.state.activeSections}
                      // renderSectionTitle={this._renderSectionTitle}
                      renderHeader={this._renderHeader}
                      renderContent={this._renderContent}
                      onChange={this._updateSections}
                    />
                  </View>
                </ScrollView>
                {/* <TouchableWithoutFeedback onPress={this._toggleModal}>
                </TouchableWithoutFeedback> */}
          </Modal>
        
          
        </View>
      );
    }
  
}

// export default Home;
function mapStateToProps(state) {
  return {
    ProductState: state.productList
  }
}
function mapDispatchToProps(dispatch) {
  const actions = {
    addProduct: (value) => ({
      type: "Add_To_ProductDetails",
      payload: value
    }),
    product_details: (index: string) => productDetails(index),
    addProductList: (list:[]) => addProducts(list),
  }
  return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  elements: {
    flex: 1,
    flexWrap : 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems : 'center',
    paddingLeft: 15,

  },

  text_element_id : {
    fontSize: 15,
    fontWeight: 'bold'
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
    width : width * 0.3,
    // marginBottom : 5,
  },

  texes :{
    height : 110,
    width : width * 0.45,
    // marginBottom : 5,
    // paddingLeft: 30,
  },

  discount:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    height : 110,
    width : width * 0.2,
    // backgroundColor: 'red',
    marginBottom : 5
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
    backgroundColor: '#255E76',
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


