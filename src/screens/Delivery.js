import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Foundation,
  Entypo
} from "@expo/vector-icons";
// import { Header, Rating, List, ListItem} from 'react-native-elements';
import SearchBar from "react-native-material-design-searchbar";
import { Header, Left, Container, Body, Right, Radio } from "native-base";

// import {Left,Container, Body, Right,Button} from 'native-base';
import Modal from "react-native-modal";
import Accordion from "react-native-collapsible/Accordion";
import Display from "react-native-display";
import HeaderRight from "../other pages/header/HeaderRight";
import HeaderLeft from "../other pages/header/HeaderLeft";
import HeaderCenter from "../other pages/header/HeaderCenter";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeProductFromCart } from "../redux/actions";
import { TextInput } from "react-native-gesture-handler";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

var { width } = Dimensions.get("window");
var radio_props = [
  { label: "param1", value: 0 },
  { label: "param2", value: 1 }
];

class Cart extends React.Component {
  state = {
    // items,
    // results: [],
    enable: false,
    enable2: true,
    quantity: 1
  };

  increaseQuantity = () => {
    if (this.state.quantity < 10) {
      this.setState({ quantity: this.state.quantity + 1 });
    }
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  toggleDisplay() {
    let toggle = !this.state.enable;
    this.setState({ enable: toggle });

    let toggle2 = this.state.enable;
    this.setState({ enable2: toggle2 });
  }

  // _handleResults(results) {
  //   this.setState({ results });
  // }

  deliveryProductList() {
    //Maped Here
    return (
      this.props.cartList &&
      this.props.cartList.map((data, i) => {
        return (
          <View key={i}>
            <View style={styles.elements}>
              <View style={styles.images}>
                <Image
                  style={{ width: 40, height: 50, position: "absolute" }}
                  source={{ uri: data.image[0] }}
                  // onPress={()=> this.props.product_details(i)}
                  // onPress={this.alt1}
                />
              </View>

              <View>
                <View>
                  <Text>{data.title}</Text>
                </View>
                <Text style={{ fontSize: 11 }}>Unit Price : {data.price}</Text>

                <Text>Quantity : {this.state.quantity}</Text>
              </View>
            </View>
          </View>
        );
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.HeaderStyle}>
          <Left>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Cart")}
            >
              <MaterialIcons name="chevron-left" size={30} color={"#fff"} />
            </TouchableOpacity>
          </Left>

          <Body style={{ alignItems: "flex-start" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
              Delivery Information
            </Text>
          </Body>
          {/* 
          <Right>
            
          </Right> */}
        </Header>

        <View style={{ flex: 4 }}>
          <ScrollView>
            <View style={styles.buyerInfo}>
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.infoText}>Name</Text>
                <Text style={styles.infoText}>City/Town</Text>
                <Text style={styles.infoText}>Address</Text>
                <Text style={styles.infoText}>Mobile No.</Text>
              </View>
              <View style={{ paddingLeft: 20 }}>
                <TextInput
                  style={styles.textInput}
                  underlineColorAndroid={"transparent"}
                />
                <TextInput
                  style={styles.textInput}
                  underlineColorAndroid={"transparent"}
                  // placeholder={"Email"}
                  // onChangeText={this.upDateEmail}
                />
                <TextInput
                  style={styles.textInput}
                  underlineColorAndroid={"transparent"}
                />
                <TextInput
                  style={styles.textInput}
                  underlineColorAndroid={"transparent"}
                />
              </View>
            </View>

            <View>
              <View style={styles.productInfoTitle}>
                <Text
                  style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}
                >
                  Products Information
                </Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {this.deliveryProductList()}
              </ScrollView>

              <View style={{ backgroundColor: "#ABB2B9", height: 5 }} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 10
                  // backgroundColor: "red"
                }}
              >
                <View>
                  <Text style={styles.priceInfo}>TOTAL ITEMS:</Text>
                  <Text style={styles.priceInfo}>TOTAL PRODUCTS:</Text>
                  <Text style={styles.priceInfo}>TOTAL PRICE: </Text>
                  <Text style={styles.priceInfo}>DELIVERY CHARGE: </Text>
                  <Text style={styles.priceInfo}>VAT(15%): </Text>
                  <Text style={styles.subTotal}>SUBTOTAL:</Text>
                </View>
                <View>
                  <Text style={styles.priceInfoNumber}>1</Text>
                  <Text style={styles.priceInfoNumber}>2</Text>
                  <Text style={styles.priceInfoNumber}>2000 </Text>
                  <Text style={styles.priceInfoNumber}>0 </Text>
                  <Text style={styles.priceInfoNumber}>0 </Text>
                  <Text style={styles.subTotalValue}>2000 </Text>
                </View>
              </View>
            </View>
            <View style={styles.paymentInfoTitle}>
              <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
                Payment Methodes
              </Text>
            </View>
            <ScrollView horizontal={true}>
              <View>
                <Image
                  style={{ width: 80, height: 60 }}
                  source={{ uri: "https://bit.ly/2GfB0Bs" }}
                />
                <View style={{ paddingLeft: 30, marginTop: -8 }}>
                  <Radio selected={false} />
                </View>
              </View>
              <View>
                <Image
                  style={{ width: 80, height: 60 }}
                  source={{ uri: "https://bit.ly/2TnDeT8" }}
                />
                <View style={{ paddingLeft: 30, marginTop: -8 }}>
                  <Radio selected={false} />
                </View>
              </View>
              <View>
                <Image
                  style={{ width: 80, height: 60 }}
                  source={{ uri: "https://bit.ly/2GaQB5y" }}
                />
                <View style={{ paddingLeft: 30, marginTop: -8 }}>
                  <Radio selected={false} />
                </View>
              </View>
              <View>
                <Image
                  style={{ width: 80, height: 60 }}
                  source={{
                    uri:
                      "https://www.logodesignlove.com/images/symbols/mastercard-symbol-02.jpg"
                  }}
                />
                <View style={{ paddingLeft: 30, marginTop: -8 }}>
                  <Radio selected={false} />
                </View>
              </View>
              <View>
                <Image
                  style={{ width: 80, height: 60 }}
                  source={{
                    uri:
                      "data:image/png;base64,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"
                  }}
                />
                <View style={{ paddingLeft: 30, marginTop: -8 }}>
                  <Radio selected={false} />
                </View>
              </View>
            </ScrollView>
          </ScrollView>
        </View>

        <View style={styles.orderButtonView}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
              Confirm Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log("Hello Cart....", state);
  return {
    cartList: state.cartList
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    removeFromCart: (index: string) => removeProductFromCart(index)
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  elements: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 15
  },

  images: {
    //paddingTop: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 60,
    marginBottom: 5
  },

  texes: {
    height: 110,
    width: 220,
    marginBottom: 5,
    paddingLeft: 10
  },

  HeaderStyle: {
    height: 40,
    backgroundColor: "#255E76",
    alignItems: "center",
    justifyContent: "flex-start"
  },

  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
    // flexWrap: 'wrap'
  },

  content: {
    padding: 20,
    backgroundColor: "#fff"
  },

  headerText: {
    // textAlign: 'center',
    fontSize: 16,
    fontWeight: "500"
  },

  buyerInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10
  },
  textInput: {
    width: width * 0.66,
    // borderWidth: 1,
    // borderColor: "black",
    marginBottom: 3,
    height: 20,
    backgroundColor: "#EAEDED",
    borderRadius: 0,
    paddingHorizontal: 8, // its take space two side of input field
    fontSize: 16,
    fontWeight: "bold"
  },
  infoText: {
    marginBottom: 3
  },
  productInfoTitle: {
    backgroundColor: "#ABB2B9",
    marginTop: 5,
    paddingVertical: 2,
    alignItems: "center"
  },

  paymentInfoTitle: {
    backgroundColor: "#ABB2B9",
    marginTop: 10,
    paddingVertical: 2,
    alignItems: "center"
  },
  orderButtonView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  priceInfo: { textAlign: "right", fontSize: 12 },
  priceInfoNumber: { textAlign: "center", fontSize: 12 },
  subTotal: {
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 10
  },
  subTotalValue: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  button: {
    backgroundColor: "#255E76",
    height: 30,
    width: 240,
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: "#255E76",
    justifyContent: "center",
    alignItems: "center"
    // marginLeft: 10
  }
});
