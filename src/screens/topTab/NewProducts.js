import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Rating } from 'react-native-elements';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {Header, Left,Container, Body, Right,Button} from 'native-base';

class NewProducts extends React.Component {

  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }

    state = {
      starCount: 3.5,
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

    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }

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

            <Rating
              // fractions={1}
              startingValue={3.6}
              ratingCount={5}
              // readonly
              imageSize={20}
              onFinishRating={this.ratingCompleted}
              onStartRating={this.ratingStarted}
              style={{ paddingVertical: 10 }}
            />  
            {/* <Stars
              // default={3.5} // Its show the defalt Rating like 2.5, 3, 5 etc
              display={2.5}
              count={5}
              spacing={4}
              half={true}
              backingColor='#eee'
              starSize={22}
              fullStar={<Ionicons name={'ios-star'} size={22} style={[styles.myStarStyle]}/>}
              emptyStar={<Ionicons name={'ios-star-outline'} size={22} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
              halfStar={<Ionicons name={'ios-star-half'} size={22} style={[styles.myStarStyle]}/>}
            /> */}

{/* By Image */}

            {/* <Stars
              half={true}
              // default={2.5}
              display={3.5}
              update={(val)=>{this.setState({stars: val})}}
              spacing={4}
              starSize={22}
              count={5}
              fullStar={require('../../assets/starf.png')}
              emptyStar={require('../../assets/star.png')}
              halfStar={require('../../assets/starh.png')}
            />   */}



        </View>
            {/* <StarsRa /> */}
            
          {/* By React Native Element */}
            
          

    </View>


</View>
      )
    })
  }
    
      
    // lapsList() {
    //   return ManList.map((data,i) => {
    //     return (
    //       <View key={i}><Text>{data.item}</Text></View>
    //     )
    //   })
    // }
  
  
    // render() {
  
    //   return (
    //     <View style={styles.container}>

    //       {/* <View style={{flex:1}}>
    //         <AppContainerTop/>
    //       </View> */}
          
    //       <View style={{flex:4}}>
    //         <ScrollView>
    //           {this.lapsList()}
    //         </ScrollView>
    //       </View>
        
          
    //     </View>
    //   );
    // }
  

    

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.HeaderStyle}>
          <Left>
            <Ionicons name="ios-menu" size={30} onPress={() => this.props.navigation.openDrawer()}/>
          </Left>

          <Body style={{ alignItems:'center'}}>
              <Text style={{fontSize:18, fontWeight: 'bold'}}>Women</Text>
          </Body>

          <Right>

            <View>
              <Button transparent>
                <Ionicons name="ios-search" size={30}/>
              </Button>
            </View>

            <View>
              <Button transparent>
              < Ionicons name="md-cart" size={30}/>
              </Button>
            </View>
            
          </Right>

        </Header>

        <View style={styles.container}>

          {/* <View style={{flex:1}}>
            <AppContainerTop/>
          </View> */}
          
          <View style={{flex:4}}>
            <ScrollView>
              {this.lapsList()}
            </ScrollView>
          </View>
        
          
        </View>
        <Text>This is New Products Screen</Text>
      </View>
    );
  }
}

export default NewProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },

  HeaderStyle:{
    height: 40,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  }
});
