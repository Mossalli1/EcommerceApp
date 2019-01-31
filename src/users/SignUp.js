import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
  ImageBackground,
  ScrollView
} from "react-native";
import { RkText, RkTheme } from "react-native-ui-kitten";
// import { Auth } from "aws-amplify";
import FormWithValidation from "../FormWithValidation/FormWithValidation";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Foundation,
  Entypo,
  AntDesign
} from "@expo/vector-icons";
// import {
//   StorageKey,
//   stateKey,
//   userAttributes,
//   actionTypes
// } from "../../staticData/constant";
// import Client from "aws-appsync";
// import AppSyncconfig from "../../../AppSync (2)";
// import loadingUserCheck from "../AppNavigator/MainNavigator/Loading/loadingService";
// import logError, {
//   logText
// } from "../AppNavigator/MainNavigator/Service/logColorPrint";
// import { clientGenerate } from "./authService";
// import { store } from "../AppNavigator/MainNavigator/Home";
// import { addCognitoAttributes } from "../../redux/action";
// import background from '../../../assets/background.png';

class SignIn extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    loading: false,
    signUpSuccess: false,
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
    usernameErrorMessage: "",
    emailErrorMessage: "",
    phoneNumberErrorMessage: "",
    passwordErrorMessage: "",
    passwordConfirmErrorMessage: "",
    cognitoErrorMessage: "",
    code: ""
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  getStateValue = key => this.state[key];

  setStateValue = (key, value) => this.setState({ [key]: value });

  // signIn = () => {
  //   this.setState({ loading: true });
  //   const _that = this;
  //   const { username, password } = this.state;
  //   Auth.signIn(username, password)
  //     .then(async user => {
  //       this.setState({ user });
  //       _that.props.screenProps.setUserId(username);
  //       Auth.currentAuthenticatedUser().then(response => {
  //         store.dispatch(addCognitoAttributes(response.attributes));
  //         if (
  //           response.attributes["custom:firstName"] &&
  //           response.attributes["custom:lastName"]
  //         ) {
  //           AsyncStorage.multiSet([
  //             [StorageKey.firstName, response.attributes["custom:firstName"]],
  //             [StorageKey.lastName, response.attributes["custom:lastName"]]
  //           ]);
  //         }
  //       });
  //       _that.props.screenProps.client = await clientGenerate();
  //       Auth.currentSession()
  //         .then(async res => {
  //           AsyncStorage.multiSet([
  //             [StorageKey.jwtToken, res.accessToken.jwtToken],
  //             [StorageKey.userId, username],
  //             [StorageKey.password, password],
  //             [StorageKey.loggedIn, "true"]
  //           ]);
  //           // _that.props.screenProps.client = new Client({
  //           //   url: AppSyncconfig.graphqlEndpoint,
  //           //   region: AppSyncconfig.region,
  //           //   auth: {
  //           //     type: AppSyncconfig.authenticationType,
  //           //     apiKey: AppSyncconfig.apiKey,
  //           //     jwtToken: res.accessToken.jwtToken,
  //           //   },
  //           // });
  //           // this.props.screenProps.authenticate(true);
  //           await loadingUserCheck(_that.props.screenProps.client, username);
  //           _that.props.screenProps.setUserId(username);
  //           // _that.props.navigation.navigate('Home');
  //           // apolloClient
  //           //   .query({
  //           //     query: getUser,
  //           //     variables: { id: 'user.rakin2' },
  //           //   })
  //           //   .then(res => {
  //           //     console.log(res);
  //           //   })
  //           //   .catch(e => console.log(e));
  //         })
  //         .catch(e => logError("Current session error ", e));
  //       _that.props.navigation.navigate("Home", {
  //         [stateKey.AUTHENTICATE_STATE]: true
  //       });
  //     })
  //     .catch(e => {
  //       logError("Error in logging ", e);

  //       this.setState({
  //         cognitoErrorMessage: "Username - or Password is incorrect.",
  //         loading: false
  //       });
  //     });
  // };

  render() {
    const FieldRules = {
      username: {
        required: true,
        minlength: 4,
        maxlength: 50
      },
      email: {
        required: true,
        email: true
      },
      phoneNumber: {
        required: true
      },
      password: {
        required: true,
        minlength: 7
      },
      passwordConfirm: {}
    };
    const Fields = ["Username", "Email", "Phone", "Password", "Password"];

    return (
      // <ImageBackground
      //   style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
      //   source={require("../../../assets/background.png")}
      // >

      <ScrollView contentContainerStyle={styles.container}>
        {/* {!this.state.loading && (
          <RkText
            rkType="medium black right"
            // onPress={this.props.screenProps.skip}
          >
            Skip
          </RkText>
        )} */}
        {/* <RkText rkType="header black loginMain">Login</RkText> */}
        {this.state.loading ? (
          <View style={{ marginVertical: 30 }}>
            <ActivityIndicator color="red" size="large" />
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
            onPress={() => this.props.navigation.navigate("Login")}
          >
            Already have account?
            <RkText rkType="medium black" style={{ color: "blue" }}>
              {" "}
              SignIn
            </RkText>
          </RkText>
        )}
      </ScrollView>

      // </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    }),
    padding: 30
    // flex: 1
    // backgroundColor: '#000',
  },
  bottom: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  signup: {
    fontWeight: "bold",
    marginLeft: 5
  }
});

export default SignIn;
