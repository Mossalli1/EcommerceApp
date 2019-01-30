import React from 'react';
import {Dimensions, Button, StyleSheet, Text, View, ScrollView, Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, Foundation, Entypo,AntDesign } from '@expo/vector-icons';
import {  Rating, List, ListItem, Badge } from 'react-native-elements';
import {Header, Left,Container, Body, Right} from 'native-base';
// import SearchBar from 'react-native-searchbar';
import SearchBar from 'react-native-material-design-searchbar';
import Display from 'react-native-display';

//Redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import { ManList } from '../data/Data';
import Swiper from 'react-native-swiper';
import { productDetails } from '../redux/actions';
import { Dropdown } from 'react-native-material-dropdown';


var {width} = Dimensions.get('window');

class ProductsDetails extends React.Component {
  
    state = {
      enable: false,
      enable2: true,
      isModalVisible: false,
      starCount: 3.5,
      query: "",
      results: [],
      menList: ManList,
      items: [],
      quantity: 1,
    }


//>>>>>>>>>>>Functions For Increament and Decreament Quantity<<<<<<<<<<<<

    increaseQuantity=()=>{
      if(this.state.quantity<10){
          this.setState({quantity:this.state.quantity +1})
      }
    }

    decreaseQuantity=()=>{
      if(this.state.quantity>0){
        this.setState({quantity:this.state.quantity -1})
      }
    }
    


//>>>>>>>>>Functions for Show Hide Search bar<<<<<<<<<<<<

    toggleDisplay() {
      let toggle = !this.state.enable;
      this.setState({enable: toggle});

      let toggle2 = this.state.enable;
      this.setState({enable2: toggle2});
    }


//>>>>>>Mapping Color & Size For Drop Down which are called into render<<<<<<<<<

    getColor() {
      return this.props.ProductState && this.props.ProductState.color.map( color => ({value: color}));
    }

    getSize() {
      return this.props.ProductState && this.props.ProductState.size.map( color => ({value: color}));
    }
  

    //Search Methods

    // _handleResults(results) {
    //   this.setState({ results });
    // }

    // handleQueryChange = query =>
    //     this.setState(state => ({ ...state, query: query || "" }));

