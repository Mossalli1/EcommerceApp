import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
  ActivityIndicator,
  View,
  AsyncStorage,
  ImageBackground,
} from 'react-native';
import { RkText, RkButton, RkTextInput } from 'react-native-ui-kitten';
import { Auth } from 'aws-amplify';
import { graphql } from 'react-apollo';
// import uuidV4 from 'uuid/v4';

import FormWithValidation from '../FormWithValidation/FormWithValidation';
import createUser from '../../mutations/createUser';
import { StorageKey } from '../../staticData/constant';
import logError from '../AppNavigator/MainNavigator/Service/logColorPrint';

class SignUp extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    loading: false,
    signUpSuccess: false,
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    passwordConfirm: '',
    usernameErrorMessage: '',
    emailErrorMessage: '',
    phoneNumberErrorMessage: '',
    passwordErrorMessage: '',
    passwordConfirmErrorMessage: '',
    cognitoErrorMessage: '',
    code: '',
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  getStateValue = key => this.state[key];

  setStateValue = (key, value) => this.setState({ [key]: value });

  signUp = () => {
    const _that = this;
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({ loading: true });
      Auth.signUp({
        username: this.state.username,
        password: this.state.password,
        attributes: {
          email: this.state.email,
          phone_number: this.state.phoneNumber,
        },
      })
        .then(data => {
          // _that.onSignUp(data.userSub);
          _that.setState({
            loading: false,
            passwordConfirmErrorMessage: '',
            cognitoErrorMessage: '',
            signUpSuccess: true,
          });
        })
        .catch(err => {
          logError('SignUp Error ', err);
          this.setState({ loading: false, cognitoErrorMessage: err.message });
        },
        );
    } else {
      this.setState({ passwordConfirmErrorMessage: 'Passwords do not match.' });
    }
  };

  render() {
    const FieldRules = {
      username: {
        required: true,
        minlength: 4,
        maxlength: 50,
      },
      email: {
        required: true,
        email: true,
      },
      phoneNumber: {
        required: true,
      },
      password: {
        required: true,
        minlength: 7,
      },
      passwordConfirm: {},
    };
    const Fields = ['Username', 'Email', 'Phone', 'Password', 'Password'];
    const _that = this;
    return (
      <ImageBackground style={{ width: '100%', height: '100%', backgroundColor: '#fff' }} source={require('../../../assets/background.png')}>
        <View>
          {this.state.signUpSuccess ? (
            <View style={styles.container}>
              <RkTextInput
                placeholder="Put verification code"
                style={{ width: '80%' }}
                labelStyle={{ color: 'white' }}
                inputStyle={{
              backgroundColor: 'lightgray',
              color: 'white',
            }}
                onChangeText={value => {
              _that.setState({
                code: value,
              });
            }}
          />
              <RkText rkType="medium white center" style={styles.info}>
            A verification code was sent to your email. Verify with code.
              </RkText>
              <RkButton
                rkType="stretch"
                style={styles.button}
                contentStyle={{ color: 'white' }}
                onPress={() => {
              Auth.confirmSignUp(_that.state.username, _that.state.code)
                .then(data => {
                  AsyncStorage.setItem(StorageKey.newUser, 'true');
                  // this.props.createUser({
                  //   id: `user.${_that.state.username}`,
                  //   createdAt: Date.now(),
                  // });
                  this.props.navigation.goBack();
                })
                .catch(e => {
                  logError('Signup Error ', e);
                  alert('Wrong Verification code');
                });
            }}
          >
            Continue
              </RkButton>
            </View>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          {!this.state.loading && (
            <RkText
              rkType="medium white right"
              // onPress={this.props.screenProps.skip}
            >
              Skip
            </RkText>
          )}
          <RkText rkType="header black loginMain">Sign Up</RkText>
          {this.state.loading ? (
            <View style={{ marginVertical: 30 }}>
              <ActivityIndicator color="#fff" size="large" />
            </View>
          ) : (
            <FormWithValidation
              FieldRules={FieldRules}
              Fields={Fields}
              onChangeText={this.onChangeText}
              getStateValue={this.getStateValue}
              setStateValue={this.setStateValue}
              submit={this.signUp}
              button="Create Account"
            />
          )}
          {!this.state.loading && (
            <RkText
              rkType="medium black"
              style={styles.bottom}
              onPress={() => this.props.navigation.goBack()}
            >
              Already have account?
            </RkText>
          )}
        </ScrollView>
      )}
        </View>
      </ImageBackground>
    );
  }
}

// export default graphql(createUser, {
//   props: props => ({
//     createUser: user => {
//       props.mutate({
//         variables: user,
//       });
//     },
//   }),
// })(SignUp);
export default SignUp;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
    padding: 30,
  },
  info: {
    marginVertical: 30,
  },
  button: {
    backgroundColor: 'black',
    marginHorizontal: '15%',
    marginBottom: 20,
  },
  bottom: {
    textAlign: 'center',
    marginBottom: 30,
  },
});
