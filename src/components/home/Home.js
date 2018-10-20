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
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0, 0.4)' }}>
          <Text style={styles.tilte}> HELLO WORLD</Text>
        </View>
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
