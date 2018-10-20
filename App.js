import React from 'react';
import { View } from 'react-native';
import RoutesComponent from './src/routes';
//designed by {Smashicons} from Flaticon
//designed by {Freepik} from Flaticon

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <RoutesComponent />
      </View>
    );
  }
}