    // handleSearchCancel = () => this.handleQueryChange("");
    // handleSearchClear = () => this.handleQueryChange(""); 

    
    render() {

//>>>>>>>>>>Calling  Maping Function for Dropdown in variable<<<<<<<<<<<<<

      const size = this.getSize();
      const color = this.getColor();

      
      console.log("Product Details,,,,", this.props)
      return (
        
        
        <View style={styles.container}>

{/* >>>>>>>>>>>>>>Search bar Displaying<<<<<<<<<<<<<<< */}


              {/* <Display 
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
              </Display> */}


              

                  <Header style={styles.HeaderStyle}>
                      <Left>
                          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                            <MaterialIcons name='chevron-left' size={30} color={'#fff'}/> 
                          </TouchableOpacity>
                      </Left>


                      <Body style={{ alignItems:'flex-end',}}>
                          <Text style={{fontSize:18, fontWeight: 'bold',color:'#fff'}}>{this.props.ProductState && this.props.ProductState.name}</Text>
                      </Body>


                      <Right>
                          <View style={{paddingRight:10}}>
                            {/* <TouchableOpacity onPress={this.toggleDisplay.bind(this)}>
                              <MaterialIcons name="search" size={30}/> 
                            </TouchableOpacity> */}
                          </View>

                          <View style={{width: 38}} >
                            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Cart')}>
                              
{/* >>>>>>>>>>>>>>======Design A Badge Mannually=====<<<<<<<<<<<<<<<<<< */}

                              <View style={styles.CartBadge}>
                                <Text style={{color:'white'}}>0</Text>
                              </View>
                              <Ionicons name="md-cart" size={30} color='#fff'/>
                            </TouchableOpacity>
                          </View>
                      </Right>
                  </Header> 


          <View style={{flex:4}}>
               <View style={{height: 150}}>


{/* >>>>>>>>>>>>>>>>Slider by ScroolView<<<<<<<<<<<<<<<<<<<<<<< */}


                    {/* <ScrollView horizontal={true} pagingEnabled={true} showsButtons={true}>
                      
                          {this.props.ProductState && this.props.ProductState.image.map((images, index)=>{
                            return(
                              <View key={index} style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                              <Image 
                                style={{flex: 1, width: width * 1, height: 150, resizeMode: 'contain'}}
                                source={{uri: images}}
                              />
                              </View> 
                            )
                          })}
                    </ScrollView> */}



{/* >>>>>>>>>>>>>>>>> Slider By react native Swiper<<<<<<<<<<<<<<<<< */}


                    {
                      this.props.ProductState ? <Swiper showsButtons={true} >
                      
                      {this.props.ProductState.image.map((images, index)=>{
                          return(
                              <View key={index} style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                                <Image 
                                    style={{flex: 1, width: width * 1, height: 150, resizeMode: 'contain'}}
                                    source={{uri: images}}
                                  />
                                </View> 
                            )
                      })}
                  
                    </Swiper> : null
                    }


              </View>    

              


              <View style={{flex:1, paddingLeft: 12, paddingRight: 12, paddingTop: 5}}>
                  <ScrollView>

                      <View style={{flexDirection: 'row', justifyContent: 'space-between',          marginBottom: 4,}}>
                        <View>
                            <Text style={styles.text_element_id}>{this.props.ProductState && this.props.ProductState.title}</Text>
                        </View>



 {/* >>>>>>>>>>>>>Rating Display<<<<<<<<<<<<<  */}



                        <View>
                              <Rating 
                                // fractions={1}
                                startingValue={this.props.ProductState && this.props.ProductState.rating}
                                readonly
                                imageSize={20}
                                onFinishRating={this.ratingCompleted}
                                onStartRating={this.ratingStarted}
                                // style={{ paddingVertical: 10 }}
                              /> 
                        </View>
                      </View>
                      






                      <Text style={styles.text_element_item}>Model :  {this.props.ProductState && this.props.ProductState.model}</Text>

                      <Text style={styles.text_element_item}>Details : {this.props.ProductState && this.props.ProductState.details}</Text>

                      <Text style={styles.text_element_item}>Color : {this.props.ProductState && this.props.ProductState.color.join(', ')}</Text>

                      <Text style={styles.text_element_item}>Stock : {this.props.ProductState && this.props.ProductState.avilableStatus}</Text>

                      <Text style={styles.text_element_item}>Discount : {this.props.ProductState && this.props.ProductState.discount}</Text>

                      <View style={{flexDirection: 'row', justifyContent: 'space-between',        marginBottom: 4,}}> 
                        
                        <View>
                             <Text style={styles.text_element_size}>Size : {this.props.ProductState && this.props.ProductState.size.join(', ')}</Text>

                            <Text style={styles.text_element_price}>Price : {this.props.ProductState && this.props.ProductState.price}</Text>
                        </View>

                        <View style={{paddingRight: 3}}>
                            {/* <Image
                          style={{flex: 1, width: 50, height: 50, resizeMode: 'contain', borderRadius: 15 , backgroundColor: '#00b8d4'}}
                          source={require('../../assets/chat.png')}
                        /> */}
                           <Ionicons name="md-chatboxes" size={50} color="#00b8d4"/>
                        </View>
                        
                      </View>


                      

                      <View style={{backgroundColor:'#e0e0e0', marginTop: 5}}>

                          <View >
                
                
                
                

{/* <<<<<<<<<<<<<<<Adding Drop Down<<<<<<<<<<<<<< */}


                              <View style={{flexDirection:'row', justifyContent: 'space-around', }}>

                                    <View style={{width: width*.40}}>
                                        <Dropdown containerStyle={{height: 60, marginTop: -15}}
                                          label='Color'
                                          data={color}
                                        />
                                    </View>
                                    <View style={{width: width*.40}}>
                                         <Dropdown containerStyle={{height: 60, marginTop: -15}}
                                            label='Size'
                                            data={size}
                                         />
                                    </View>

                              </View>






                        
                              <View style={{flexDirection: 'row', justifyContent: 'space-around',marginBottom: 4,}}>
                              
                                    <View>
                                        <Text style={{paddingLeft: 40}}>Quantity :   {this.state.quantity}</Text>
                                    </View>
                                    
                                    <View>
                                        <TouchableOpacity style={{backgroundColor: '#e0e0e0',       height: 20, width: 25, justifyContent: 'center',        alignItems: 'center',borderRadius:20,marginTop: 1, borderColor: '#37474f', borderWidth: 2}} onPress={this.increaseQuantity}>




{/* >>>>>>>>>Added Quantity increase and decrease by onPress method<<<<<<<<<<<<<<< */}


                                            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 3}}>+</Text>
                                      
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                          <TouchableOpacity style={{backgroundColor: '#e0e0e0',       height: 20, width: 25, justifyContent: 'center',        alignItems: 'center',borderRadius:20,marginTop: 1, borderColor: '#37474f', borderWidth: 2,}} onPress={this.decreaseQuantity}>

