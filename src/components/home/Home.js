import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../common';
import Swiper from 'react-native-swiper';

class Home extends Component {

  onButtonPress() {
    Actions.inventory();
  }

  renderButton() {
    return (
      <View>
        <Button
          buttonStyleProp={{ backgroundColor: 'rgba(255,255,255,0.7)', borderWidth: 0.5, borderColor: 'white', width: 200, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}
          textStyleProp={{ color: '#333', fontSize: 14 }}
          onPress={this.onButtonPress.bind(this)}
        >
          SURVIVE
        </Button>
        <Button
          buttonStyleProp={{ backgroundColor: 'rgba(255,255,255,0.7)', borderWidth: 0.5, borderColor: 'white', width: 200, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
          textStyleProp={{ color: '#333', fontSize: 14 }}
          onPress={this.onButtonPress.bind(this)}
        >
          INVENTORY
        </Button>
      </View>

    );
  }

  renderPhoto() {
      return (
        <View
          style={{ flex: 1.5,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center' }}
        >
          <Image
            source={ require('../../../assets/png/007-flood.png') }
            style={{ height: 200, width: 200, borderRadius: 100, borderWidth: 0.5, borderColor: '#01639A' }}
          />
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', marginTop: 30 }}>
            Inundações
          </Text>
        </View>
      );
    }

  render() {
    var {height, width} = Dimensions.get('window');
    let buttonLeft = (
      <Text style={styles.buttonText}>‹</Text>
    );
    let buttonRight = (
      <Text style={styles.buttonText}>›</Text>
    );
    return (
      <Swiper nextButton={buttonRight} prevButton={buttonLeft} style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <View style={{ flex: 1, backgroundColor: '#33486b', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 0.8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            </View>
            {this.renderPhoto()}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {this.renderButton()}
            </View>
          </View>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33486b',
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
  },
  buttonText: {
    fontSize: 50,
    color: 'white'
  },
})

export { Home };
