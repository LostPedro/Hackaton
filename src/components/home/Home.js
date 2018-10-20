import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';

class Home extends Component {

  render() {
    return (
      <ImageBackground source={{ uri: 'https://4.bp.blogspot.com/-ylz0GQFhHq8/WfDNlW9h9TI/AAAAAAAAFHo/3OBE_CxO0lcfic4zr1TAlxlLusMPaSqsACLcBGAs/s1600/tsunami.jpg' }} style={{width: '100%', height: '100%'}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 30 }}>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.7)', height: 60, width: 350, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderRadius: 35, borderColor: 'gray' }}>
                <Text style={{ fontWeight: 'normal', fontSize: 18, color: 'white' }}>SURVIVE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF'
  },
};

export { Home };
