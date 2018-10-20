import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import { BlurView, Constants } from 'expo';

class Home extends Component {
  render() {
    var {height, width} = Dimensions.get('window');
    let buttonLeft = (
      <Text style={styles.buttonText}>‹</Text>
    );
    let buttonRight = (
      <Text style={styles.buttonText}>›</Text>
    );
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.statusBar, this.props.statusBarStyle]} />
        <Swiper nextButton={buttonRight} prevButton={buttonLeft} showsPagination={false} style={styles.wrapper} showsButtons={true}>
            <ImageBackground source={{ uri: 'https://ih1.redbubble.net/image.581169612.1450/flat,750x1000,075,t.u1.jpg'}} style={styles.slide1}>
                <BlurView intensity={90} blurType="light" style={{ width: width, alignItems: 'center', justifyContent: 'center', height: 50}}>
                  <Text style={styles.text}>MAREMOTO</Text>
                </BlurView>
                <TouchableOpacity style={{ flex: 1, justifyContent : 'flex-end', alignItems: 'center', marginBottom: 30 }}>
                  <BlurView intensity={90} blurType="light" style={styles.button}>
                    <Text style={{ fontWeight: 'normal', fontSize: 20, color: '#000', fontWeight: 'bold' }}>SURVIVE</Text>
                  </BlurView>
                </TouchableOpacity>
            </ImageBackground>
          <View style={styles.slide2}>

          </View>
          <View style={styles.slide3}>

          </View>
        </Swiper>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button:{
    marginBottom: 30,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    height: 60,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: 'gray'
  },
  buttonText: {
    fontSize: 50,
  },
  statusBar: {
    backgroundColor: 'darkgray',
    height: Constants.statusBarHeight,
  },
})

export { Home };