                                              <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 3}}>-</Text>
                                  
                                          </TouchableOpacity>
                                    </View>
                                
                              </View>

                              
                          </View>



                          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                              
                                  <TouchableOpacity style={{backgroundColor: '#00b8d4', height: 30, width: 130, justifyContent: 'center', alignItems: 'center', marginLeft: 10}} onPress={()=> this.props.addToCart} >
                                    <Text>ADD TO CART</Text>
                              
                                  </TouchableOpacity>
                             
                                  <TouchableOpacity style={{backgroundColor: '#00b8d4', height: 30, width: 130, justifyContent: 'center', alignItems: 'center',marginRight: 10}}>
                                    <Text>BUY NOW</Text>
                                  </TouchableOpacity>
                             
                          </View>


                      </View>


                      <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 30}}>

                           <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
                              <Text style={{color: '#ff6f00'}}>Replacement Policy</Text>
                              <View style={{paddingLeft: 5}}>
                                  <Entypo name={'circle-with-plus'} size={18} color='#ff6f00'/>
                              </View>
                           </View>

                           <View style={{flexDirection: 'row',}}>
                              <Text style={{color: '#ff6f00', }}>Refund Policy</Text>
                              <View style={{paddingLeft: 5}}>
                                  <Entypo name={'circle-with-plus'} size={18} color='#ff6f00'/>
                              </View>
                           </View>

                      </View>


                      <View style={{height: 110, marginTop: 18, marginBottom: 18}}>

                            <View style={{ marginBottom: 10, alignItems:'center'}}>
                                <Text style={{fontWeight: 'bold'}}>Similar Type Products</Text>
                            </View>


{/* >>>>>>>>>>>>>Similar Products By Slide Show using ScroollView<<<<<<<<<<<<<<<<< */}
                            <ScrollView horizontal={true} pagingEnabled={true} showsButtons={true}>
                              
                                  {this.props.ProductState && this.props.ProductState.image.map((images, index)=>{
                                    return(
                                      <View key={index} style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                                      <Image 
                                        style={{flex: 1, width: 100, height: 200, resizeMode: 'contain'}}
                                        source={{uri: images}}
                                      />
                                      </View> 
                                    )
                                  })}
                            </ScrollView>

                      </View>    



                      <View style={{alignItems: 'center',height: 65}}>
                      {/* <Text>Hello</Text> */}
                          <Dropdown containerStyle={{width: 170,height: 60, marginTop: -25 }}
                              baseColor='#ff6f00'
                              label='Payment Methods'
                              // data={size}
                          />
                      </View>

                      
                     
                  </ScrollView>
              </View>


          </View>
        
          
        </View>
      );
    }
  
}




// >>>>>>>>>============Getting Data By Redux Using mapStateToProps==============<<<<<<<<<<<<<<<<<<



// function mapStateToProps(state) {
//   // console.log("Hello....", state)
//   return {
//     productState: state
//   }
// }


// function mapDispatchToProps(dispatch) {
//   console.log("Hello....")
//   const actions = {
//     // addProduct: (value) => ({
//     //   type: "Add_To_ProductDetails",
//     //   payload: value
//     // }),
//     // ADD_PRODUCT_TO_CART: (index: string) => addProductToCart(index),

//     // addProductList: (list:[]) => addProducts(list),

//     // addToCart: (value) => ({
//     //   type: "ADD_PRODUCT_TO_CART",
//     //   payload: value
//     // }),

//   }
//   return bindActionCreators(actions, dispatch)
// }


// export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetails)
export default ProductsDetails;





//>>>>>>>>-----------CSS-------------<<<<<<<<<<<


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
    fontSize: 17,
    fontWeight: 'bold',
  },

  text_element_item : {
    fontSize: 13,
  },
  
  text_element_size : {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 4,
    // textAlign: "center",
    // color: "#FFFFFF",
  },

  text_element_price : {
    fontSize: 16,
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

  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  CartBadge:{
    position: 'absolute',
    height: 17,
    width: 17,
    borderRadius: 30,
    backgroundColor: 'red', 
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 15, left: 17,
    zIndex: 2000,
  }

});


