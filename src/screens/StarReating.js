
//This page Dosen't use in this app


import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import { ManList } from '../data/Data';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import { Rating } from 'react-native-elements';

let ic1 = <Ionicons name={'ios-star'} size={22}/>
let ic2 = <Ionicons name={'ios-star-outline'} size={22}/>
let ic3 = <Ionicons name={'ios-star-half'} size={22}/>

class StarReating extends React.Component {

    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }
    render() {
      return (
        <View style={{alignItems:'center'}}>
        <Stars
            half={true}
            default={2.5}
            // display={2.5}
            update={(val)=>{this.setState({stars: val})}}
            spacing={4}
            starSize={40}
            count={5}
            fullStar={require('../../assets/starf.png')}
            emptyStar={require('../../assets/star.png')}
            halfStar={require('../../assets/starh.png')}
        />

        <Stars
            half={true}
            // default={2.5}
            display={3.5}
            update={(val)=>{this.setState({stars: val})}}
            spacing={4}
            starSize={40}
            count={5}
            fullStar={require('../../assets/starf.png')}
            emptyStar={require('../../assets/star.png')}
            halfStar={require('../../assets/starh.png')}
        />  

        <Stars
            half={true}
            // default={2.5}
            display={3.5}
            update={(val)=>{this.setState({stars: val})}}
            spacing={4}
            starSize={40}
            count={5}
            fullStar={<Image
                style={styles.myStarStyle}
                source={require('../../assets/starf.png')}
              />}
            emptyStar={<Image
                style={styles.myStarStyle}
                source={require('../../assets/star.png')}
              />}
            halfStar={require('../../assets/starh.png')}
        />  

        <Stars
            half={true}
            default={2.5}
            // display={3.5}
            update={(val)=>{this.setState({stars: val})}}
            spacing={4}
            starSize={40}
            count={5}
            fullStar={ic1}
            emptyStar={ic2}
            halfStar={ic3}
        />  


<Rating
  showRating
  type="heart"
  fractions={1}
  startingValue={1.6}
  readonly
  imageSize={40}
//   onFinishRating={this.ratingCompleted}
  onStartRating={this.ratingStarted}
  style={{ paddingVertical: 10 }}
/>


        </View>
      );
    }
  
}

export default StarReating;

const styles = StyleSheet.create({
    myStarStyle: {
        width: 22,
     height: 22,
      tintColor: 'yellow',
      backgroundColor: 'transparent',
    //   textShadowColor: 'black',
    //   textShadowOffset: {width: 1, height: 1},
    //   textShadowRadius: 2,
    },
    myEmptyStarStyle: {
      color: 'white',
    }
  });