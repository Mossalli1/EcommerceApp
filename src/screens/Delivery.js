import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {

    // static navigationOptions = {
    //     headerStyle :{
    //         height : 0,
    //     }
    // }
    

  render() {
    return (
      <View style={styles.container}>
        <Text>Transactions</Text>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
