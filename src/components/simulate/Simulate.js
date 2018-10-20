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

import { BlurView, Constants } from 'expo';

var script = 
  ["light", "Você está em casa com sua família quando, subitamente, um grande clarão consome o ambiente. A intensidade da luz é tamanha que você consegue enxergar o contorno dos seus olhos a olhar para a própria mão. O que você faz?",
  ["Procuro o meu celular.", ["nosignal", "Seu celular está sem sinal.",
    ["Ligo para a vivo.", ["nosignal", "Você está sem sinal, caralho.", null]],
    ["Pego o meu rádio de bateria.", null],
    ["Desisto de viver.", null]]],
  ["Olho pela janela.", ["explosion", "Você perde toda a sua visão, ficando temporariamente cego. O que você faz?", 
    ["Rezo.", ["jesus", "Você foi salvo pelo Senhor.", ["Glória a Deus!", ["gloria", "Glória a Deux!", null]]]]]],
  ["Dança kuduro.", ["burn", "Você e sua família aproveitam o show de luzes para dançar o kuduro. Todos riem muito. Vocês são desintegrados vivos.", null]]];


let img = {
  explosion: require("./../../../assets/nuke/explosion.jpg"),
  light: require("./../../../assets/nuke/light.png"),
  burn: require("./../../../assets/nuke/burn.png"),
  nosignal: require("./../../../assets/nuke/nosignal.jpg"),
  brokenglasses: require("./../../../assets/nuke/brokenglasses.png"),
  jesus: require("./../../../assets/nuke/jesus.jpg"),
  gloria: require("./../../../assets/nuke/gloria.jpg"),
}

class Countdown extends Component {
  formatTime() {
    return this.props.secondCount + "s";
  }

  render() {
    let style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 0.5,
      width: 42,
      height: 42,
      borderRadius: 21,
      borderColor: "gray",
      backgroundColor: "white",
      position: "absolute",
      zIndex: 1,
      left: 8,
      top: 24
    };

    return <View style={style}>
      <Text>
        {this.formatTime()}
      </Text>
    </View>;
  }
}

class Dialog extends Component {
  render() {
    let {height, width} = Dimensions.get('window');

    let dialogMargin = 16;
    let dialogPadding = 12;
    let imageWidth = width - dialogMargin * 2 - dialogPadding * 2;
    let imageHeight = imageWidth * 0.5;

    let dialogStyle = {
      borderWidth: 0.5,
      borderColor: "gray",
      backgroundColor: "white",
      margin: dialogMargin,
      padding: dialogPadding
    };

    let imageContainerStyle = {
        borderWidth: 0.5,
        borderColor: "gray",
        backgroundColor: "#eeffff",
        width: imageWidth,
        height: imageHeight
    };

    return <View style={dialogStyle}>

      <View style={imageContainerStyle}>
        <ImageBackground source={this.props.img} style={{width: imageContainerStyle.width, height: imageContainerStyle.height}}/>
      </View>

      <Text style={{paddingTop: 8}}>
        {this.props.desc}
      </Text>

    </View>;
  }
}

class Button extends Component {
  render() {
    let {height, width} = Dimensions.get('window');

    let marginVer = 8;
    let marginHor = 16;

    let style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: "gray",
      backgroundColor: "#d0d0d0",
      borderRadius: 4,
      marginTop: marginVer,
      marginBottom: marginVer,
      marginLeft: marginHor,
      marginRight: marginHor,
      width: width - marginHor * 2,
      height: 30
    };

    return <TouchableOpacity onPress={this.props.onPress} style={style}>
      <Text>
        {this.props.title}
      </Text>
    </TouchableOpacity>;
  }
}

class Simulate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: [],
      secondCount: 0
    };
  }

  componentDidMount() {
    this.countdownInterval = setInterval(() => {
      this.setState({secondCount: this.state.secondCount + 1});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  selectOption(option) {
    let moves = this.state.moves;
    moves.push(option);
    this.setState({moves});
  }
  
  render() {
    let situation = script;
    for (let i = 0; i < this.state.moves.length; ++i) {
      situation = situation[2 + this.state.moves[i]][1];
    }

    let buttons = [];
    if (situation) {
      for (let i = 0; i < situation.length - 2; ++i) {
        let opt = situation[2 + i];
        if (opt) {
          buttons.push(<Button key={i} title={opt[0]} onPress={() => this.selectOption(i)}/>);
        }
      }
    };

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Countdown secondCount={this.state.secondCount}/>
        <Dialog
          img={situation && situation[0] !== "none" ? img[situation[0]] : null}
          desc={situation ? situation[1] : "Fim da historinha."}/>
        {buttons}
      </View>
    );
  }
}

export { Simulate };
