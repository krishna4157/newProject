import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Easing } from 'react-native'
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';

import Swiper from 'react-native-swiper'
import { Button } from 'react-native-paper'
import Animated from 'react-native-reanimated';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    alignItems: 'center',
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})



class SwiperComp extends Component {

    
  constructor () {
  	super()
    this.animatedValue = new Animated.Value(0)
  }
 

  render() {
      const {navigation}=this.props;
    return (
      <View>
      {/* // <Swiper style={styles.wrapper} showsButtons={true} loop={false}> */}
      {/* <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View> */}
        {/* <View style={styles.slide3}> */}
          {/* <Text style={styles.text}>And simple</Text>
          <View style={{alignSelf:'flex-end'}}>
          <View style={{paddingBottom:'12%'}}> */}
          <Button style={{backgroundColor:'red'}} onPress={()=>{
              navigation.navigate('Login')
              alert("HELLO WORLD!")
          }} >
              <Text style={{textAlign:'center'}}>NEXT</Text>
          </Button>
          {/* </View>
          </View>
        </View> */}
      </View>
    )
  }
}

export default SwiperComp;