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
  Dimensions,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BlurView, Constants } from 'expo';

class DisasterInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: "0", name: "Water", icon: "water" },
        { id: "1", name: "Flashlight", icon: "flashlight" },
        { id: "2", name: "Food", icon: "food-apple" },
        { id: "3", name: "Clothing", icon: "tshirt-v" },
        { id: "4", name: "First Aid", icon: "medical-bag" },
        { id: "5", name: "Battery", icon: "battery" },
        { id: "6", name: "Radio", icon: "radio-handheld" },
      ],
      dataSelected: []
    };
  }

  onPressInventory(item, i) {
    var array = [...this.state.data];
    array.splice(i, 1);
    this.setState(prevState => ({
      dataSelected: [...prevState.dataSelected, item]
    }))
    this.setState({data: array});
  }

  onPressMine(item, i) {
    var array = [...this.state.dataSelected];
    array.splice(i, 1);
    this.setState(prevState => ({
      data: [...prevState.data, item]
    }))
    this.setState({dataSelected: array});
  }

  render() {
    const columns = 4;
    return (
      <View style={{ flex: 1, backgroundColor: '#FCFCFC'}}>
        <View style={{ flex: 1, borderBottomWidth: 0.3 }}>
          <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 10 }}> Itens Avaiable </Text>
          <FlatList
            data={this.state.data}
            numColumns={columns}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => this.onPressInventory(item, this.state.data.indexOf(item))} style={styles.item}>
                  <Icon name={item.icon} size={20} />
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 10 }}> Your Items </Text>
          <FlatList
            data={this.state.dataSelected}
            numColumns={columns}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => this.onPressMine(item, this.state.dataSelected.indexOf(item))} style={[styles.item, {backgroundColor: '#8fa9d6'}]}>
                  <Icon name={item.icon} size={20} style={{ color: 'black' }} />
                  <Text style={[styles.text, { color: 'black' }]}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    marginTop: 10,
    flexBasis: 0,
    backgroundColor: "#bbb",
    flexGrow: 1,
    margin: 4,
    borderRadius: 10,
    padding: 10
  },
  text: {
    color: "black",
    marginTop: 5,
  },
  itemEmpty: {
    backgroundColor: "transparent"
  },
  statusBar: {
    backgroundColor: 'gray',
    height: Constants.statusBarHeight,
  },
});

export { DisasterInventory };
