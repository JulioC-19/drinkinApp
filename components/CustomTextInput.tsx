import React from 'react';
import {TextInput, Text, View, TextInputProps, StyleSheet} from 'react-native';

interface textInputProps extends TextInputProps {
  label: string;
  isPassword: boolean;
}

export const CustomTextInput = (props: textInputProps) => {
  return (
    <View style={styles.parentView}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.inputContainer}
        secureTextEntry={props.isPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    marginTop: '5%',
    marginLeft: 45,
    marginRight: 45,
  },
  inputContainer: {
    height: 50,
    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  label: {
    marginLeft: 15,
  },
});
