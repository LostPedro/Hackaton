import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import { BlurView } from 'expo';

class Home extends Component {

  render() {
    return (
      <Swiper showsPagination={false} style={styles.wrapper} showsButtons={true}>
          <ImageBackground source={{ uri: 'http://paintingandframe.com/uploadpic/others/big/san_francisco_earthquake.jpg'}} style={styles.slide1}>
              <Text style={styles.text}>TSUNAMI</Text>
              <TouchableOpacity style={{ flex: 1, justifyContent : 'flex-end', alignItems: 'center', marginBottom: 30 }}>
                <BlurView intensity={90} blurType="light" style={styles.button}>
                  <Text style={{ fontWeight: 'normal', fontSize: 20, color: '#FFF', fontWeight: 'bold' }}>SURVIVE</Text>
                </BlurView>
              </TouchableOpacity>
          </ImageBackground>
        <View style={styles.slide2}>

        </View>
        <View style={styles.slide3}>

        </View>
      </Swiper>
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
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20
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
}
})

export { Home };
