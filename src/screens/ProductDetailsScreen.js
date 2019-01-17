import React, { Component }from 'react';
import { Container,Content,List,ListItem,StyleSheet, Text, View ,Image, ImageBackground, ScrollView} from 'react-native';   
import { connect }from 'react-redux';
// import Products from '../ProductDetails/Products';
import ProductsDetails from './ProductsDetails';




class CartScreen extends React.Component {
    
  render() {

    return (   
      <View style={styles.container}>
        
              
                    <ProductsDetails
                        products={this.props.productReducer} />
                    
                
      </View>
    );
  }
}

function mapStateToProps(state){
    return{
        productReducer : state
    }
}

// function mapDispatchToProps(dispatch){
//     return{
//         removeFromCart : (value) => dispatch({
//             type : 'REMOVE_FROM_CART',
//             payload :value 
//         })
//     }
// }


export default connect(mapStateToProps)(CartScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
  },

  text_element : {
    fontSize: 20,
    textAlign: "center",
    color: "#FFFFFF",
  }

});
