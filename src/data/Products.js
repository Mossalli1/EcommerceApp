import React from 'react';
import { Container,Content,List,ListItem,StyleSheet, Text, View ,Image, ImageBackground, ScrollView, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';




export default class App extends React.Component {

    state ={
        btnTitle : 'Add to Cart'
    }

    
    renderProducts = (products) => {
        console.log("Products",this.props)
        return products.map((data, i) => {
            return (
                <View key={i}>
        
                    <View style={styles.elements}>

                        <View style={styles.images}>
                        <Image
                        style={{width: 100, height: 100}}
                        source={{uri: data.image}}
                        />
                    </View>
                    <View style= {styles.texes}>
                        <Text style={styles.text_element_id}>ID : {data.id}</Text>
                        <Text style={styles.text_element_item}>{data.item}</Text>
                        <Text style={styles.text_element_price}>Price : {data.price}</Text>
                        <Button
                         title ={this.state.btnTitle}
                        // onPress={()=> this.props.navigation.navigate('CartScreen')}
                        onPress={()=> this.props.onPress(data)} 
                        
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
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#455A64',
    },
  
    elements: {
      flexWrap : 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems : 'center',
    },
  
    text_element_id : {
      fontSize: 15,
      textAlign: "center",
      color: "#FFFFFF",
    },
  
    text_element_item : {
      fontSize: 20,
      textAlign: "center",
      color: "#FFFFFF",
    },
  
    text_element_price : {
      fontSize: 15,
      textAlign: "center",
      color: "#FFFFFF",
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
    }
  
  });
