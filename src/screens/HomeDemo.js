import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, Foundation, Entypo } from '@expo/vector-icons';
import { Rating, List, ListItem } from 'react-native-elements';

import {Header, Left,Container, Body, Right,Button} from 'native-base';
import Modal from "react-native-modal";
import Accordion from 'react-native-collapsible/Accordion';
import SearchBar from 'react-native-searchbar';


import Cart from '../screens/Cart'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation';


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


class Home extends React.Component {

    state = {
      isModalVisible: false,
      starCount: 3.5,
      activeSections: [],
      query: "",
      SECTIONS,
      results: [],
      menList : [
        {
          id : 'Shirt', item : 'Yellow', price : '1150/-', type : 'Cloath',
          image : 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'
        },
        {
          id : 'Panjabi', item : 'Estacy', price : '1150/-', type : 'Cloath',
          image : 'https://www.aamio.com/file/2017/05/Cotton-Exclusive-Men-Printed-Panjabi-with-Contrasted-Collar-and-Placket-LMP112-1.jpg'
        },
        {
          id : 'Pant', item : 'Rich Man', price : '1150/-', type : 'Cloath',
          image : 'https://images.express.com/is/image/expressfashion/0035_04769232_1378_f01?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
        },
        {
          id : 'Fotua', item : 'Sailors', price : '1150/-', type : 'Cloath',
          image : 'https://www.upoharbd.com/images/uploads/cotton_karchupi_offWhite2.jpg'
        },
        {
          id : 'Shoes', item : 'Aarong', price : '1150/-', type : 'Cloath',
          image : 'https://image.sportsmansguide.com/adimgs/l/5/582387_ts.jpg'
        },
        {
          id : 'Polo Shirt', item : 'Yellow', price : '1150/-', type : 'Cloath',
          image : 'https://cdn.shopify.com/s/files/1/1368/9289/products/IvaUxv8Tb2M3TXLnEDj1_WoWs_Polo_front.jpg?v=1511458421'
        }
      ]
    }

    // _renderSectionTitle = section => {
    //   return (
    //     <View style={styles.content}>
    //       {/* <Text>{section.content}</Text> */}
    //     </View>
    //   );
    // };
  
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
        
          <View style={styles.elements}>

              <View style={styles.images}>
                <Image
                  style={{width: 100, height: 100}}
                  source={{uri: data.image}}
                />
              </View>


              <View style= {styles.texes}>
                  <Text style={styles.text_element_id}>{data.id}</Text>
                  <Text style={styles.text_element_item}>by {data.item}</Text>
                  <Text style={styles.text_element_item}>Type: {data.type}</Text>
                  <Text style={styles.text_element_price}>Price : {data.price}</Text>

                  
                  <Rating                                                 //------Rating Add
                    // fractions={1}
                    startingValue={2.6}
                    readonly
                    imageSize={20}
                    onFinishRating={this.ratingCompleted}
                    onStartRating={this.ratingStarted}
                    style={{ paddingVertical: 10 }}
                  /> 
              </View>

          </View>

        </View>
      )
    })
  }
    
  
  
    render() {
  
      return (
        
        <View style={styles.container}>
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

              <View>

                {/* <SearchBar
                  ref={(ref) => this.searchBar = ref}
                  data={SECTIONS}
                  handleResults={this._handleResults}
                  showOnLoad
                /> */}

                {/* <SearchBar
                  onChangeText={this.handleQueryChange}
                  onCancel={this.handleSearchCancel}
                  onClear={this.handleSearchClear}
                  value={this.state.query}
                  placeholder='Type Here...' 
                /> */}

                {/* <TouchableOpacity onPress={() => this.searchBar.show()}>
                  <View style={{ backgroundColor: 'green', height: 10, marginTop: 10 }}/>
                </TouchableOpacity> */}
                
                

                <TouchableOpacity>
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

          <View style={{flex:4}}>
            <ScrollView>
              {this.lapsList()}
            </ScrollView>
          </View>

          <Modal isVisible={this.state.isModalVisible}>
              <View style={{ height: 35,flexDirection: 'row', justifyContent: 'flex-end'}}>
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


