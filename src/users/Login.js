import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class Login extends React.Component {

    static navigationOptions = {
        headerStyle :{
            height : 0,
        }
    }



  render() {
    return (
        <View style={styles.container}>
      
            <View style={{flex : 3,justifyContent: 'center',}}>
                <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'Email'} onChangeText={this.upDateEmail}/>

                <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'Password'} secureTextEntry={true} onChangeText={this.upDatePassword}/>

                <Text style={styles.text}>
                    <Text style={{color : 'blue'}} onPress = {()=> this.props.navigation.navigate('SignUp')}>Create Account
                    </Text>
                </Text>


                <TouchableOpacity style={styles.button} onPress = {()=> this.props.navigation.navigate('TabNavScreen')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

    </View>
    );
  }
}


export default Login;

const styles = StyleSheet.create({
    container: {
      flexGrow : 1,
      justifyContent: 'center',
      alignItems: 'center',
      
      // marginTop: 50,
      // paddingLeft: 15,
      // paddingRight : 15,
      backgroundColor: 'white',
    },
  
    text:{
      marginBottom: 10,
      marginTop: 0,
      padding : 0,
      textAlign: 'right'
    },
  
    textInput:{
      width:290,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      height: 40,
    //   backgroundColor : '#0fa4ef',
      borderRadius: 0,
      paddingHorizontal: 15,
      fontSize: 16,
      fontWeight: 'bold'
    },
  
    button:{
      width: 290,
      height: 40,
      backgroundColor: '#0050EF',
      marginVertical: 15,
      paddingVertical: 8,
      borderRadius: 0,
    },
  
    buttonText:{
      fontSize: 15,
      color: '#fff',
      fontWeight: 'bold',
      alignItems: 'center',
      textAlign: 'center'
    },
  
    
  });
