import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface buttonProps extends TouchableOpacityProps {
  buttonText: string;
}

export const CustomButton = (props: buttonProps) => {
  return (
    <View style={styles.buttonConatiner}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonConatiner: {
    paddingTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#FFC463',
    borderRadius: 20,
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#000000',
  },
});
