import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { RkText, RkButton, RkTextInput } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';
import { Auth } from 'aws-amplify';

import FormWithValidation from '../FormWithValidation/FormWithValidation';

export default class ForgetPassword extends Component {
  // look at all error codes
  // make a confirmation page after changing password
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'black',
  };

  state = {
    loading: false,
    codeReceived: false,
    changePassSuccess: false,
    username: '',
    confirmationCode: '',
    password: '',
    usernameErrorMessage: '',
    passwordErrorMessage: '',
    cognitoErrorMessage: '',
    destEmail: '',
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  getStateValue = key => this.state[key]

  setStateValue = (key, value) => this.setState({ [key]: value })

  GetConfirmationCode = () => {
    const { username } = this.state;
    if (username !== '') {
      this.setState({ loading: true, usernameErrorMessage: '' });
      Auth.forgotPassword(username)
        .then(data => {
          this.setState({
            loading: false,
            codeReceived: true,
            destEmail: data.CodeDeliveryDetails.Destination,
          });
        })
        .catch(() => {
          this.setState({ usernameErrorMessage: 'Username not found.\n', loading: false });
        });
    } else {
      this.setState({ usernameErrorMessage: 'Username is required.\n' });
    }
  }

  ChangePassword = () => {
    const { username, confirmationCode, password } = this.state;
    this.setState({ loading: true });
    Auth.forgotPasswordSubmit(username, confirmationCode, password)
      .then(() => {
        this.setState({ loading: false, cognitoErrorMessage: '', changePassSuccess: true });
      })
      .catch(err => {
        this.setState({ loading: false });
        if (err.name === 'CodeMismatchException') {
          this.setState({ cognitoErrorMessage: err.message });
        }
      });
  }

  render() {
    const FieldRules = {
      confirmationCode: { required: true },
      password: { required: true, minlength: 7 },
    };
    const Fields = ['Code', 'New Password'];
    return (
      <ImageBackground style={{ width: '100%', height: '100%', backgroundColor: '#fff' }} source={require('../../../assets/background.png')}>
        <View>
          { this.state.changePassSuccess ?
            <View style={styles.container}>
              <RkText
                rkType="header black loginMain"
            >Password Changed
              </RkText>
              <RkText
                rkType="medium black center"
                style={styles.info}
            >Your password was successfully changed. You may now login with your new password.
              </RkText>
              <RkButton
                rkType="stretch"
                style={styles.button}
                contentStyle={{ color: 'black' }}
                onPress={() => this.props.navigation.goBack()}
          >Continue
              </RkButton>
            </View>
        :
            <View style={styles.container}>
              <View style={styles.imageCont}>
                <Image source={require('../../../assets/passkey.png')} />
              </View>
              <RkText
                rkType="black center"
                style={styles.forget}
          >Forget Password?
              </RkText>
              { this.state.loading ?
                <ActivityIndicator size="large" color="#fff" />
            :
                <View>
                  { this.state.codeReceived ?
                    <View>
                      <RkText rkType="small black center">Your confirmation code has been sent to {this.state.destEmail}</RkText>
                      <RkText rkType="small black center">Enter the code and your new password below.</RkText>
                      <FormWithValidation
                        FieldRules={FieldRules}
                        Fields={Fields}
                        onChangeText={this.onChangeText}
                        getStateValue={this.getStateValue}
                        setStateValue={this.setStateValue}
                        submit={this.ChangePassword}
                        button="Change Password"
                  />
                    </View>
                :
                    <View>
                      <RkTextInput
                        onChangeText={value => this.onChangeText('username', value)}
                        value={this.state.username}
                        rkType="login"
                        placeholder="Username"
                        autoFocus
                        style={{ marginVertical: 20 }} />
                      <RkText rkType="medium errorMessage">{this.state.usernameErrorMessage}</RkText>
                      <RkButton
                        onPress={this.GetConfirmationCode}
                        rkType="stretch"
                        style={styles.button}
                        contentStyle={{ color: 'white' }}
                  >
                        <RkText rkType="caption">Get Confirmation Code</RkText>
                        <Icon style={{ fontSize: 21 }} name="ios-send" />
                      </RkButton>
                    </View>
            }
                </View>
          }
            </View>
      }
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  imageCont: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  forget: {
    marginVertical: 20,
  },
  info: {
    marginVertical: 30,
  },
  button: {
    backgroundColor: 'black',
    marginHorizontal: '15%',
    marginBottom: 40,
    justifyContent: 'space-around',
  },
});
