import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {Header, Left,Container, Body, Right,Button} from 'native-base';
class Home extends React.Component {

    // static navigationOptions = {
    //     headerStyle :{
    //         height : 0,
    //     }
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
        <Text>This is Sports Screen</Text>
      </View>
    );
  }
}

export default Home;

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
  }
});
