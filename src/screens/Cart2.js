import React from "react";
import {
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
import { Header, Left, Container, Body, Right } from "native-base";

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

  cartList() {
    //Maped Here
    return (
      this.props.cartList &&
      this.props.cartList.map((data, i) => {
        return (
          <View key={i}>
            <View style={styles.elements}>
              <View style={styles.images}>
                <Image
                  style={{ width: 50, height: 80, resizeMode: "contain" }}
                  source={{ uri: data.image[0] }}
                  // onPress={()=> this.props.product_details(i)}
                  // onPress={this.alt1}
                />
              </View>

              <View style={styles.texes}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text style={styles.text_element_id}>{data.title}</Text>
                  <Entypo
                    name="cross"
                    size={30}
                    color="black"
                    onPress={() =>
                      this.props.removeFromCart(
                        this.props.cartList && this.props.cartList
                      )
                    }
                  />
                </View>
                <Text style={styles.text_element_item}>Size : {data.size}</Text>
                <Text style={styles.text_element_item}>
                  Unit Price : {data.price}
                </Text>

                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <View style={{ paddingRight: 20 }}>
                    <Text>Quantity : {this.state.quantity}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <View>
                      <TouchableOpacity
                        onPress={this.increaseQuantity}
                        style={{
                          backgroundColor: "#e0e0e0",
                          height: 20,
                          width: 25,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 20,
                          marginTop: 1,
                          borderColor: "#37474f",
                          borderWidth: 2
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            marginBottom: 3
                          }}
                        >
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <View>
                      <TouchableOpacity
                        onPress={this.decreaseQuantity}
                        style={{
                          backgroundColor: "#e0e0e0",
                          height: 20,
                          width: 25,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 20,
                          marginTop: 1,
                          borderColor: "#37474f",
                          borderWidth: 2
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 30,
                            fontWeight: "bold",
                            marginBottom: 3
                          }}
                        >
                          -
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <Text style={styles.text_element_price}>
                  Total Price : {this.state.quantity * data.price}
                </Text>
              </View>
            </View>
          </View>
        );
      })
    );
  }

  render() {
    console.log(
      "Cart props===========> "
      // this.props.cartList && this.props.cartList[0].name
      // this.props.cartList && this.props.cartList[1].name
    );
    return (
      <View style={styles.container}>
        <Display
          enable={this.state.enable}
          enterDuration={500}
          exitDuration={250}
          // exit="fadeOutLeft"
          // enter="fadeInLeft"
        >
          <View>
            <SearchBar
              // onSearchChange={() => console.log('On Search Change')}
              height={40}
              // onFocus={() => console.log('On Focus')}
              // onBlur={() => console.log('On Blur')}
              placeholder={"Search..."}
              // autoCorrect={false}
              padding={5}
              returnKeyType={"search"}
              onBackPress={this.toggleDisplay.bind(this)}
              // alwaysShowBackButton={true}
            />
          </View>
        </Display>

        <Display
          enable={this.state.enable2}
          enterDuration={500}
          exitDuration={250}
          // exit="fadeOutLeft"
          // enter="fadeInDown"
        >
          {/* >>>>>>>>>---------Header With React_Native_Element---------<<<<<<<<<< */}

          {/* <Header outerContainerStyles={{ backgroundColor: '#255E76', height:40, borderBottomWidth:0}}
                        
                        leftComponent={<HeaderLeft onPress={()=>this.props.navigation.navigate('ProductsDetails')}/>}
                        centerComponent={<HeaderCenter/>}
                        rightComponent={<HeaderRight/>}

                  /> */}

          <Header style={styles.HeaderStyle}>
            <Left>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <MaterialIcons name="chevron-left" size={30} color={"#fff"} />
              </TouchableOpacity>
            </Left>

            <Body style={{ alignItems: "flex-end", paddingRight: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
                Cart
              </Text>
            </Body>

            <Right>
              <View style={{ paddingRight: 10, flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}
                >
                  Items
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}
                >
                  {" "}
                  {this.props.cartList.length}
                </Text>
              </View>
            </Right>
          </Header>
        </Display>

        <View style={{ flex: 4 }}>
          <ScrollView>{this.cartList()}</ScrollView>
        </View>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10
          }}
        >
          <TouchableOpacity
            style={styles.button}
            // onPress={() =>
            //   this.props.addToCart(
            //     this.props.ProductState && this.props.ProductState
            //   )
            // }
          >
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
              Place Order
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "red" }}>Total Price: .....</Text>
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

  text_element_id: {
    fontSize: 15
    // textAlign: "center",
    // color: "#FFFFFF",
  },

  text_element_item: {
    fontSize: 11
    // textAlign: "center",
    // color: "#FFFFFF",
  },
  text_element_type: {
    fontSize: 12
    // textAlign: "center",
    // color: "#FFFFFF",
  },

  text_element_price: {
    fontSize: 15,
    // textAlign: "center",
    color: "red"
  },

  images: {
    //paddingTop: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 110,
    width: 70,
    marginBottom: 5
  },

  texes: {
    height: 110,
    width: 220,
    marginBottom: 5,
    paddingLeft: 10
  },

  myStarStyle: {
    color: "yellow",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },

  myEmptyStarStyle: {
    // tintColor: 'white',
  },

  HeaderStyle: {
    height: 40,
    backgroundColor: "#255E76",
    alignItems: "center",
    justifyContent: "flex-start"
  },

  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5
  },

  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    //paddingLeft: 10,
    color: "grey"
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
  circle: {
    borderRadius: 50,
    height: 100,
    width: 100,
    margin: 15
  },
  button: {
    backgroundColor: "#255E76",
    height: 30,
    width: 120,
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: "#255E76",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10
  }
});
