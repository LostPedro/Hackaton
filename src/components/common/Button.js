import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, textStyleProp, buttonStyleProp }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, buttonStyleProp]}>
      <Text style={[textStyle, textStyleProp]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: '#006496',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#006496',
    marginLeft: 8,
    marginRight: 8
  }
};

export { Button };
