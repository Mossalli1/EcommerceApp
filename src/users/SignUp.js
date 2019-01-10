import React from 'react';
import { StyleSheet, Text, View , ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

class Signup extends React.Component {
  render() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>

            <ScrollView showsVerticalScrollIndicator={false}>

                  <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'Name'}/>

                  <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'Email'} />

                  <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} secureTextEntry={true} placeholder={'Password'} />

                  <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} secureTextEntry={true} placeholder={'Confirm Password'} />

                  <TextInput style={styles.textInput} underlineColorAndroid={'transparent'} placeholder={'Phone Number'} keyboardType={"phone-pad"} /> 

                  <Text style={styles.text}>
                    Alredy have a account <Text style={{color : 'blue'}} onPress = {()=> this.props.navigation.navigate('Login')}>Login Here
                    </Text>
                  </Text>

                  <TouchableOpacity style={styles.button} >
                      <Text style={styles.buttonText}>Signup</Text>
                  </TouchableOpacity>

            </ScrollView>

    </KeyboardAvoidingView>
    );
  }
}

export default Signup;

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
      marginBottom: 0,
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
      color: '#fbfbfb',
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
